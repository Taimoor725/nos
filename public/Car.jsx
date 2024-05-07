"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF("/car.glb");
  const bodyRef = useRef(null);
  const carRef = useRef(null);
  useFrame(() => {
    if (!carRef.current) return;

    if(carRef.current.position.y != 10) carRef.current.position.y += 0.01
  });

  return (
    <group {...props} dispose={null} ref={carRef}>
      {/* body */}
      <mesh
        geometry={nodes.Plane008.geometry}
        material={materials.Body}
        onClick={() => bodyRef.current.color.set("red")}
      >
        <meshStandardMaterial color={"blue"} ref={bodyRef} />
      </mesh>
      {/* wiper */}
      <mesh geometry={nodes.Plane008_1.geometry} material={materials.Wipers} />
      {/* silencer */}
      <mesh geometry={nodes.Plane008_2.geometry} material={materials.Black} />
      {/* frontlight  */}
      <mesh
        geometry={nodes.Plane008_3.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        geometry={nodes.Plane008_4.geometry}
        material={materials.Interior}
      />
      {/* grills */}
      <mesh
        geometry={nodes.Plane008_5.geometry}
        material={materials["Material.001"]}
      />
      {/* glasses */}
      <mesh geometry={nodes.Plane008_6.geometry} material={materials.Glass} />
      {/* backlight */}
      <mesh
        geometry={nodes.Plane008_7.geometry}
        material={materials["Material.007"]}
      />
      {/* tyres */}
      <group
        position={[0.763, 0.225, 1.128]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      >
        <mesh
          geometry={nodes.Circle002.geometry}
          material={materials["testarossawheel.001"]}
        />
        <mesh
          geometry={nodes.Circle002_1.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        position={[0.85, 0.225, -1.415]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      >
        <mesh
          geometry={nodes.Circle002.geometry}
          material={materials["testarossawheel.001"]}
        />
        <mesh
          geometry={nodes.Circle002_1.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[-0.764, 0.225, 1.128]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Circle003.geometry}
          material={materials.testarossawheel}
        />
        <mesh
          geometry={nodes.Circle003_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <group position={[-0.85, 0.225, -1.415]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Circle003.geometry}
          material={materials.testarossawheel}
        />
        <mesh
          geometry={nodes.Circle003_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/car.glb");
