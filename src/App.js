import "./styles.css";
import * as THREE from "three";
import { useState, useRef, Suspence, useMemo } from "react";
import {
  CanvasGradient,
  useThree,
  useFrame,
  useLoader
} from "@react-three/fiber";
import {
  Reflector,
  CameraShake,
  OrbitControls,
  useTexture
} from "@react-three/drei";
import { KernelSize } from "postprocessing";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

function Triangle({ color, ...props }) {
  const ref = useRef();
  const [r] = useState(() => Math.random() * 10000);
  useFrame(
    (_) =>
      (ref.current.position.y = -1.75 + Math.sin(_.clock.elapsedTime + r) / 10)
  );
  const {
    paths: [path]
  } = useLoader(SVGLoader, "./triangle.svg");
  const geom = useMemo(
    () =>
      SVGLoader.pointsToStroke(
        path.subPaths[0].getPoints(),
        path.userData.style
      ),
    []
  );
  return (
    <group ref={ref}>
      <mesh geometry={geom} {...props}>
        <meshBasicMaterial color={color} toneMapped={false} />{" "}
      </mesh>
    </group>
  );
}

function Rig({ children }) {}
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
