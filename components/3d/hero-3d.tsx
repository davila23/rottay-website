"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={2.5} position={[3, 0, 0]}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#1a1a1a"
          emissive="#000000"
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  )
}

function AnimatedTorus() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={2} position={[-3, -1, -2]}>
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <meshStandardMaterial
          color="#2a2a2a"
          emissive="#111111"
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>
    </Float>
  )
}

function AnimatedOctahedron() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Float speed={4} rotationIntensity={2} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.5} position={[0, 2, -3]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#0a0a0a"
          emissive="#050505"
          roughness={0.1}
          metalness={1}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function ParticleField() {
  const points = useRef<THREE.Points>(null)
  const particlesCount = 500
  
  const positions = new Float32Array(particlesCount * 3)
  
  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }
  
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05
      points.current.rotation.x = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#F5F2ED"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.3}
      />
    </points>
  )
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.3} />
        <pointLight position={[-10, -10, -5]} intensity={0.2} color="#F5F2ED" />
        
        <ParticleField />
        <AnimatedSphere />
        <AnimatedTorus />
        <AnimatedOctahedron />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}