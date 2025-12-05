'use client'

import {motion} from "motion/react";

export default function StackTitle() {

	const containerVariants = {
		hidden: {opacity: 0},
		visible: {opacity: 1, transition: {delayChildren: 0.2, staggerChildren: 0.2}}
	}

	const itemVariants = {
		hidden: {y: 20, opacity: 0},
		visible: {y: 0, opacity: 1, transition: {duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9]}}
	}

	return (
		<motion.div className="flex flex-col items-center justify-center w-full max-w-4xl h-max text-center px-4 sm:px-6 mt-20 sm:mt-30 lg:mt-40"
		            variants={containerVariants}
		            initial="hidden"
		            whileInView="visible"
		            viewport={{ once: true, amount: 0.9 }}
		>
			<motion.h3 variants={itemVariants} className="text-xs sm:text-sm text-blue-200/70 tracking-[0.3em] sm:tracking-[0.4em] font-medium mb-2">EXPERTISE</motion.h3>
			<motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight drop-shadow-2xl">TECH STACK</motion.h2>
			<motion.p variants={itemVariants} className="max-w-sm sm:max-w-md lg:max-w-xl text-sm sm:text-base lg:text-lg text-zinc-400 leading-relaxed">Some of
				<span className="text-white font-bold text-nowrap"> technologies</span> and <span className="text-white font-bold text-nowrap">tools</span> i use to bring my ideas to life.</motion.p>
		</motion.div>
	)
}