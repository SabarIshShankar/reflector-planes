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

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
