"use client"

import {motion, useMotionValue, useTransform } from "motion/react"
import {useEffect, useRef} from "react"
import {useLenis} from "lenis/react";

export default function ScrollAnimation() {
    const scrollProgress = useMotionValue(0);

    const width = useTransform(scrollProgress, [0, 1], ["0%", "100%"])

    const ref = useRef(null)

    const lenis = useLenis(({scroll, limit}) => {
        const progress = limit > 0 ? scroll / limit : 0;
        scrollProgress.set(progress);
    })

	const handleClick = (e) => {
		const progress = ref.current
		if (!progress || !lenis) return

		const {width: rectWidth, left} = progress.getBoundingClientRect()
		const clickX = e.clientX - left
		const ratio = clickX / rectWidth
		const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight
		const targetY = totalScrollableHeight * ratio
		const distance = Math.abs(targetY - lenis.scroll)
		const duration = Math.min(Math.max(distance / 1500, 1.2), 3.5)

		lenis.scrollTo(targetY, {duration: duration, easing: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3)/2})
	}

	return (
		<div
			ref={ref}
			onClick={handleClick}
			className="fixed top-0 left-0 w-full group cursor-pointer flex items-start backdrop-blur-sm backdrop-brightness-75 z-900"
		>
			<motion.div
				className="w-full h-3 overflow-hidden backdrop-blur-sm backdrop-brightness-75 mt-0"
				style={{width}}
			>
				<div className="h-full w-screen bg-linear-to-r from-blue-500 via-sky-500 to-cyan-300" />
			</motion.div>
		</div>
	)
}