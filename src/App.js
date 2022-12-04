// After we have gotten the right npm's install and our new bracnhes in package.json
// Now we import them here
import './index.css';
import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei'; // Allow us to rotate and import the Models (GLTF, its a format to load 3d models)

// Exported code from the git bash cmd line - npx gltfjsx shoe.gltf
function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.gltf')
  // Have the group wrapper around the mesh property for each materials -Also set the size of the model with Scale
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  )
}

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

      <div className="wrapper">
        <div className="card">
            <div className="product-canvas">
              <Canvas>
                {/*When rendering 3D models you need this for error finder/screener
                  Inside Suspense have ambientLight property and your Model
                  Then it will now be displayed in statis - for now
                  Add another light with spotLight different property values
                  With Orbital control you can now rotate with your property values
                */}
                <Suspense fallback={null}>
                  <ambientLight></ambientLight>
                  <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10,15,10]} castShadow></spotLight>
                  <Model></Model>
                  <OrbitControls enablePan={true} enableZoom={true}> </OrbitControls>
                </Suspense>
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
                  <input type="color" id="body" name="body" value="#00FFFF" />
                    <label for="body">Laces</label>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
