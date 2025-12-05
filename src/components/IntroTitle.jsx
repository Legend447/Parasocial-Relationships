import { Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAtom } from "jotai";
import { useRef, useState } from "react";
import { introActiveAtom } from "../store";
import { easing } from "maath";

export const IntroTitle = () => {
  // We now use three refs: one for the group, one for each material.
  const groupRef = useRef();
  const materialRef1 = useRef();
  const materialRef2 = useRef();
  
  const [introActive, setIntroActive] = useAtom(introActiveAtom);
  const [hovered, setHovered] = useState(false);
  
  // Custom Centering Values (based on size=3 and Oswald font)
  // We calculate half the word's width and set the position to that negative value.
  const PARASOCIAL_CENTER_X = -3.43;
  const RELATIONSHIPS_CENTER_X = -4.3;
  const TOP_Y = 0;
  const BOTTOM_Y = -2;

  document.body.style.cursor = hovered && introActive ? "pointer" : "auto";

  // Animation logic using useFrame
  useFrame((state, delta) => {
    // Safety check for initialization
    if (!groupRef.current || !materialRef1.current || !materialRef2.current) return; 

    // Target position and scale based on whether the intro is active
    const targetPositionZ = introActive ? -30 : 100;
    const targetScale = introActive ? 3 : 0;
    const targetRotationX = introActive ? 0 : Math.PI * 2;

    // Easing the position of the whole group
    easing.damp3(
      groupRef.current.position,
      [0, 0, targetPositionZ], // Center the group at [0, 0, Z]
      0.5,
      delta
    );
    
    // Easing the color for BOTH materials
    easing.dampC(
      materialRef1.current.color,
      hovered && introActive ? 'orange' : 'white',
      0.1,
      delta
    );
    easing.dampC(
      materialRef2.current.color,
      hovered && introActive ? 'orange' : 'white',
      0.1,
      delta
    );

    // Easing the scale of the whole group
    easing.damp(groupRef.current.scale, "x", targetScale, 0.5, delta);
    easing.damp(groupRef.current.scale, "y", targetScale, 0.5, delta);
    easing.damp(groupRef.current.scale, "z", targetScale, 0.5, delta);
    
    // Smoothly rotate the text group
    easing.damp(groupRef.current.rotation, "x", targetRotationX, 0.5, delta);
  });

  // Handle the initial click to start the scene
  const handleStart = (e) => {
    e.stopPropagation();
    if (introActive) {
      setIntroActive(false);
    }
  };

  return (
    // Attach the main ref and click handler to the parent group
    <group ref={groupRef} onClick={handleStart}>
      {/* First Word: PARASOCIAL */}
      <Text3D
        font="/fonts/Oswald Medium_Regular.json" 
        size={1}
        height={0.2}
        // Centering: Offset by half the word's estimated width
        position={[PARASOCIAL_CENTER_X, TOP_Y, 0]} 
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        PARASOCIAL
        {/* Attach the material ref */}
        <meshStandardMaterial ref={materialRef1} color={"white"} metalness={0.5} roughness={0.1} />
      </Text3D>

      {/* Second Word: RELATIONSHIPS */}
      <Text3D
        font="/fonts/Oswald Medium_Regular.json"
        size={1}
        height={0.2}
        // Centering: Offset by half the word's estimated width
        position={[RELATIONSHIPS_CENTER_X, BOTTOM_Y, 0]} 
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        RELATIONSHIPS
        {/* Attach the second material ref */}
        <meshStandardMaterial ref={materialRef2} color={"white"} metalness={0.5} roughness={0.1} />
      </Text3D>
    </group>
  );
};