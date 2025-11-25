"use client"

import {motion, useScroll, animate, useTransform } from "motion/react"
import {useRef} from "react"

export default function ScrollAnimation() {
	const { scrollYProgress } = useScroll()
	const ref = useRef(null)
	const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

	const handleClick = (e) => {
		const progress = ref.current
		if (!progress) return

		const {width: rectWidth, left} = progress.getBoundingClientRect()
		const clickX = e.clientX - left
		const ratio = clickX / rectWidth
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
				className="h-full overflow-hidden"
				style={{width}}
			>
				<div className="h-full w-screen bg-linear-to-r from-indigo-500 via-blue-500 to-red-500" />
			</motion.div>
		</div>
	)
}