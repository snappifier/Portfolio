"use client"

import {motion, useScroll } from "motion/react"

export default function ScrollAnimation() {
	const { scrollYProgress } = useScroll()

	return (
		<motion.div className="fixed top-0 w-full h-2 bg-red-500 origin-left"
			style={{scaleX: scrollYProgress}}>

		</motion.div>
	)
}