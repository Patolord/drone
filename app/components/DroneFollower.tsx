"use client";

import { useEffect, useRef, useState } from "react";

export default function DroneFollower() {
  const droneRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const pointerQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 768px)",
    );
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncEnabled = () => {
      setEnabled(pointerQuery.matches && !motionQuery.matches);
    };

    syncEnabled();
    pointerQuery.addEventListener("change", syncEnabled);
    motionQuery.addEventListener("change", syncEnabled);

    return () => {
      pointerQuery.removeEventListener("change", syncEnabled);
      motionQuery.removeEventListener("change", syncEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let droneX = window.innerWidth / 2;
    let droneY = window.innerHeight / 2;

    let mouseX = droneX;
    let mouseY = droneY;

    const preferredDistance = 80;
    const followSpeed = 0.08;
    let frameId: number | null = null;

    const renderDrone = (angle = 0, flip = 1) => {
      if (!droneRef.current) return;

      droneRef.current.style.transform = `
        translate3d(${droneX}px, ${droneY}px, 0)
        translate(-50%, -50%)
        scaleX(${flip})
        rotate(${angle}deg)
      `;
    };

    const animate = () => {
      frameId = null;

      const dx = mouseX - droneX;
      const dy = mouseY - droneY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      let dirX = 0;
      let dirY = 0;

      if (distance > 0) {
        dirX = dx / distance;
        dirY = dy / distance;
      }

      const targetX = mouseX - dirX * preferredDistance;
      const targetY = mouseY - dirY * preferredDistance;

      droneX += (targetX - droneX) * followSpeed;
      droneY += (targetY - droneY) * followSpeed;

      let angle = (Math.atan2(dy, dx) * 180) / Math.PI;

      let flip = 1;

      if (angle > 90) {
        angle -= 180;
        flip = -1;
      }

      if (angle < -90) {
        angle += 180;
        flip = -1;
      }

      renderDrone(angle, flip);

      const remaining = Math.hypot(targetX - droneX, targetY - droneY);
      if (remaining > 0.5) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    const scheduleFrame = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      scheduleFrame();
    };

    renderDrone();
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={droneRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "90px",
        height: "90px",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate3d(50vw, 50vh, 0) translate(-50%, -50%)",
        willChange: "transform",
      }}
    >
      <svg
        viewBox="0 0 512 512"
        aria-hidden="true"
        focusable="false"
        style={{ width: "100%", height: "100%" }}
      >
        <path
          fill="#C7CFE2"
          d="M503.172,141.241H308.966c-4.875,0-8.828-3.953-8.828-8.828s3.953-8.828,8.828-8.828h194.207c4.875,0,8.828,3.953,8.828,8.828S508.047,141.241,503.172,141.241z"
        />
        <path
          fill="#C7CFE2"
          d="M203.034,141.241H8.828c-4.875,0-8.828-3.953-8.828-8.828s3.953-8.828,8.828-8.828h194.207c4.875,0,8.828,3.953,8.828,8.828S207.91,141.241,203.034,141.241z"
        />
        <path
          fill="#959CB3"
          d="M105.931,105.931c-4.875,0-8.828,3.953-8.828,8.828v44.138h17.655v-44.138C114.759,109.884,110.806,105.931,105.931,105.931z"
        />
        <path
          fill="#959CB3"
          d="M406.069,105.931c-4.875,0-8.828,3.953-8.828,8.828v44.138h17.655v-44.138C414.897,109.884,410.944,105.931,406.069,105.931z"
        />
        <rect x="79.448" y="167.724" fill="#5B5D6E" width="52.966" height="17.655" />
        <rect x="379.586" y="167.724" fill="#5B5D6E" width="52.966" height="17.655" />
        <path
          fill="#C7CFE2"
          d="M441.379,203.034H70.621c-4.875,0-8.828-3.953-8.828-8.828s3.953-8.828,8.828-8.828h370.759c4.875,0,8.828,3.953,8.828,8.828S446.254,203.034,441.379,203.034z"
        />
        <path
          fill="#B8C2D9"
          d="M334.869,166.784l-34.951-3.495c-29.206-2.921-58.632-2.921-87.838,0l-34.951,3.495 c-6.083,0.608-11.768,3.303-16.09,7.625l-10.97,10.97H256h105.931l-10.97-10.97 C346.637,170.086,340.952,167.392,334.869,166.784z"
        />
        <path
          fill="#AEB9D4"
          d="M123.586,203.034l9.899,9.899c4.967,4.967,11.702,7.756,18.727,7.756h19.926 c8.335,0,16.184,3.925,21.186,10.593l7.945,10.593c6.668,8.892,17.134,14.124,28.248,14.124h52.966 c11.114,0,21.58-5.233,28.248-14.124l7.945-10.593c5.002-6.668,12.851-10.593,21.186-10.593h19.927 c7.023,0,13.76-2.791,18.727-7.756l9.898-9.899H123.586z"
        />
        <rect x="238.345" y="247.172" fill="#5B5D6E" width="35.31" height="88.276" />
        <path
          fill="#959CB3"
          d="M317.793,397.241h-88.276c-4.875,0-8.828-3.953-8.828-8.828v-52.966c0-4.875,3.953-8.828,8.828-8.828h88.276c4.875,0,8.828,3.953,8.828,8.828v52.966C326.621,393.289,322.668,397.241,317.793,397.241z"
        />
        <circle fill="#464655" cx="291.31" cy="361.931" r="26.483" />
        <circle fill="#E4EAF6" cx="291.31" cy="361.931" r="8.828" />
        <path
          fill="#FF6464"
          d="M150.069,203.034h-8.828c-4.875,0-8.828-3.953-8.828-8.828v-8.828h26.483v8.828C158.897,199.082,154.944,203.034,150.069,203.034z"
        />
        <path
          fill="#FF6464"
          d="M379.586,203.034h-8.828c-4.875,0-8.828-3.953-8.828-8.828v-8.828h26.483v8.828C388.414,199.082,384.461,203.034,379.586,203.034z"
        />
      </svg>
    </div>
  );
}
