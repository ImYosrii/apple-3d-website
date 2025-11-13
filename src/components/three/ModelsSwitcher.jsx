'use client';
import { PresentationControls } from "@react-three/drei"
import { useRef } from "react"
import gsap from "gsap"
import  Macbook16 from "./models/Macbook16"
import Macbook14 from "./models/Macbook14"
import { useGSAP } from "@gsap/react"



const ANIMATION_DURATION = 1.5
const OFFSET_DISTANCE = 7   

function fadeMeshes(group, opacity){
    if(!group) return

    group.traverse((child)=>{
        if(child.isMesh){
            child.material.transparent = true
            gsap.to(child.material, {opacity, duration: ANIMATION_DURATION - 0.2})
        }
    })
}

function moveGroup(group, x){
    if(!group) return

    gsap.to(group.position, {x, duration:ANIMATION_DURATION})
}


export default function ModelsSwitcher({scale, isMobile}) {
    const smallMacRef = useRef()
    const largeMacRef = useRef()

    const showLargeMack = scale === 0.08 || scale === 0.05

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1, 
        polar: [-Math.PI, Math.PI],
        azimuth: [-Infinity, Infinity],
        
    }


    useGSAP(()=>{
        if(showLargeMack){
            moveGroup(smallMacRef.current, -OFFSET_DISTANCE)
            moveGroup(largeMacRef.current, 0)

            fadeMeshes(smallMacRef.current, 0)
            fadeMeshes(largeMacRef.current, 1)
        }
        else{
            moveGroup(smallMacRef.current, 0)
            moveGroup(largeMacRef.current, OFFSET_DISTANCE)

            fadeMeshes(smallMacRef.current, 1)
            fadeMeshes(largeMacRef.current, 0)
        }

        
    }, [scale])

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacRef}>
                    <Macbook16 scale={isMobile ? 0.05 : 0.08} />
                </group>
            </PresentationControls>

            <PresentationControls {...controlsConfig}>
                <group ref={smallMacRef}>
                    <Macbook14 scale={isMobile ? 0.03 : 0.06} />
                </group>
            </PresentationControls>
        
        </>
    )
}