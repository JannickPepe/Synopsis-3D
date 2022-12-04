// After we have gotten the right npm's install and our new bracnhes in package.json
// Now we import them here
import './index.css';
import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei'; // Allow us to rotate and import the Models (GLTF, its a format to load 3d models)

function App() {

  //construct your test reference with useRef method
  //const ref = useRef()

  return (
    <div className="App">
      {/* A test for just simply display a box with set array cords */}
      {/* 
      <Canvas>
        <mesh ref={ref}>
          <boxGeometry attach='geometry' argh={[2,2,2]}/> 
        </mesh>
      </Canvas>
      */}

      <div class="wrapper">
        <div class="card">
            <div className="product-canvas">
              <Canvas>

              </Canvas>
            </div>
            <h2>Color chooser</h2>
            <div className='colors'>
              <div>
                <input type="color" id="head" name="head" value="#e66465" />
                    <label for="head">Main</label>
              </div>
              <div>
                <input type="color" id="body" name="body" value="#f6b73c" />
                    <label for="body">Stripes</label>
                </div>
                <div>
                  <input type="color" id="body" name="body" value="#f6b73c" />
                    <label for="body">Soul</label>
                </div>
                <div>
                  <input type="color" id="body" name="body" value="#f6b7" />
                    <label for="body">Laces</label>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
