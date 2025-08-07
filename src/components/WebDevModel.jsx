// components/WebDevModel.jsx
import React from 'react';
import { useGLTF } from '@react-three/drei';

const WebDevModel = () => {
  const { scene } = useGLTF('/models/3d_clipart_-_webdev.glb');
  return <primitive object={scene} scale={2} />;
};

export default WebDevModel;
