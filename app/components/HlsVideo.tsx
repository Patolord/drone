"use client";

import Hls from "hls.js";
import { useEffect, useRef, type VideoHTMLAttributes } from "react";

type HlsVideoProps = VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
  active?: boolean;
};

export default function HlsVideo({
  src,
  active = true,
  ...props
}: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!active) {
      video.pause();
      video.removeAttribute("src");
      video.load();
      return;
    }

    if (!Hls.isSupported()) {
      video.src = src;
      return;
    }

    const hls = new Hls({
      autoStartLoad: false,
      capLevelToPlayerSize: false,
    });

    hls.loadSource(src);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      const highestLevel = hls.levels.length - 1;
      if (highestLevel >= 0) {
        hls.startLevel = highestLevel;
        hls.loadLevel = highestLevel;
        hls.nextLevel = highestLevel;
        hls.currentLevel = highestLevel;
      }
      hls.startLoad(-1);
    });

    return () => {
      hls.destroy();
    };
  }, [active, src]);

  return <video ref={videoRef} {...props} />;
}
