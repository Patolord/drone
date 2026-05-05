"use client";

import { useEffect, useRef } from "react";

export default function DroneFollower() {
  const droneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let droneX = window.innerWidth / 2;
    let droneY = window.innerHeight / 2;

    let mouseX = droneX;
    let mouseY = droneY;

    const preferredDistance = 80; // distância menor
    const followSpeed = 0.08;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // 🔥 direção do mouse
      const dx = mouseX - droneX;
      const dy = mouseY - droneY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      let dirX = 0;
      let dirY = 0;

      if (distance > 0) {
        dirX = dx / distance;
        dirY = dy / distance;
      }

      // 🔥 drone fica atrás do mouse
      const targetX = mouseX - dirX * preferredDistance;
      const targetY = mouseY - dirY * preferredDistance;

      droneX += (targetX - droneX) * followSpeed;
      droneY += (targetY - droneY) * followSpeed;

      // 🔥 rotação
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

      if (droneRef.current) {
        droneRef.current.style.left = `${droneX}px`;
        droneRef.current.style.top = `${droneY}px`;

        droneRef.current.style.transform = `
          translate(-50%, -50%)
          scaleX(${flip})
          rotate(${angle}deg)
        `;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={droneRef}
      style={{
        position: "fixed",
        width: "80px",
        height: "80px",
        pointerEvents: "none",
        zIndex: 9999,
        filter: "drop-shadow(0 0 8px #00ff99)",
      }}
    >
      {/* SVG COMPLETO CORRETO */}
      <svg viewBox="0 0 511.999 511.999">
        <g>
          <rect x="239.154" y="193.604" width="33.684" height="92.776" fill="#AFB6C7"/>
          <path fill="#707287" d="M256,127.016c-18.703,0-33.865,15.162-33.865,33.865v32.72h67.73v-32.72C289.865,142.179,274.703,127.016,256,127.016z"/>
          <path fill="#C7CFE2" d="M93.549,140.751c0,8.437-27.145,15.276-60.631,15.276s-33.485-30.551,0-30.551S93.549,132.315,93.549,140.751z"/>
          <path fill="#C7CFE2" d="M418.451,140.751c0,8.437,27.145,15.276,60.631,15.276s33.485-30.551,0-30.551S418.451,132.315,418.451,140.751z"/>
          <path fill="#707287" d="M107.774,179.847c8.659-22.513,5.938-53.685-14.226-53.685s-22.884,31.172-14.226,53.685H107.774z"/>
          <path fill="#707287" d="M404.226,179.847c-8.658-22.513-5.938-53.685,14.226-53.685s22.884,31.172,14.226,53.685H404.226z"/>
          <rect x="209.179" y="263.594" width="93.639" height="93.639" fill="#5B5D6E"/>
          <circle cx="255.999" cy="310.414" r="24.034" fill="#2A2A33"/>
          <circle cx="255.999" cy="310.622" r="7.187" fill="#000000"/>
        </g>
      </svg>
    </div>
  );
}