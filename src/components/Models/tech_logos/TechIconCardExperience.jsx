import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const TechIconCardExperience = ({ model }) => {
  const { scene } = useGLTF(model.modelPath);

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <primitive object={scene} scale={model.scale} rotation={model.rotation} />
    </Canvas>
  );
};

export default TechIconCardExperience;
