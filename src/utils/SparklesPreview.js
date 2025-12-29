"use client";
import React from "react";
import { SparklesCore } from "./Sparkles";

export function SparklesPreview() {
  return (
    <div
      style={{ backgroundColor: "black", height: "0px" }}
      className="h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md"
    >
      <div className="w-full inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
