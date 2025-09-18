"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, PerspectiveCamera, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// 3D Cube Grid for Architecture/Building
function CubeGrid() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  const cubePositions = []
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        if (Math.random() > 0.3) { // Random gaps for visual interest
          cubePositions.push([x * 0.8, y * 0.8, z * 0.8])
        }
      }
    }
  }

  return (
    <group ref={groupRef}>
      {cubePositions.map((position, index) => (
        <Float
          key={index}
          speed={2}
          rotationIntensity={0.5}
          floatIntensity={0.2}
          floatingRange={[0, 0.1]}
        >
          <mesh position={position as [number, number, number]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#333333"
              emissiveIntensity={0.2}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

// 3D Sphere Network for Voice AI
function VoiceSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = -state.clock.elapsedTime * 0.1
    }
  })

  // Create particles around sphere
  const particleCount = 100
  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.random() * Math.PI
    const radius = 2 + Math.random() * 0.5
    
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = radius * Math.cos(phi)
  }

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 2]} />
        <MeshDistortMaterial
          color="#ffffff"
          emissive="#444444"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
          distort={0.2}
          speed={2}
        />
      </mesh>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#888888" />
      </points>
    </group>
  )
}

// 3D Cloud for Cloud Native
function CloudMesh() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main cloud body */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color="#ffffff"
          emissive="#555555"
          emissiveIntensity={0.2}
          metalness={0.3}
          roughness={0.8}
          distort={0.3}
          speed={1}
        />
      </mesh>
      {/* Cloud puffs */}
      <mesh position={[-0.8, 0, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.3} roughness={0.8} />
      </mesh>
      <mesh position={[0.8, 0, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.3} roughness={0.8} />
      </mesh>
      <mesh position={[0, 0, 0.6]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.3} roughness={0.8} />
      </mesh>
    </group>
  )
}

// 3D Globe for Multi-Region
function GlobeMesh() {
  const meshRef = useRef<THREE.Mesh>(null)
  const ringsRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.z = state.clock.elapsedTime * 0.3
      ringsRef.current.rotation.x = Math.PI / 6
    }
  })

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#333333"
          emissiveIntensity={0.2}
          metalness={0.7}
          roughness={0.3}
          wireframe
        />
      </mesh>
      {/* Orbital rings */}
      <mesh ref={ringsRef}>
        <torusGeometry args={[2, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#666666"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  )
}

// 3D Checkmark for Enterprise Ready
function CheckMesh() {
  const meshRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05
      meshRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05
      meshRef.current.scale.z = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05
    }
  })

  return (
    <group ref={meshRef}>
      {/* Shield shape */}
      <mesh>
        <cylinderGeometry args={[1, 1.2, 2, 6]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#444444"
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      {/* Checkmark */}
      <mesh position={[0, 0, 0.1]} rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[0.3, 1, 0.1]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.3, -0.3, 0.1]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.3, 0.6, 0.1]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
    </group>
  )
}

interface Animated3DIconProps {
  type: 'voice' | 'cloud' | 'globe' | 'building' | 'check'
  className?: string
}

export function Animated3DIcon({ type, className = '' }: Animated3DIconProps) {
  return (
    <div className={`${className}`} style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        
        {type === 'voice' && <VoiceSphere />}
        {type === 'cloud' && <CloudMesh />}
        {type === 'globe' && <GlobeMesh />}
        {type === 'building' && <CubeGrid />}
        {type === 'check' && <CheckMesh />}
      </Canvas>
    </div>
  )
}