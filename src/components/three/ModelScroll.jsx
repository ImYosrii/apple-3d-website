import { Html } from "@react-three/drei"
import { Suspense, useEffect, useRef } from "react"
import Macbook from "./models/Macbook"
import { useMediaQuery } from "react-responsive"
import useMacbookStore from "@/store"
import { featureSequence } from "@/constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function ModelScroll(){
    const groupRef = useRef()
    const isMobile = useMediaQuery({query:"(max-width: 1024px)"})
    const setTexture = useMacbookStore((state)=>state.setTexture)

    useEffect(()=>{
        featureSequence.forEach((feature)=>{
            const video = document.createElement('video')

            Object.assign(video, {
                src: feature.videoPath,
                muted: true,
                playsInline: true,
                preload: 'auto',
                crossOrigin: 'anonymous'
                
            })
            video.load()
        })
    }, [])

    useGSAP(()=>{
        const modelTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#f-canvas",
                start: "top top",
                end: "bottom top",
                scrub: 1,
                invalidateOnRefresh: true,
                pin: true

            }
        })

        
        if(groupRef.current){
            modelTimeline.to(groupRef.current.rotation, {y: Math.PI * 2, ease: 'power1.inOut'})
        }
        

        const featuresTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#f-canvas",
                start: "top center",
                end: "bottom top",
                scrub: 2,
                invalidateOnRefresh: true,
            }
        })

        featuresTimeline.call(()=>setTexture("/videos/feature-1.mp4"))
                        .to(".box1", {opacity: 1, y: 0, delay: 1})

                        .call(()=>setTexture("/videos/feature-2.mp4"))
                        .to(".box2", {opacity: 1, y: 0})

                        .call(()=>setTexture("/videos/feature-3.mp4"))
                        .to(".box3", {opacity: 1, y: 0})

                        .call(()=>setTexture("/videos/feature-4.mp4"))
                        .to(".box4", {opacity: 1, y: 0})

                        .call(()=>setTexture("/videos/feature-5.mp4"))
                        .to(".box5", {opacity: 1, y: 0})

    }, [])
    
    return (
        <group ref={groupRef}>
            <Suspense fallback={<Html><h1 className="text-white text-3xl uppercase">Loading...</h1></Html>} >
                <Macbook scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
            </Suspense>
        </group>
    )
}