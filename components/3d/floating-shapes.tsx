"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Box, Torus } from '@react-three/drei'
import * as THREE from 'three'

function Shape({ position, color, type = 'sphere' }: any) {
  const mesh = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh} position={position}>
        {type === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
        {type === 'box' && <boxGeometry args={[1.5, 1.5, 1.5]} />}
        {type === 'torus' && <torusGeometry args={[1, 0.4, 16, 32]} />}
        <MeshDistortMaterial
          color={color}
          speed={1.5}
          distort={0.3}
          radius={1}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
        
        <Shape position={[-3, 2, 0]} color="#8b5cf6" type="sphere" />
        <Shape position={[3, -1, -2]} color="#ec4899" type="box" />
        <Shape position={[0, 1, -1]} color="#06b6d4" type="torus" />
      </Canvas>
    </div>
  )
}