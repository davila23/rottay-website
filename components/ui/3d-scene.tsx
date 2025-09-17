"use client"

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function FloatingShape({ position, color, scale = 1 }: any) {
  const mesh = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          speed={1.5}
          distort={0.3}
          radius={1}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  )
}

function GradientSphere({ position }: any) {
  const mesh = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} position={position}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#8b5cf6"
          roughness={0.1}
          metalness={0.9}
          emissive="#8b5cf6"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
        
        <FloatingShape position={[-4, 2, 0]} color="#8b5cf6" scale={1.2} />
        <FloatingShape position={[4, -2, -2]} color="#ec4899" scale={0.8} />
        <FloatingShape position={[0, 3, -3]} color="#06b6d4" scale={1} />
        
        <GradientSphere position={[3, 1, -1]} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}