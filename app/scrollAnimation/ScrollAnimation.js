"use client"

import {motion, useScroll, animate, useTransform } from "motion/react"
import {useEffect, useRef} from "react"

export default function ScrollAnimation() {
	const { scrollYProgress } = useScroll()
	const ref = useRef(null)
	const animationRef = useRef(null)
	const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

	useEffect(() => {
	const stopAnimation = () => {
		if (animationRef.current) {
			animationRef.current.stop()
			animationRef.current = null
		}
	}

	window.addEventListener("wheel", stopAnimation)
	window.addEventListener("touchstart", stopAnimation)

	return () => {
		window.removeEventListener("wheel", stopAnimation)
		window.removeEventListener("touchstart", stopAnimation)
		if (animationRef.current) animationRef.current.stop()
	}
}, [])

	const handleClick = (e) => {
		const progress = ref.current
		if (!progress) return
		if (animationRef.current) animationRef.current.stop()

		const {width: rectWidth, left} = progress.getBoundingClientRect()
		const clickX = e.clientX - left
		const ratio = clickX / rectWidth
		const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight
		const targetY = totalScrollableHeight * ratio

		animationRef.current = animate(window.scrollY, targetY, {
			type: "spring",
			damping: 20,
			stiffness: 60,
			mass: 1,

			onUpdate: latest => {
				window.scrollTo(0, latest)
			},
			onComplete: () => {
				animationRef.current = null
			}
		})
	}

	return (
		<div
			ref={ref}
			onClick={handleClick}
			className="fixed top-0 left-0 w-screen h-2 cursor-pointer backdrop-blur-sm backdrop-brightness-75 z-999"
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