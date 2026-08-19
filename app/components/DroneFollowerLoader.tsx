"use client";

import dynamic from "next/dynamic";

const DroneFollower = dynamic(() => import("./DroneFollower"), {
  ssr: false,
  loading: () => null,
});

export default function DroneFollowerLoader() {
  return <DroneFollower />;
}
