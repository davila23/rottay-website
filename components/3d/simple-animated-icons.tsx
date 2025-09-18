"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text3D, Center, Box, Sphere } from '@react-three/drei'
import * as THREE from 'three'

// Voice AI - Sound waves
function VoiceWaves() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, index) => {
        child.scale.y = 1 + Math.sin(state.clock.elapsedTime * 2 + index * 0.5) * 0.3
      })
    }
  })

  return (
    <group ref={groupRef}>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[(i - 2) * 0.4, 0, 0]}>
          <boxGeometry args={[0.15, 1, 0.15]} />
          <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.1} />
        </mesh>
      ))}
    </group>
  )
}

// Cloud Native - Simple cloud
function CloudIcon() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
      <group ref={groupRef}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.1} />
        </mesh>
        <mesh position={[-0.5, 0, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.1} />
        </mesh>
        <mesh position={[0.5, 0, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.1} />
        </mesh>
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[1.5, 0.4, 0.8]} />
          <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.1} />
        </mesh>
      </group>
    </Float>
  )
}

// Multi-Region - Globe dots
function GlobeIcon() {
  const meshRef = useRef<THREE.Mesh>(null)
  const dotsRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
    if (dotsRef.current) {
      dotsRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  // Create dots on sphere surface
  const dots = []
  for (let i = 0; i < 30; i++) {
    const phi = Math.acos(-1 + (2 * i) / 30)
    const theta = Math.sqrt(30 * Math.PI) * phi
    const x = Math.cos(theta) * Math.sin(phi) * 1.2
    const y = Math.sin(theta) * Math.sin(phi) * 1.2
    const z = Math.cos(phi) * 1.2
    dots.push({ x, y, z })
  }

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial 
          color="white" 
          wireframe 
          emissive="white" 
          emissiveIntensity={0.05}
          opacity={0.3}
          transparent
        />
      </mesh>
      <group ref={dotsRef}>
        {dots.map((pos, i) => (
          <mesh key={i} position={[pos.x, pos.y, pos.z]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial 
              color="white" 
              emissive="white" 
              emissiveIntensity={0.2}
            />
          </mesh>
        ))}
      </group>
    </group>
  )
}

// Enterprise Ready - Shield with checkmark
function ShieldCheck() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02
      groupRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
      <group ref={groupRef}>
        {/* Shield outline */}
        <mesh>
          <ringGeometry args={[0.9, 1.2, 6]} />
          <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.1} />
        </mesh>
        {/* Checkmark */}
        <group position={[0, 0, 0.1]}>
          <mesh position={[-0.2, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.15, 0.5, 0.1]} />
            <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.2} />
          </mesh>
          <mesh position={[0.1, -0.2, 0]} rotation={[0, 0, -Math.PI / 4]}>
            <boxGeometry args={[0.15, 0.8, 0.1]} />
            <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.2} />
          </mesh>
        </group>
      </group>
    </Float>
  )
}

// Architecture - Building blocks
function BuildingBlocks() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {/* Base layer */}
      <mesh position={[0, -0.6, 0]}>
        <boxGeometry args={[1.8, 0.3, 1.8]} />
        <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.1} />
      </mesh>
      {/* Middle layer */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.2, 0.4, 1.2]} />
        <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.1} />
      </mesh>
      {/* Top layer */}
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[0.6, 0.5, 0.6]} />
        <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.1} />
      </mesh>
    </group>
  )
}

interface SimpleAnimatedIconProps {
  type: 'voice' | 'cloud' | 'globe' | 'building' | 'check'
  className?: string
}

export function SimpleAnimatedIcon({ type, className = '' }: SimpleAnimatedIconProps) {
  return (
    <div className={`${className}`} style={{ width: '100%', height: '100%' }}>
      <Canvas 
        camera={{ position: [0, 0, 4], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        
        {type === 'voice' && <VoiceWaves />}
        {type === 'cloud' && <CloudIcon />}
        {type === 'globe' && <GlobeIcon />}
        {type === 'building' && <BuildingBlocks />}
        {type === 'check' && <ShieldCheck />}
      </Canvas>
    </div>
  )
}