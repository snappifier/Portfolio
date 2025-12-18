'use client'

import {motion, useScroll, useMotionValueEvent} from "motion/react";
import {useState} from "react";

export default function Glow({startAnimation}) {

	const { scrollY } = useScroll();
	const [scrolled, setScrolled] = useState(false);

	useMotionValueEvent(scrollY, "change", (value) => {if (value > 50 && !scrolled) setScrolled(true)})

	return (<>
        <div className="w-full h-full flex flex-col items-center justify-center">
            <motion.div className="w-full h-full "
                        initial={{opacity: 0}}
                        animate={{opacity: startAnimation ? 1 : 0}}
                        transition={{duration: 3, ease: "easeOut"}}
                        style={{willChange: "opacity", contail: "layout style paint"}}
            >
                <div className="w-full h-full flex items-center justify-center">
                    <div className="h-full w-1/2 bg-[conic-gradient(from_90deg_at_50%_70%,_#F8F8F8_0%,_#000_0%,#09090b_10%,_#0ea5e9_96%,_#75d4ff_99%)]  " style={{transform: "translateZ(0)", backfaceVisibility: "hidden", webBackfaceVisibility: "hidden"}}/>
                    <div className="h-full w-1/2 bg-[conic-gradient(from_90deg_at_50%_70%,_#F8F8F8_0%,_#000_0%,#09090b_10%,_#0ea5e9_96%,_#75d4ff_99%)] scale-x-[-1]" style={{transform: " translateZ(0)", backfaceVisibility: "hidden", webBackfaceVisibility: "hidden"}}/>
                    <div className="absolute w-full h-full bg-linear-to-b from-zinc-950 from-0% via-transparent via-70% to-zinc-950 to-100% z-100 top-0 backdrop-saturate-150 pointer-events-none" style={{transform: "translateZ(0)", backfaceVisibility: "hidden", webBackfaceVisibility: "hidden"}}/>
                </div>
            </motion.div>
            <motion.div className="absolute bottom-8 sm:bottom-15 w-max h-max flex items-center justify-center text-slate-400 z-100"
                        animate={{y: [0, 10]}}
                        transition={{duration: 1, ease: "easeInOut", repeat: Infinity, repeatType: "mirror"}}
            >
                <motion.div className="w-max h-max flex flex-col items-center justify-center select-none"
                            initial={{opacity: 0}}
                            animate={{opacity: (startAnimation && !scrolled) ? 1 : 0}}
                            transition={{duration: 1, ease: "easeInOut", delay: (startAnimation && !scrolled) ? 2 : 0 }}
                >
                    <p className="text-xs sm:text-sm lg:text-base">Discover more</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="m11 17.243l-3.95-3.95a1 1 0 1 0-1.414 1.414l5.657 5.657a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0-1.414-1.414L13 17.243V4a1 1 0 1 0-2 0z"></path></g></svg>
                </motion.div>
            </motion.div>
        </div>
	</>)
}