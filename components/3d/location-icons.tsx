"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

interface LocationIconProps {
  type: 'miami' | 'argentina'
}

function PalmTree() {
  const groupRef = useRef<THREE.Group>(null)
  const sunRef = useRef<THREE.Mesh>(null)
  const palmRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    // Sun orbiting around the palm tree at medium speed
    if (sunRef.current) {
      const sunRadius = 1.8
      sunRef.current.position.x = Math.cos(time * 0.8) * sunRadius
      sunRef.current.position.z = Math.sin(time * 0.8) * sunRadius
      sunRef.current.position.y = 0.6 + Math.sin(time * 0.6) * 0.3
    }
    
    // Palm tree gentle sway
    if (palmRef.current) {
      palmRef.current.rotation.z = Math.sin(time * 0.4) * 0.15
      palmRef.current.children.forEach((child, index) => {
        if (index > 0) { // palm leaves
          child.rotation.z = Math.sin(time * 0.6 + index) * 0.1
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      <group ref={palmRef}>
        {/* Trunk - larger and muted brown */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.15, 0.2, 2, 8]} />
          <meshLambertMaterial color="#8B7355" />
        </mesh>
        
        {/* Palm leaves - larger and muted green */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i * Math.PI * 2) / 8) * 0.15,
              0.6,
              Math.sin((i * Math.PI * 2) / 8) * 0.15
            ]}
            rotation={[
              Math.cos((i * Math.PI * 2) / 8) * 0.4,
              (i * Math.PI * 2) / 8,
              Math.sin((i * Math.PI * 2) / 8) * 0.3
            ]}
          >
            <boxGeometry args={[1.2, 0.08, 0.25]} />
            <meshLambertMaterial color="#6B8E5A" />
          </mesh>
        ))}
      </group>
      
      {/* Orbiting Sun - larger and muted gold */}
      <mesh ref={sunRef} position={[1.5, 0.6, 0]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshLambertMaterial color="#D4AF37" />
      </mesh>
    </group>
  )
}

function ArgentinaIcon() {
  const groupRef = useRef<THREE.Group>(null)
  const cloudRef = useRef<THREE.Group>(null)
  const obeliskRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    // Cloud orbiting around obelisk at slower speed
    if (cloudRef.current) {
      const cloudRadius = 2.2
      cloudRef.current.position.x = Math.cos(time * 0.5) * cloudRadius
      cloudRef.current.position.z = Math.sin(time * 0.5) * cloudRadius
      cloudRef.current.position.y = 1.2 + Math.sin(time * 0.3) * 0.2
      // Cloud also rotates on its own axis
      cloudRef.current.rotation.y = time * 0.3
    }
    
    // Obelisk gentle rotation
    if (obeliskRef.current) {
      obeliskRef.current.rotation.y = Math.sin(time * 0.2) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Obelisk - larger and light gray */}
      <mesh ref={obeliskRef} position={[0, 0, 0]}>
        <boxGeometry args={[0.25, 2.5, 0.25]} />
        <meshLambertMaterial color="#C8C8C8" />
      </mesh>
      
      {/* Base - larger and darker gray */}
      <mesh position={[0, -1.2, 0]}>
        <boxGeometry args={[0.6, 0.15, 0.6]} />
        <meshLambertMaterial color="#A0A0A0" />
      </mesh>
      
      {/* Orbiting Cloud - made of multiple spheres in soft blue-gray */}
      <group ref={cloudRef} position={[2, 1.2, 0]}>
        {/* Main cloud body */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.35, 16, 16]} />
          <meshLambertMaterial color="#B8C5D1" />
        </mesh>
        <mesh position={[-0.25, -0.1, 0]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshLambertMaterial color="#B8C5D1" />
        </mesh>
        <mesh position={[0.25, -0.05, 0]}>
          <sphereGeometry args={[0.28, 16, 16]} />
          <meshLambertMaterial color="#B8C5D1" />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshLambertMaterial color="#B8C5D1" />
        </mesh>
        <mesh position={[-0.15, 0.15, 0]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshLambertMaterial color="#B8C5D1" />
        </mesh>
      </group>
    </group>
  )
}

export function LocationIcon({ type }: LocationIconProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [3, 3, 3], fov: 45 }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
      >
        {/* Enhanced lighting for white objects */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-3, 3, 2]} intensity={0.8} />
        <pointLight position={[0, 5, 0]} intensity={0.6} />
        <spotLight 
          position={[4, 4, 4]} 
          angle={0.3} 
          intensity={1} 
          castShadow 
        />
        
        {type === 'miami' ? <PalmTree /> : <ArgentinaIcon />}
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}