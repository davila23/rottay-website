"use client"

import { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Text, Box, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useScroll } from 'framer-motion'

interface TechLayer {
  name: string
  position: [number, number, number]
  color: string
  technologies: string[]
}

const techLayers: TechLayer[] = [
  {
    name: '⚛️ Frontend',
    position: [0, 3, 0],
    color: '#00D4FF',
    technologies: ['⚛️ React', '▲ Next.js', '🎮 Three.js', '📘 TypeScript', '🎨 Tailwind']
  },
  {
    name: '🔧 Backend',
    position: [0, 1.5, 0],
    color: '#8B5CF6',
    technologies: ['🟢 Node.js', '🐍 Python', '🔵 Go', '◈ GraphQL', '🔌 REST APIs']
  },
  {
    name: '🤖 AI/ML & RAG',
    position: [0, 0, 0],
    color: '#EC4899',
    technologies: ['🧠 TensorFlow', '🔥 PyTorch', '🦜 LangChain', '🤖 OpenAI', '💾 ChromaDB']
  },
  {
    name: '☁️ Infrastructure',
    position: [0, -1.5, 0],
    color: '#10B981',
    technologies: ['☁️ AWS', '☸️ Kubernetes', '🐳 Docker', '▲ Vercel', '🐘 PostgreSQL']
  },
  {
    name: '⛓️ Blockchain',
    position: [0, -3, 0],
    color: '#F59E0B',
    technologies: ['◈ Ethereum', '◉ Solana', '🌐 Web3.js', '📜 Smart Contracts', '🔶 BNB Chain']
  }
]

function DataParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = 500
  
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    const vel = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount; i++) {
      // Start particles between layers
      pos[i * 3] = (Math.random() - 0.5) * 8
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8
      pos[i * 3 + 2] = (Math.random() - 0.5) * 3
      
      // Random velocities
      vel[i * 3] = (Math.random() - 0.5) * 0.02
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.02
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.01
    }
    
    return [pos, vel]
  }, [])

  useFrame(() => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i * 3]
        positions[i * 3 + 1] += velocities[i * 3 + 1]
        positions[i * 3 + 2] += velocities[i * 3 + 2]
        
        // Wrap around
        if (Math.abs(positions[i * 3]) > 5) velocities[i * 3] *= -1
        if (Math.abs(positions[i * 3 + 1]) > 5) velocities[i * 3 + 1] *= -1
        if (Math.abs(positions[i * 3 + 2]) > 2) velocities[i * 3 + 2] *= -1
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true
      particlesRef.current.rotation.y += 0.001
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#00D4FF"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function GlassLayer({ layer, index, scrollProgress }: { layer: TechLayer; index: number; scrollProgress: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (groupRef.current) {
      // Separate layers based on scroll
      const separation = scrollProgress * 3
      groupRef.current.position.y = layer.position[1] + (index - 2) * separation
      
      // Gentle floating animation
      groupRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.15
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 + index) * 0.03
      
      // Hover effect - scale and glow
      if (meshRef.current) {
        const targetScale = hovered ? 1.08 : 1
        meshRef.current.scale.x = THREE.MathUtils.lerp(
          meshRef.current.scale.x,
          targetScale,
          0.1
        )
        meshRef.current.scale.z = THREE.MathUtils.lerp(
          meshRef.current.scale.z,
          targetScale,
          0.1
        )
      }
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
      <group ref={groupRef} position={layer.position}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <boxGeometry args={[7, 0.2, 3.5]} />
          <meshPhysicalMaterial
            color={layer.color}
            emissive={layer.color}
            emissiveIntensity={0.2}
            metalness={0.2}
            roughness={0.1}
            transparent
            opacity={0.8}
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
        
        {/* Layer name - floating above */}
        <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
          <Text
            position={[0, 0.8, 0]}
            fontSize={0.5}
            color="#FFFFFF"
            anchorX="center"
            fontWeight={700}
            outlineWidth={0.03}
            outlineColor={layer.color}
          >
            {layer.name}
          </Text>
        </Float>
        
        {/* Technologies - distributed on the layer */}
        {layer.technologies.map((tech, i) => (
          <Float key={tech} speed={1.5} floatIntensity={0.3}>
            <Text
              position={[
                (i - 2) * 1.3,
                0.05,
                i % 2 === 0 ? 1 : -1
              ]}
              fontSize={0.22}
              color="#FFFFFF"
              anchorX="center"
              outlineWidth={0.02}
              outlineColor="#000000"
              opacity={hovered ? 1 : 0.9}
            >
              {tech}
            </Text>
          </Float>
        ))}
        
        {/* Glowing edges */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[7.1, 0.17, 3.6]} />
          <meshBasicMaterial
            color={layer.color}
            transparent
            opacity={hovered ? 0.3 : 0.1}
            wireframe
          />
        </mesh>
        
        {/* Hover glow effect */}
        {hovered && (
          <mesh position={[0, 0, 0]} scale={[1.02, 1.5, 1.02]}>
            <boxGeometry args={[7, 0.15, 3.5]} />
            <meshBasicMaterial
              color={layer.color}
              transparent
              opacity={0.2}
              side={THREE.BackSide}
            />
          </mesh>
        )}
      </group>
    </Float>
  )
}

function TechStackScene() {
  const { scrollYProgress } = useScroll()
  const [scrollProgress, setScrollProgress] = useState(0)
  
  useFrame(() => {
    setScrollProgress(scrollYProgress.get())
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#FFFFFF" />
      <pointLight position={[0, 0, 0]} intensity={0.5} color="#00D4FF" />
      <pointLight position={[5, 5, 5]} intensity={0.3} color="#8B5CF6" />
      
      {/* Layers */}
      {techLayers.map((layer, index) => (
        <GlassLayer
          key={layer.name}
          layer={layer}
          index={index}
          scrollProgress={scrollProgress}
        />
      ))}
      
      {/* Data particles flowing between layers */}
      <DataParticles />
      
      {/* Orbital controls for interaction */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={5}
        maxDistance={15}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.5}
      />
      
      <fog attach="fog" args={['#000000', 15, 40]} />
    </>
  )
}

export function TechStackLayers() {
  return (
    <div className="w-full h-[600px] relative bg-gradient-to-b from-black via-gray-950 to-black">
      <Canvas
        camera={{ position: [5, 2, 8], fov: 50 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: '#000000' }}
      >
        <TechStackScene />
      </Canvas>
    </div>
  )
}