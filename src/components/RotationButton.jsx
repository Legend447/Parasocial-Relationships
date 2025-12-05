import { useRef, useState } from "react";
import { MeshDistortMaterial, useCursor } from "@react-three/drei";

export function RotationButton({direction}) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const rotArrow = (direction === 'right') ? [-0.5, 0, -1.2] : [-1, 0, 1.2]
  const posArrow = (direction === 'right') ? [.7, .5, 8.2] : [-1.1, .5, 8.2]

  return (
    <group
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      position={posArrow}
      rotation={rotArrow}
    >
      <mesh
        ref={meshRef}
      >
        {/* Simple Arrow Geometry using a cone */}
        <coneGeometry args={[0.05, 0.15, 12]} />
        <meshStandardMaterial
          color="#000" // Black cone head
          position={[0, 1, 0]}
          speed={0}
          // distort={.2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      <mesh position-y={-0.18}>
        <cylinderGeometry args={[.015, .015, 0.2]} />
        <meshStandardMaterial color="#000" /> {/* Black stem */}
      </mesh>
    </group>
  );
};