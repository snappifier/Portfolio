"use client"

import {motion, useScroll, animate, useTransform } from "motion/react"
import {useEffect, useRef} from "react"
import {useLenis} from "lenis/react";

export default function ScrollAnimation() {
	const { scrollYProgress } = useScroll()
	const ref = useRef(null)
	const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
	const lenis = useLenis()

	const handleClick = (e) => {
		const progress = ref.current
		if (!progress) return

		const {width: rectWidth, left} = progress.getBoundingClientRect()
		const clickX = e.clientX - left
		const ratio = clickX / rectWidth
		const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight
		const targetY = totalScrollableHeight * ratio

		lenis.scrollTo(targetY, {duration: 2, easing: (t) => 1 - Math.pow(1 - t, 3)})
	}

	return (
		<div
			ref={ref}
			onClick={handleClick}
			className="fixed top-0 left-0 w-full h-2 cursor-pointer backdrop-blur-sm backdrop-brightness-75 z-900"
		>
			<motion.div
				className="h-full overflow-hidden"
				style={{width}}
			>
				<div className="h-full w-screen bg-linear-to-r from-blue-500 via-sky-500 to-cyan-300" />
			</motion.div>
		</div>
	)
}