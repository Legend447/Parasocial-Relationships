import { useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAtom } from "jotai";
import { easing } from "maath";
import { useRef, useState } from "react";
import { selectedItemAtom, modelRotationSideAtom } from "../store";

export function ReturnIcon() {
  const [selectedItem, setSelectedItem] = useAtom(selectedItemAtom);
  const [_, setSelectedModel] = useAtom(modelRotationSideAtom);
  const iconRef = useRef();
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  // Define the target state
  const isSelected = selectedItem !== 'none';

  useFrame((state, delta) => {
    if (!iconRef.current) return;
    
    // Target position: Off-screen when nothing is selected, in the corner when an item is selected.
    // X=4, Y=2 puts it in the top-right corner from the default camera position.
    const targetX = isSelected ? 6 : 10;
    const targetY = isSelected ? 2.8 : 10;
    const targetScale = isSelected ? 3 : 0.01;

    // Easing the position and scale
    easing.damp3(iconRef.current.position, [targetX, targetY, 0], 0.5, delta);
    easing.damp(iconRef.current.scale, 'x', targetScale, 0.5, delta);
    easing.damp(iconRef.current.scale, 'y', targetScale, 0.5, delta);
    easing.damp(iconRef.current.scale, 'z', targetScale, 0.5, delta);

  });

  const handleReturn = (e) => {
    e.stopPropagation();
    if (isSelected) {
      // Return to the 'none' (unselected) state
      setSelectedItem('none');
      setSelectedModel(0);
    }
  };

  return (
    <mesh
      ref={iconRef}
      onClick={handleReturn}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      // Positioned close to the camera (Z=0) so it appears in the foreground
      position={[10, 10, 0]} 
    >
      <mesh rotation-z={-Math.PI / 4}>
        <boxGeometry args={[0.3, 0.05, 0.05]} />
        <meshStandardMaterial color="white" metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh rotation-z={Math.PI / 4}>
        <boxGeometry args={[0.3, 0.05, 0.05]} />
        <meshStandardMaterial color="white" metalness={0.5} roughness={0.2} />
      </mesh>
    </mesh>
  );
}