"use client"

import {motion, useScroll, animate } from "motion/react"
import {useRef} from "react"

export default function ScrollAnimation() {
	const { scrollYProgress } = useScroll()
	const ref = useRef(null)

	const handleClick = (e) => {
		const progress = ref.current
		if (!progress) return

		const {width, left} = progress.getBoundingClientRect()
		const clickX = e.clientX - left
		const ratio = clickX / width
		const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight
		const targetY = totalScrollableHeight * ratio

		animate(window.scrollY, targetY, {
			type: "spring",
			damping: 20,
			stiffness: 60,
			mass: 1,

			onUpdate: latest => {
				window.scrollTo(0, latest)
			}
		})
	}

	return (
		<div
			ref={ref}
			onClick={handleClick}
			className="fixed top-0 left-0 w-full h-2 cursor-pointer backdrop-blur-sm backdrop-brightness-75"
		>
			<motion.div
				className="h-full bg-sky-700 origin-left"
				style={{scaleX: scrollYProgress}}></motion.div>
		</div>
	)
}