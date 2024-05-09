"use client"
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Car from "@/public/model/Car"

function CarModel() {
  return (
    <div className='w-screen h-screen justify-center items-center flex'>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={10} />
        <Suspense fallback={null}>
        <Car/>
        </Suspense>
      </Canvas>

    </div>
  )
}

export default CarModel
