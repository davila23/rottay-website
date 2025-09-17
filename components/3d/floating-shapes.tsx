"use client"

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function NeuralNetwork() {
  const meshRef = useRef<THREE.Group>(null)

  // Create neural network nodes  
  const nodes = useMemo(() => {
    const temp = []
    const layers = [3, 5, 5, 3]
    
    for (let layer = 0; layer < layers.length; layer++) {
      for (let i = 0; i < layers[layer]; i++) {
        temp.push({
          x: (layer - 1.5) * 3,
          y: (i - layers[layer] / 2) * 1.5,
          z: 0
        })
      }
    }
    return temp
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.2
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.1
    }
  })

  return (
    <group ref={meshRef}>
      {/* Neural Network Nodes - White/Gray */}
      {nodes.map((node, i) => (
        <Float key={i} speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
          <mesh position={[node.x, node.y, node.z]}>
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshStandardMaterial
              color="#F5F2ED"
              emissive="#F5F2ED"
              emissiveIntensity={0.05}
              metalness={0.3}
              roughness={0.7}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function GlassPanel({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation[0] + Math.sin(state.clock.elapsedTime * 0.5) * 0.02
      meshRef.current.rotation.y = rotation[1] + Math.cos(state.clock.elapsedTime * 0.3) * 0.02
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <planeGeometry args={[2, 3, 1, 1]} />
        <meshStandardMaterial
          color="#FFFFFF"
          transparent
          opacity={0.03}
          metalness={0.1}
          roughness={0.9}
        />
      </mesh>
    </Float>
  )
}

function DataParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const count = 300
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15  
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    
    return positions
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.01}
        color="#333333"
        transparent
        opacity={0.2}
        sizeAttenuation
      />
    </points>
  )
}

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.3} color="#FFFFFF" />
        <pointLight position={[0, 0, 0]} intensity={0.1} color="#F5F2ED" />
        
        <NeuralNetwork />
        
        <GlassPanel position={[-4, 2, -2]} rotation={[0.1, 0.5, 0]} />
        <GlassPanel position={[4, -1, -1]} rotation={[-0.1, -0.3, 0]} />
        
        <DataParticles />
        
        <fog attach="fog" args={['#000000', 10, 25]} />
      </Canvas>
    </div>
  )
}