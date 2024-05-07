"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Model } from "../../public/Car";
import { Environment, OrbitControls } from "@react-three/drei";

const Page = () => {
  return (
    <div className="w-screen h-screen bg-white">
      <Canvas className="w-full h-full">
        <Environment preset="city" />
        <OrbitControls />
        <axesHelper />
        <gridHelper />
        <Model />
      </Canvas>
    </div>
  );
};

export default Page;
