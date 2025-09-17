"use client"

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text, Box, OrbitControls, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface TechLayer {
  name: string
  position: [number, number, number]
  technologies: string[]
}

const techLayers: TechLayer[] = [
  {
    name: 'Frontend',
    position: [0, 3, 0],
    technologies: ['React', 'Next.js', 'Three.js', 'TypeScript', 'Tailwind']
  },
  {
    name: 'Backend',
    position: [0, 1.5, 0],
    technologies: ['Node.js', 'Python', 'Go', 'GraphQL', 'REST APIs']
  },
  {
    name: 'AI/ML & RAG',
    position: [0, 0, 0],
    technologies: ['TensorFlow', 'PyTorch', 'LangChain', 'OpenAI', 'ChromaDB']
  },
  {
    name: 'Infrastructure',
    position: [0, -1.5, 0],
    technologies: ['AWS', 'Kubernetes', 'Docker', 'Vercel', 'PostgreSQL']
  },
  {
    name: 'Blockchain',
    position: [0, -3, 0],
    technologies: ['Ethereum', 'Solana', 'Web3.js', 'Smart Contracts', 'BNB Chain']
  }
]

function MinimalLayer({ layer, index }: { layer: TechLayer; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating
      groupRef.current.position.y = layer.position[1] + Math.sin(state.clock.elapsedTime + index) * 0.05
      
      // Scale on hover
      if (meshRef.current) {
        const targetScale = hovered ? 1.05 : 1
        meshRef.current.scale.x = THREE.MathUtils.lerp(
          meshRef.current.scale.x,
          targetScale,
          0.1
        )
      }
    }
  })

  return (
    <group ref={groupRef} position={layer.position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[8, 0.08, 4]} />
        <meshStandardMaterial
          color={hovered ? '#F5F2ED' : '#FFFFFF'}
          metalness={0.1}
          roughness={0.8}
          transparent
          opacity={hovered ? 0.15 : 0.08}
        />
      </mesh>
      
      {/* Layer name */}
      <Text
        position={[-3.5, 0.1, 0]}
        fontSize={0.25}
        color="#F5F2ED"
        anchorX="left"
        fontWeight={600}
      >
        {layer.name}
      </Text>
      
      {/* Technologies as simple text */}
      <Text
        position={[-3.5, -0.15, 0]}
        fontSize={0.12}
        color="#666666"
        anchorX="left"
        maxWidth={7}
      >
        {layer.technologies.join(' • ')}
      </Text>
      
      {/* Edge lines */}
      <mesh position={[0, 0, 2]}>
        <boxGeometry args={[8, 0.002, 0.002]} />
        <meshBasicMaterial color="#333333" />
      </mesh>
      <mesh position={[0, 0, -2]}>
        <boxGeometry args={[8, 0.002, 0.002]} />
        <meshBasicMaterial color="#333333" />
      </mesh>
    </group>
  )
}

function DataGrid() {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.02
      
      // Animate individual instances
      const time = state.clock.elapsedTime
      for (let i = 0; i < 100; i++) {
        const matrix = new THREE.Matrix4()
        const x = (i % 10 - 5) * 2
        const z = (Math.floor(i / 10) - 5) * 2
        const y = Math.sin(time + i * 0.1) * 0.1
        
        matrix.setPosition(x, y, z)
        meshRef.current.setMatrixAt(i, matrix)
      }
      meshRef.current.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, 100]}>
      <boxGeometry args={[0.05, 0.05, 0.05]} />
      <meshBasicMaterial color="#333333" transparent opacity={0.3} />
    </instancedMesh>
  )
}

function TechStackScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.4} color="#FFFFFF" />
      
      {/* Minimal layers */}
      {techLayers.map((layer, index) => (
        <MinimalLayer
          key={layer.name}
          layer={layer}
          index={index}
        />
      ))}
      
      {/* Subtle data grid in background */}
      <DataGrid />
      
      {/* Simple controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2.5}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.2}
      />
    </>
  )
}

export function TechStackMinimal() {
  return (
    <div className="w-full h-[600px] relative bg-black">
      <Canvas
        camera={{ position: [6, 3, 10], fov: 45 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: '#000000' }}
      >
        <TechStackScene />
      </Canvas>
    </div>
  )
}