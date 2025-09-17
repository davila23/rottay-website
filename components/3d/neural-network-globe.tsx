"use client"

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Line } from '@react-three/drei'
import * as THREE from 'three'

interface NeuralNetworkGlobeProps {
  mousePosition?: { x: number; y: number }
}

function NeuralNetworkGlobeScene({ mousePosition }: NeuralNetworkGlobeProps) {
  const groupRef = useRef<THREE.Group>(null)
  const { viewport } = useThree()

  // Generate nodes on sphere surface
  const nodes = useMemo(() => {
    const temp = []
    const radius = 3
    
    for (let i = 0; i < 80; i++) {
      const phi = Math.acos(-1 + (2 * i) / 80)
      const theta = Math.sqrt(80 * Math.PI) * phi
      
      const x = radius * Math.cos(theta) * Math.sin(phi)
      const y = radius * Math.sin(theta) * Math.sin(phi)
      const z = radius * Math.cos(phi)
      
      temp.push({
        position: new THREE.Vector3(x, y, z),
        activity: Math.random()
      })
    }
    return temp
  }, [])

  // Generate connections between nearby nodes
  const connections = useMemo(() => {
    const temp = []
    
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position)
        if (distance < 2.5 && Math.random() > 0.7) {
          temp.push({
            start: nodes[i].position,
            end: nodes[j].position,
            opacity: Math.random() * 0.5 + 0.2
          })
        }
      }
    }
    return temp
  }, [nodes])

  useFrame((state) => {
    if (groupRef.current) {
      // Rotate based on time
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      
      // React to mouse position
      if (mousePosition) {
        const targetX = (mousePosition.x / viewport.width) * 0.5
        const targetY = -(mousePosition.y / viewport.height) * 0.5
        
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
          groupRef.current.rotation.x,
          targetY,
          0.02
        )
        groupRef.current.rotation.z = THREE.MathUtils.lerp(
          groupRef.current.rotation.z,
          targetX,
          0.02
        )
      }
    }
  })

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodes.map((node, i) => (
        <Float key={i} speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
          <mesh position={node.position}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial
              color="#FFFFFF"
              emissive="#FFFFFF"
              emissiveIntensity={node.activity * 0.3}
              metalness={0.9}
              roughness={0.1}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
      
      {/* Connections */}
      {connections.map((connection, i) => (
        <Line
          key={i}
          points={[connection.start, connection.end]}
          color="#666666"
          lineWidth={1}
          transparent
          opacity={connection.opacity}
        />
      ))}
      
      {/* Outer sphere wireframe */}
      <mesh>
        <sphereGeometry args={[3.2, 32, 32]} />
        <meshBasicMaterial
          color="#F5F2ED"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  )
}

export function NeuralNetworkGlobe({ mousePosition }: NeuralNetworkGlobeProps) {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.4} color="#00D4FF" />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#8B5CF6" />
        
        <NeuralNetworkGlobeScene mousePosition={mousePosition} />
        
        <fog attach="fog" args={['#000000', 10, 25]} />
      </Canvas>
    </div>
  )
}