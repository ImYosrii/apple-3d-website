import { Canvas } from "@react-three/fiber"
import Lights from "./three/Lights"
import { features } from "@/constants"
import clsx from "clsx"
import ModelScroll from "./three/ModelScroll"

export default function Features(){
    const cameraSettings = {
        fov: 50,
        position: [0, 0, 5],
        near: 0.01,
        far: 100,
    }
    return (
        <section id="features">
            <h2>
               See it all in a new light.
            </h2>

            <Canvas id="f-canvas" camera={cameraSettings}>
                <Lights />
                <ambientLight intensity={2} />
                <ModelScroll />

            </Canvas>

            <div className="absolute inset-0">
                {features.map((feature, index)=>(
                    <div key={feature.id} className={clsx('box', `box${index + 1}`, feature.styles)}>
                        <img src={feature.icon} alt={feature.highlight} />
                        <p>
                            <span className="text-white">
                                {feature.highlight}
                            </span>
                            {feature.text}
                        </p>

                    </div>
                ))}

            </div>
        </section>
    )
}