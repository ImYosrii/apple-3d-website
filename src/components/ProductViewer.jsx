'use client';

import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import useMacbookStore from "@/store";
import Lights from "./three/Lights";
import ModelsSwitcher from "./three/ModelsSwitcher";

export default function ProductViewer() {
    const color = useMacbookStore((state)=>(state.color))
    const setColor = useMacbookStore((state)=>(state.setColor))
    const scale = useMacbookStore((state)=>(state.scale))
    const setScale = useMacbookStore((state)=>(state.setScale))
    const isMobile = useMediaQuery({query: "(max-width: 1024px)"})


    const cameraSettings = {
        fov: 50,
        near: 0.1,
        far: 1000,
        position: [0, 2, 5],
    }
    return (
        <section id="product-viewer">
            <h2>Take a closer look.</h2>
            

            <div className="controls">
                <p className="info">
                    Macbook Pro | Available in 14" & 16" in Multiple Colors</p>

                <div className="flex-center gap-5 mt-5 max-sm:flex-col">
                    <div className="color-control">
                        <div onClick={()=>setColor("#adb5bd")} 
                         className={clsx("bg-neutral-300", color === "#adb5bd" && 'active')}></div>

                        <div onClick={()=>setColor("#2e2c2e")} 
                             className={clsx("bg-neutral-900", color === "#2e2c2e" && 'active')}></div>
                        
                        <div onClick={()=>setColor("#4c1503")} 
                             className={clsx("bg-[#4c1503]", color === "#4c1503" && 'active')}></div>

                        <div onClick={()=>setColor("#034c1a")} 
                             className={clsx("bg-[#034c1a]", color === "#034c1a" && 'active')}></div>

                        <div onClick={()=>setColor("#006975")} 
                             className={clsx("bg-[#006975]", color === "#006975" && 'active')}></div>
                    </div>

                    <div className="size-control">
                         <div onClick={()=>setScale(0.06)} 
                            className={clsx(scale === 0.06 ? 'bg-white text-black': 'bg-transparent text-white')}>
                            <p>14"</p>
                         </div>
                         <div onClick={()=>setScale(0.08)} 
                            className={clsx(scale === 0.08 ? 'bg-white text-black': 'bg-transparent text-white')}>
                            <p>16"</p>
                        </div>

                    </div>
                </div>
            </div>

            <Canvas id="canvas"
                camera={cameraSettings}
            >
                <Lights />
                <ModelsSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
            </Canvas>
        </section >
    )
}