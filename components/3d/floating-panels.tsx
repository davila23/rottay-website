"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface FloatingPanelProps {
  position: [number, number, number]
  rotation: [number, number, number]
  size: [number, number]
  delay?: number
}

function FloatingPanel({ position, rotation, size, delay = 0 }: FloatingPanelProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime + delay
      meshRef.current.rotation.x = rotation[0] + Math.sin(time * 0.5) * 0.1
      meshRef.current.rotation.y = rotation[1] + Math.cos(time * 0.3) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(time * 0.4) * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <planeGeometry args={size} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          resolution={512}
          transmission={0.95}
          roughness={0.02}
          thickness={0.2}
          ior={1.5}
          chromaticAberration={0.03}
          anisotropy={0.1}
          distortion={0.0}
          distortionScale={0.0}
          temporalDistortion={0.1}
          clearcoat={1}
          attenuationDistance={0.5}
          attenuationColor="#F5F2ED"
          color="#FFFFFF"
        />
      </mesh>
    </Float>
  )
}

function FloatingPanelsScene() {
  return (
    <group>
      <FloatingPanel 
        position={[-4, 2, -2]} 
        rotation={[0.1, 0.5, 0]} 
        size={[2.5, 3.5]} 
        delay={0}
      />
      <FloatingPanel 
        position={[4, -1, -1]} 
        rotation={[-0.1, -0.3, 0]} 
        size={[2, 3]} 
        delay={1}
      />
      <FloatingPanel 
        position={[0, -3, -3]} 
        rotation={[0.2, 0.1, 0]} 
        size={[1.8, 2.5]} 
        delay={2}
      />
      <FloatingPanel 
        position={[-2, 0, 1]} 
        rotation={[0, 0.8, 0.1]} 
        size={[1.5, 2]} 
        delay={1.5}
      />
      <FloatingPanel 
        position={[3, 2, 0]} 
        rotation={[0.3, -0.2, 0]} 
        size={[2.2, 2.8]} 
        delay={0.7}
      />
    </group>
  )
}

export function FloatingPanels() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        
        <FloatingPanelsScene />
      </Canvas>
    </div>
  )
}