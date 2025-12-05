import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Icon(props) {
  const { nodes, materials } = useGLTF('./models/Icons/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.0028}>
        <group position={[-380, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[250, 60, 190]}>
          <mesh geometry={nodes.Youtube_Icon_Material001_0.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Youtube_Icon_Material002_0.geometry} material={materials['Material.002']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={130}>
          <mesh geometry={nodes.Twitch_Icon_Material004_0.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.Twitch_Icon_Material005_0.geometry} material={materials['Material.005']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/Icons/scene.gltf')
