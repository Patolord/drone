"use client";

import type Hls from "hls.js";
import { useEffect, useRef, useState, type VideoHTMLAttributes } from "react";

type HlsVideoProps = VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
  active?: boolean;
  loadWhenVisible?: boolean;
};

export default function HlsVideo({
  src,
  active = true,
  loadWhenVisible = false,
  className = "",
  onLoadedData,
  ...props
}: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(!loadWhenVisible);

  useEffect(() => {
    const video = videoRef.current;
    if (!loadWhenVisible || !video) return;

    if (typeof IntersectionObserver === "undefined") {
      queueMicrotask(() => setIsVisible(true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
            return;
          }
        }
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [loadWhenVisible]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.dataset.ready = "false";

    const clearVideo = () => {
      video.pause();
      video.removeAttribute("src");
      video.load();
    };

    if (!active) {
      clearVideo();
      return;
    }

    if (!isVisible) return;

    let cancelled = false;
    let hls: Hls | null = null;

    const selectHighestQuality = (currentHls: Hls) => {
      const highestLevel = currentHls.levels.reduce((bestIndex, level, index) => {
        const bestLevel = currentHls.levels[bestIndex];
        return level.bitrate > bestLevel.bitrate ? index : bestIndex;
      }, 0);

      currentHls.startLevel = highestLevel;
      currentHls.loadLevel = highestLevel;
      currentHls.nextLevel = highestLevel;
      currentHls.currentLevel = highestLevel;
    };

    const playIfAutoplaying = (currentVideo: HTMLVideoElement) => {
      if (currentVideo.autoplay) {
        void currentVideo.play().catch(() => {
          // Browsers may still block autoplay in some contexts.
        });
      }
    };

    const loadVideo = async () => {
      if (cancelled || !videoRef.current) return;

      const currentVideo = videoRef.current;
      if (currentVideo.canPlayType("application/vnd.apple.mpegurl")) {
        currentVideo.src = src;
        playIfAutoplaying(currentVideo);
        return;
      }

      const { default: Hls } = await import("hls.js");

      if (cancelled) return;

      if (!Hls.isSupported()) {
        currentVideo.src = src;
        playIfAutoplaying(currentVideo);
        return;
      }

      hls = new Hls({
        autoStartLoad: false,
        capLevelToPlayerSize: false,
        startLevel: -1,
      });

      hls.loadSource(src);
      hls.attachMedia(currentVideo);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (!hls) return;

        if (hls.levels.length > 0) {
          selectHighestQuality(hls);
        }
        hls.startLoad(-1);
        playIfAutoplaying(currentVideo);
      });
    };

    void loadVideo();

    return () => {
      cancelled = true;
      hls?.destroy();
      clearVideo();
    };
  }, [active, isVisible, src]);

  return (
    <video
      ref={videoRef}
      {...props}
      className={className}
      data-ready="false"
      onLoadedData={(event) => {
        event.currentTarget.dataset.ready = "true";
        onLoadedData?.(event);
      }}
    />
  );
}
