'use client'

import {motion} from "motion/react";
import Button from "@/app/main/Button";
import {useLenis} from "lenis/react";

export default function Title({startAnimation}) {

	const lenis = useLenis()

	const handleScroll = () => {
		lenis?.scrollTo('#projects', {duration: 1.5, easing: (t) => 1 - Math.pow(1 - t, 3)})
	}

	const containerVariants = {
		hidden: {opacity: 0},
		visible: {opacity: 1, transition: {delayChildren: 0.5, staggerChildren: 0.25}}
	}

	const itemVariants = {
		hidden: {y: 20, opacity: 0},
		visible: {y: 0, opacity: 1, transition: {duration: 1.5, ease: [0.2, 0.65, 0.3, 0.9]}}
	}

	return (
		<div className="absolute w-full h-full px-4 sm:px-6 lg:px-8 flex items-center justify-center text-cyan-50 z-200">
			<motion.div className="w-full max-w-5xl h-max flex flex-col items-center justify-center mb-16 sm:mb-20 lg:mb-30"
				variants={containerVariants}
			            initial="hidden"
			            animate={startAnimation ? "visible" : "hidden"}
			>
				<motion.div variants={itemVariants}>
					<h2 className="text-xs sm:text-sm lg:text-lg text-blue-200/70 tracking-[0.2em] sm:tracking-[0.3em] lg:tracking-[0.4em] font-medium mb-3 sm:mb-4 lg:mb-6 text-center ">FRONTEND DEVELOPER</h2>
				</motion.div>
				<motion.div variants={itemVariants}>
					<h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 tracking-tight drop-shadow-2xl text-center">KRYSTIAN MATWIEJ</h1>
				</motion.div>
				<motion.div variants={itemVariants} className="w-full flex flex-col items-center">
					<p className=" max-w-xs sm:max-w-md lg:max-w-2xl text-sm sm:text-base lg:text-xl text-slate-300 mx-auto leading-relaxed sm:leading-loose text-center px-2">
						I build immersive web experiences that feel alive by combining the
						<span className="text-white font-medium"> speed of Next.js </span>
						with the
						<span className="text-white font-medium"> fluidity of Motion</span>.</p>


				<div  className="flex items-center justify-center gap-4  rounded-full mt-4 sm:mt-5">
					<Button text="View my work" bgColor="bg-[#1a1a1a]" glowColor="from-cyan-200 to-blue-300" underGlowColor="bg-[#1a1a1a]/40" textColor="text-white" onClick={handleScroll} startAnimation={startAnimation} />
				</div>
				</motion.div>
			</motion.div>
		</div>
	)
}