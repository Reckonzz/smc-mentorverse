import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'


export default function Earth(props) {
  let group = useRef()
  const { nodes, materials } = useGLTF('/assets/earth_planet/scene.gltf')
  // const springs = useSpring({ scale: active ? 1.5 : 1 })
  useFrame(({ clock }) => {
    group.current.rotation.y = 0.5 * clock.getElapsedTime()
  })

  return (
    <group {...props} dispose={null}>
      {/* <group name="camera" position={[0,0 ,0]} rotation={[Math.PI / 2, 0, 0]}>
        <PerspectiveCamera  fov={40} near={10} far={1000} />
      </group> */}
      <group name="sun" position={[100, 50, 100]} rotation={[-Math.PI / 2, 0, 0]}>
        <pointLight intensity={10} />
      </group>
      <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.52}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['Material.001']} />
      </group>
    </group>
    </group>
  )
}

useGLTF.preload('/assets/earth_planet/scene.gltf')