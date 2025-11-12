import { useMediaQuery } from "react-responsive"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { performanceImgPositions } from "@/constants"


export default function Performance(){
    const isMobile = useMediaQuery({query:"(max-width: 1024px)"})

    useGSAP(()=>{
        gsap.fromTo(
            "#performance .content p",
            { opacity: 0, y: 10 },
            {
                opacity: 1,
                y: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#performance .content p",
                    start: "top bottom",
                    end: "top center",
                    scrub: true,
                    invalidateOnRefresh: true,
                },
            }
        )
        
        if(isMobile) return;

        const timeline = gsap.timeline({
            // TODO: make animations and better positions for tablet and phone
            defaults: {ease: "power1.inOut", overwrite:'auto' }, 
            scrollTrigger: {
                trigger: "#performance",
                start: 'top bottom',
                end: 'center center',
                scrub: 1,
                invalidateOnRefresh: true,
            }
        })

        performanceImgPositions.forEach((pos)=>{
            if(pos.id === 'p5') return

            const posSettings = {
            }

            if(pos.left) posSettings.left = `${pos.left}%`
            if(pos.right) posSettings.right = `${pos.right}%`
            if(pos.bottom) posSettings.bottom = `${pos.bottom}%`

            timeline.to(`.${pos.id}`, posSettings, 0)
        })

        
        
    }, [isMobile])

    return (
        <section id='performance'>
            <h2>
               Next-level graphics performance. Game on.
            </h2>

            <div className="wrapper">
                <img className="p1" src="/performance1.png"/>
                <img className="p2" src="/performance2.png"/>
                <img className="p3" src="/performance3.png"/>
                <img className="p4" src="/performance4.png"/>
                <img className="p5" src="/performance5.jpg"/>
                <img className="p6" src="/performance6.png"/>
                <img className="p7" src="/performance7.png"/>
            </div>

            <div className="content">
                <p>
                    Run graphics-intensive workflows with a responsiveness that keeps up
                    with your imagination. The M4 family of chips features a GPU with a
                    second-generation hardware-accelerated ray tracing engine that renders
                    images faster, so{" "}
                    <span className="text-white">
                        gaming feels more immersive and realistic than ever.
                    </span>{" "}
                    And Dynamic Caching optimizes fast on-chip memory to dramatically
                    increase average GPU utilization — driving a huge performance boost
                    for the most demanding pro apps and games.
                </p>
            </div>
        </section>
    )
}