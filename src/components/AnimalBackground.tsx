"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations, Environment, Stars } from "@react-three/drei"
import * as THREE from "three"

// 型定義
interface AnimalProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number | [number, number, number];
  speed: number;
  path: string;
  delay?: number;
}

// 動物モデルコンポーネント
function Animal({ position, rotation, scale, speed, path, delay = 0 }: AnimalProps) {
  const group = useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF(path) as unknown as { scene: THREE.Object3D, animations: THREE.AnimationClip[] }
  const { actions } = useAnimations(animations, group)
  const [started, setStarted] = useState(false)

  // 遅延スタート
  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true)
      // アニメーションがあれば再生
      if (actions && Object.keys(actions).length > 0) {
        const actionName = Object.keys(actions)[0]
        actions[actionName]?.play()
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [actions, delay])

  useFrame((state, delta) => {
    if (!group.current || !started) return

    // 横方向に移動
    group.current.position.x += speed * delta
    
    // 画面外に出たら反対側から再登場
    if (speed > 0 && group.current.position.x > 15) {
      group.current.position.x = -15
    } else if (speed < 0 && group.current.position.x < -15) {
      group.current.position.x = 15
    }
    
    // 少しだけ上下に揺らす（かわいさアップ）
    group.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.01
  })

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <primitive object={scene} />
    </group>
  )
}

// カスタム雲コンポーネント
function CustomCloud({ position, size = 3 }: { position: [number, number, number], size?: number }) {
  const mesh = useRef<THREE.Group>(null)
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.0005
    }
  })
  
  return (
    <group ref={mesh} position={position}>
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[
          (Math.random() - 0.5) * size,
          (Math.random() - 0.5) * size * 0.5,
          (Math.random() - 0.5) * size
        ]}>
          <sphereGeometry args={[size * (0.2 + Math.random() * 0.3), 8, 8]} />
          <meshStandardMaterial 
            color="white" 
            transparent 
            opacity={0.6 + Math.random() * 0.2} 
            roughness={0.8} 
          />
        </mesh>
      ))}
    </group>
  )
}

// 雲のグループコンポーネント
function Clouds() {
  return (
    <>
      <CustomCloud position={[-10, 2, -15]} size={3} />
      <CustomCloud position={[10, 4, -10]} size={3.5} />
      <CustomCloud position={[-8, 6, -5]} size={2.5} />
      <CustomCloud position={[15, 3, -12]} size={3} />
      <CustomCloud position={[0, 7, -20]} size={4} />
      <CustomCloud position={[-15, 4, -8]} size={2.8} />
      <CustomCloud position={[5, 1, -6]} size={2.2} />
      <CustomCloud position={[-12, 0, -10]} size={3.2} />
    </>
  )
}

// パーティクルの型定義
interface ParticlePosition {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
}

