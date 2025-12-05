// import React from 'react'
import { useGLTF, useCursor } from '@react-three/drei'
import { useState } from 'react';

export function School(props) {
  const { nodes, materials } = useGLTF('./models/isometric_room_school.glb')
  const [highlighted, setHighlighted] = useState(false);
  useCursor(highlighted);

  return (
    <group
      {...props} dispose={null} 
      castShadow
    >
      <mesh geometry={nodes.school_schoolMaterial_0.geometry} material={materials.schoolMaterial} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.35} />
    </group>
  )
}

useGLTF.preload('./models/isometric_room_school.glb')
