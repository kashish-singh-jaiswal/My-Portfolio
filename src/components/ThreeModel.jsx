import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

const ThreeModel = () => {
  const { scene } = useGLTF("/models/3d_clipart_-_webdev-optimized.glb");

  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 2, 8], fov: 50 }} // Farther from model
    >
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 5]} />

      <primitive
        object={scene}
        scale={1.3}                      // Smaller scale
        position={[0, -2, 0]}           // Move slightly down
        rotation={[0.1, -0.3, 0]}       // Gentle tilt
      />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeModel;
