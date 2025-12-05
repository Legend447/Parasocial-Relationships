import { React, useState } from 'react'
import { useGLTF, useCursor } from '@react-three/drei'

export function Mirror2(props) {
  const { nodes, materials } = useGLTF('./models/Mirror/scene.gltf')
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  return (
    <group {...props} dispose={null}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <group position={[1.002, 1.717, -0.277]} rotation={[1.369, 0, 0]} scale={[0.013, 0.009, 0.009]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.white_painnt} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.mirror} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/Mirror/scene.gltf')
