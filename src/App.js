// After we have gotten the right npm's install and our new bracnhes in package.json
// Now we import them here
import './index.css';
import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei'; // Allow us to rotate and import the Models (GLTF, its a format to load 3d models)

function App() {

  //construct your reference with useRef method
  const ref = useRef()

  return (
    <div className="App">
      <Canvas>
        <mesh ref={ref}>
          <boxGeometry attach='geometry' argh={[2,2,2]}/> {/* Array position */}
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
