import { Environment, Lightformer } from "@react-three/drei";

export default function Lights() {
    return (
        <group name="lights">
            <Environment resolution={256}>
                <group>
                    <Lightformer 
                        form='rect'
                        intensity={10}
                        position={[-10, 7, -5]}
                        scale={10}
                        rotation-y={Math.PI / 2}
                        color={'red'}
                    />
                    <Lightformer 
                        form='rect'
                        intensity={10}
                        position={[10, 7, -5]}
                        scale={10}
                        rotation-y={Math.PI / 2}
                        color={'blue'}
                    />

                    <Lightformer 
                        form='rect'
                        intensity={5}
                        position={[0, 5, 5]}
                        scale={10}
                        rotation-y={Math.PI / 2}
                    />

                    <Lightformer 
                        form='rect'
                        intensity={1}
                        position={[0, -5, -35]}
                        scale={10}
                        rotation-y={Math.PI / 2}
                    />
                </group>
            </Environment>
            <spotLight 
                position={[-2, 20, 5]}
                angle={0.15}
                decay={0}
                intensity={2}
            />
            <spotLight 
                position={[0, -25, 10]}
                angle={0.15}
                decay={0}
                intensity={0.5}
            />
            <spotLight 
                position={[0, 15, 5]}
                angle={0.15}
                decay={1}
                intensity={0.5}
            />
        </group>
    )
} 