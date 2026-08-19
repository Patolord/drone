"use client";

import { MuxBackgroundVideo } from "@mux/mux-background-video/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  muxStreamUrl,
  type MuxMaxResolution,
} from "../lib/video-urls";

type MuxBgVideoProps = {
  playbackId: string;
  posterSrc: string;
  maxResolution: MuxMaxResolution;
  preload?: "none" | "metadata" | "auto";
  className?: string;
};

export default function MuxBgVideo({
  playbackId,
  posterSrc,
  maxResolution,
  preload = "auto",
  className = "",
}: MuxBgVideoProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(motionQuery.matches);
    sync();
    motionQuery.addEventListener("change", sync);
    return () => motionQuery.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const pauseOrPlay = () => {
      const video = rootRef.current?.querySelector("video");
      if (!video) return;
      if (document.hidden) {
        video.pause();
        return;
      }
      void video.play().catch(() => {});
    };

    document.addEventListener("visibilitychange", pauseOrPlay);
    return () => document.removeEventListener("visibilitychange", pauseOrPlay);
  }, [playbackId, reducedMotion]);

  if (reducedMotion) {
    return (
      <Image
        src={posterSrc}
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className={`object-cover ${className}`.trim()}
      />
    );
  }

  return (
    <div ref={rootRef} className={`relative h-full w-full ${className}`.trim()}>
      <MuxBackgroundVideo
        src={muxStreamUrl(playbackId)}
        maxResolution={maxResolution}
        preload={preload}
        className="h-full w-full object-cover"
        aria-hidden="true"
      >
        {/* Mux Background Video styles the direct img child as the poster. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={posterSrc} alt="" aria-hidden="true" />
      </MuxBackgroundVideo>
    </div>
  );
}
