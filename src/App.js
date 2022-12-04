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
  // With material-color, set the default color of the selected proptery material
  // Instead of "red" we can now add our props.customColor onto mesh ect for the props we have in the Model
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={props.customColors.laces}/>
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.customColors.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={"blue"} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={"blue"} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={props.customColors.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={props.customColors.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={"blue"} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={"blue"} />
    </group>
  )
}


function App() {

  //construct your test reference with useRef method
  //const ref = useRef()

  // Construct an array with useState method for each of your customColor props values
  const [mesh, setMesh] = useState("#ffffff")

  const [stripes, setStripes] = useState("#ffffff")

  const [sole, setSole] = useState("#ffffff")

  const [laces, setLaces] = useState("#ffffff")


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
                  Rotate is now set to defaule true
                  On model create customColor prop onto the object mesh
                  Now on custom color instead of mesh:"red" we can do mesh:mesh because of the onChange 
                */}
                <Suspense fallback={null}>
                  <ambientLight></ambientLight>
                  <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10,15,10]} castShadow></spotLight>
                  <Model customColors={{mesh:mesh, stripes: "blue" , sole: "white", laces: "red"}}></Model>
                  <OrbitControls enablePan={true} autoRotate={false} enableZoom={true} ></OrbitControls>
                </Suspense>
              </Canvas>
            </div>
            <h2>Color chooser</h2>
            {/* for each property object we will have the onChange props onto each object and have the prop value onto the object prop as well*/}
            <div className='colors'>
              <div>
                <input type="color" id="mesh" name="mesh" value={mesh} onChange={(e) => setMesh(e.target.value)}/>
                    <label for="mesh">Main</label>
              </div>
              <div>
                <input type="color" id="stripes" name="stripes" value="#f6b73c" />
                    <label for="stripes">Stripes</label>
                </div>
                <div>
                  <input type="color" id="sole" name="sole" value="#f6b73c" />
                    <label for="sole">Sole</label>
                </div>
                <div>
                  <input type="color" id="laces" name="laces" value="#00FFFF" />
                    <label for="laces">Laces</label>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
