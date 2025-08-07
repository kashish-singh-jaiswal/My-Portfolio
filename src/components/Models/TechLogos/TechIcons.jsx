import React, { useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

import { Environment, useGLTF } from '@react-three/drei';

const TechIcons = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === 'Interactive Developer') {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === 'Object_5') {
          child.material = new THREE.MeshStandardMaterial({
            color: 'white'
          });
        }
      });
    }
  }, [scene,model]);

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Environment preset="city" />

      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcons;
