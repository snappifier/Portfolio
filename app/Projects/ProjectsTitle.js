'use client'

import {motion} from "motion/react";

export default function ProjectsTitle() {

	const containerVariants = {
		hidden: {opacity: 0},
		visible: {opacity: 1, transition: {delayChildren: 0.2, staggerChildren: 0.2}}
	}

	const itemVariants = {
		hidden: {y: 20, opacity: 0},
		visible: {y: 0, opacity: 1, transition: {duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9]}}
	}

	return (
		<motion.div className="flex flex-col items-center justify-center w-max h-max text-center py-40"
								variants={containerVariants}
		            initial="hidden"
		            whileInView="visible"
		            viewport={{ once: true, margin: "-300px" }}
		>
			<motion.h3 variants={itemVariants} className="text-sm text-blue-200/70 tracking-[0.4em] font-medium mb-2">PORTFOLIO</motion.h3>
			<motion.h2 variants={itemVariants} className="text-6xl font-bold text-white mb-3 tracking-tight drop-shadow-2xl">Featured Projects</motion.h2>
			<motion.p variants={itemVariants} className="max-w-xl text-lg text-slate-300 leading-relaxed">A curated selection of projects demonstrating my expertise in
                <span className="text-white font-bold"> React</span> & <span className="text-white font-bold">Motion</span>.</motion.p>
		</motion.div>
	)
}