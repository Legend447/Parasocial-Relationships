import { Loader, OrbitControls, PointerLockControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
// 1. IMPORT JOTAI PROVIDER AND HOOKS
import { Provider, useAtom } from "jotai";
// 2. IMPORT THE STATE ATOM (assuming it's in your store.js file)
import { Experience } from "./components/Experience";
import { IntroTitle } from "./components/IntroTitle";
import { GradientBackground } from "./components/bgColor";
import { ReturnIcon } from "./components/Return";

// --- 2D Information Overlay Component ---

function App() {
  return (
    <Provider>
      <Loader />
      <Canvas camera={{
        position: [0, 1, 10],
        fov: 45,
      }}>
        <IntroTitle />
        <Suspense>
          <Experience />

        </Suspense>
        <ReturnIcon />
        <GradientBackground />
      </Canvas>
    </Provider>
  );
}

export default App;