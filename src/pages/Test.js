import '../index.css';
import { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"

function Test() {

    // Another shape 
    // <boxGeometry/>

    // Another light option
    // <pointLight position={[10, 10, 10]} />

    return (
        <div className='test'>
            <h1>Welcome to Test page</h1>
            <h2>Static canvas just for testing import and set up canvas</h2>
            <div id="canvas-container">
            <Canvas>
                <ambientLight intensity={0.2} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <mesh>
                    <sphereGeometry />
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
            </div>
            <h3>Its with three fibre, which render three.js syntax</h3>
            <p>Example: https://docs.pmnd.rs/react-three-fiber/getting-started/your-first-scene</p>
        </div>
    )
};

export default Test;