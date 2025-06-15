import { Canvas } from '@react-three/fiber';
import { useEffect } from 'react';
import Scene from './components/scene';

export const App = () => {
  useEffect(() => {
    const handleDoubleClick = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    };

    window.addEventListener('dblclick', handleDoubleClick);
    return () => window.removeEventListener('dblclick', handleDoubleClick);
  }, []);

  return (
    <Canvas
      shadows
      camera={{ position: [2, 2, 2], fov: 60 }}
      gl={{
        antialias: true,
        toneMapping: 3,
      }}
    >
      <Scene />
    </Canvas>
  );
};
