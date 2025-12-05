import { useFrame } from "@react-three/fiber";
import { useAtom } from "jotai";
import { easing } from "maath";
import { Environment, Float, MeshDistortMaterial, OrbitControls, useCursor } from "@react-three/drei";
import { useRef, useCallback, useState } from "react";
import { introActiveAtom, modelRotationSideAtom, selectedItemAtom } from "../store";
import { MathUtils } from 'three'

import { Book } from "./Book";
import { School } from "./Rooms/School.jsx";
import { Living } from "./Rooms/Living";
import { RotationButton } from "./RotationButton"
import { Icon } from "./Rooms/Icon";
import { Mirror2 } from "./Mirror2";

export const Experience = () => {
  // 1. HOOKS CALLED AT THE TOP LEVEL
  const [introActive] = useAtom(introActiveAtom);
  const [selectedItem, setSelectedItem] = useAtom(selectedItemAtom);
  const [selectedModel, setSelectedModel] = useAtom(modelRotationSideAtom);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const groupRef = useRef();
  const modelRef = useRef()
  const bookRef = useRef()
  const mirrorRef = useRef()
  const pivotRef = useRef()

  // Position of the Book in the scene (for calculating camera focus)
  const floatVal = .5;

  const handleRotateLeft = useCallback((e) => {
    e.stopPropagation();
    // Cycle through 0, 1, 2, 3 (for 4 sides)
    setSelectedModel(prev => (prev + 1) % 4);
  }, [setSelectedModel]);
  const handleRotateRight = useCallback((e) => {
    e.stopPropagation();
    // Cycle through 0, 1, 2, 3 (for 4 sides)
    setSelectedModel(prev => (prev - 1) % 4);
  }, [setSelectedModel]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    if (!modelRef.current) return;
    if (!mirrorRef.current) return;

    const rotation = (selectedItem === 'book') ? -Math.PI / 8 : -Math.PI / 5;
    const basePositionY = introActive ? 100 : 0;

    const bookPosX = (selectedItem === 'book') ? 0 : -.5;
    const bookPosY = (selectedItem === 'book') ? .75 : .5;
    const bookPosZ = (selectedItem === 'book') ? 7.5 : 2;

    const mirrorPosX = (selectedItem === 'mirror') ? -.4 : 4;;
    const mirrorPosY = (selectedItem === 'mirror') ? -0.3 : -.25;;
    const mirrorPosZ = (selectedItem === 'mirror') ? 5.7 : 1;;

    let modelPosX;
    let modelPosY = (selectedItem === 'model') ? .6 : .5;;
    let modelPosZ;

    if (selectedModel === -1) {
      modelPosX = -1.99;
      modelPosZ = 6.7;
    } else if (selectedModel === 1) {
      modelPosX = 1.5;
      modelPosZ = 6;
    } else {
      modelPosX = (selectedItem === 'model') ? -0.54 : -4;
      modelPosY = (selectedItem === 'model') ? .6 : .5;
      modelPosZ = (selectedItem === 'model') ? 4.5 : -1;
    }

    easing.damp3(
      groupRef.current.position,
      [0, basePositionY, 0],
      0.5, // Stiffness
      delta
    );

    easing.damp3(
      bookRef.current.position,
      [bookPosX, bookPosY, bookPosZ],
      0.5, // Stiffness
      delta
    );

    easing.damp3(
      bookRef.current.rotation,
      [rotation, 0, 0],
      0.5, // Stiffness
      delta
    );

    easing.damp3(
      modelRef.current.position,
      [modelPosX, modelPosY, modelPosZ],
      0.5, // Stiffness
      delta
    );
    easing.damp3(
      mirrorRef.current.position,
      [mirrorPosX, mirrorPosY, mirrorPosZ],
      0.5, // Stiffness
      delta
    );

    const targetRotation = selectedModel * -MathUtils.degToRad(90);

    easing.dampAngle(
      pivotRef.current.rotation,
      'y', // Rotate on the Y-axis
      targetRotation,
      0.75, // Slower damping for a smooth, noticeable spin
      delta
    );
  });

  const handleSelected = (e, item) => {
    // Prevent click from propagating to the Canvas or parent elements
    e.stopPropagation();

    // If intro is done and nothing is currently selected, set the new item
    if (!introActive && selectedItem === 'none') {
      setSelectedItem(item);
    }
  };

  const isModelSelected = (selectedItem === 'model');

  return (
    <group ref={groupRef}>


      <group
        ref={modelRef}
        onClick={(e) => handleSelected(e, 'model')}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <group ref={pivotRef}>
          <Float
            floatIntensity={[floatVal]}
            rotationIntensity={0}
          >
            <School rotation={[(-Math.PI / 2), 0, -Math.PI / 4]} position={[-.2, 0.09, 2.95]} />
            <Living rotation={[0, -Math.PI * 3 / 4, 0]} position={[-.675, -.3, 1.8]} />
            <Icon position={[1.3, 0.2, 1]} rotation={[0, Math.PI / 2, 0]} />
          </Float>
        </group>
      </group>

      {isModelSelected && selectedModel !== -1 && (
        <group onClick={handleRotateRight}>
          <RotationButton direction='left' />
        </group>
      )}
      {isModelSelected && selectedModel !== 1 && (
        <group onClick={handleRotateLeft}>
          <RotationButton direction='right' />
        </group>
      )}

      {/* <OrbitControls target={[0, 1, 7]} /> */}

      <group ref={bookRef}>
        <Float
          floatIntensity={[floatVal]}
          rotationIntensity={0}
        >
          <Book />
        </Float>
      </group>
      <group ref={mirrorRef}>
        <Float
          floatIntensity={[floatVal]}
          rotationIntensity={0}
        >
          <Mirror2 onClick={(e) => handleSelected(e, 'mirror')}/>
        </Float>
      </group>

      {/* ... (rest of environment and lighting remains the same) ... */}

      <Environment preset="studio"></Environment>
      <spotLight
        position={[0, 6, 2]}
        target-position={[0, 0, 0]}
        intensity={50}
        angle={Math.PI / 8}
        penumbra={0.75}
        decay={1}
        distance={20}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={.3} />
      </mesh>
    </group>
  );
};