// パーティクルエフェクト
function Particles({ count = 100 }: { count?: number }) {
  const mesh = useRef<THREE.Group>(null)
  const [positions, setPositions] = useState<ParticlePosition[]>([])

  useEffect(() => {
    const newPositions: ParticlePosition[] = []
    for (let i = 0; i < count; i++) {
      newPositions.push({
        x: Math.random() * 30 - 15,
        y: Math.random() * 10 - 5,
        z: Math.random() * 10 - 5,
        size: Math.random() * 0.2 + 0.1,
        speed: Math.random() * 0.2 + 0.05
      })
    }
    setPositions(newPositions)
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.y += 0.001
    
    // 子要素を動かす
    mesh.current.children.forEach((child, i) => {
      const pos = positions[i]
      if (pos) {
        child.position.y += Math.sin(state.clock.elapsedTime + i) * 0.01
        child.position.x += pos.speed * 0.01
        if (child.position.x > 15) child.position.x = -15
      }
    })
  })

  return (
    <group ref={mesh}>
      {positions.map((pos, i) => (
        <mesh key={i} position={[pos.x, pos.y, pos.z]}>
          <sphereGeometry args={[pos.size, 8, 8]} />
          <meshBasicMaterial color="#ffaacc" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}

// ハートの型定義
interface HeartProps {
  x: number;
  y: number;
  z: number;
  scale: number;
  speed: number;
  rotSpeed: number;
}

// ハート型のパーティクル
function Hearts({ count = 20 }: { count?: number }) {
  const mesh = useRef<THREE.Group>(null)
  const [hearts, setHearts] = useState<HeartProps[]>([])
  
  useEffect(() => {
    const newHearts: HeartProps[] = []
    for (let i = 0; i < count; i++) {
      newHearts.push({
        x: Math.random() * 30 - 15,
        y: Math.random() * 10,
        z: Math.random() * 10 - 5,
        scale: Math.random() * 0.3 + 0.1,
        speed: Math.random() * 0.2 + 0.1,
        rotSpeed: Math.random() * 0.02 - 0.01
      })
    }
    setHearts(newHearts)
  }, [count])
  
  useFrame((state) => {
    if (!mesh.current) return
    
    mesh.current.children.forEach((child, i) => {
      const heart = hearts[i]
      if (heart) {
        // 上昇させる
        child.position.y += heart.speed * 0.05
        // 回転させる
        child.rotation.z += heart.rotSpeed
        
        // 上に行きすぎたら下に戻す
        if (child.position.y > 10) {
          child.position.y = -2
          child.position.x = Math.random() * 30 - 15
        }
      }
    })
  })
  
  // ハートの形を作る関数
  const createHeartShape = () => {
    const shape = new THREE.Shape()
    const x = 0, y = 0
    
    shape.moveTo(x, y + 0.25)
    shape.bezierCurveTo(x, y + 0.25, x - 0.25, y, x - 0.25, y - 0.25)
    shape.bezierCurveTo(x - 0.25, y - 0.5, x, y - 0.5, x, y - 0.5)
    shape.bezierCurveTo(x, y - 0.5, x + 0.25, y - 0.5, x + 0.25, y - 0.25)
    shape.bezierCurveTo(x + 0.25, y, x, y + 0.25, x, y + 0.25)
    
    return shape
  }
  
  return (
    <group ref={mesh}>
      {hearts.map((heart, i) => (
        <mesh key={i} position={[heart.x, heart.y, heart.z]}>
          <extrudeGeometry 
            args={[
              createHeartShape(),
              {
                depth: 0.1,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelSegments: 2
              }
            ]} 
          />
          <meshStandardMaterial color="#ff69b4" roughness={0.3} metalness={0.2} />
        </mesh>
      ))}
    </group>
  )
}

// メイン背景コンポーネント
export function AnimalBackground() {
  // モデルのプリロード
  useGLTF.preload("/models/flamingo.glb")
  useGLTF.preload("/models/parrot.glb")
  useGLTF.preload("/models/stork.glb")
  useGLTF.preload("/models/dog.gltf")

  return (
    <div className="fixed inset-0 w-full h-full" style={{ zIndex: 0 }}>
      <Canvas shadows camera={{ position: [0, 2, 10], fov: 50 }}>
        <color attach="background" args={["rgba(248, 250, 252, 0)"]} />
        <fog attach="fog" args={["#f8fafc", 15, 25]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[0, 5, 5]} intensity={0.5} castShadow />
        
        {/* 空の雲 */}
        <Clouds />
        
        {/* 動物たち - 鳥と犬を配置 */}
        <Animal 
          path="/models/flamingo.glb" 
          position={[-10, 0, -2]} 
          rotation={[0, Math.PI / 2, 0]} 
          scale={0.03} 
          speed={1.2}
          delay={0}
        />
        <Animal 
          path="/models/parrot.glb" 
          position={[10, 2, -4]} 
          rotation={[0, -Math.PI / 2, 0]} 
          scale={0.03} 
          speed={-0.8}
          delay={2000}
        />
        <Animal 
          path="/models/stork.glb" 
          position={[-5, 1, -6]} 
          rotation={[0, Math.PI / 2, 0]} 
          scale={0.03} 
          speed={1.5}
          delay={4000}
        />
        <Animal 
          path="/models/dog.gltf" 
          position={[5, -3, -8]} 
          rotation={[0, -Math.PI / 2, 0]} 
          scale={0.5} 
          speed={-1}
          delay={6000}
        />
        
        {/* 星空の背景 */}
        <Stars radius={100} depth={50} count={500} factor={4} fade />
        
        {/* 環境設定 */}
        <Environment preset="sunset" />
      </Canvas>
    </div>
  )
} 