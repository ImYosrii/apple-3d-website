'use client';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function CanvasComponent() {
    const cameraSettings = {
        fov: 45,
        near: 0.1,
        far: 1000,
        position: [0, 0, 5],
    }
    return (
        <div className="canvas-container">
            <Canvas
                camera={cameraSettings}
            >
                <OrbitControls/>
                <mesh> 
                    <boxGeometry/>
                    <meshBasicMaterial color="red" />
                </mesh>
            </Canvas>
        </div>
    )
}