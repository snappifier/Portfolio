'use client'

import {motion, AnimatePresence} from "motion/react"
import {Typewriter} from "motion-plus/react";
import {useEffect, useState} from "react"

export default function Loader() {
	const [showLoader, setShowLoader] = useState(true);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		if (showLoader) {
			document.body.style.overflow = "hidden"
			document.documentElement.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "auto"
			document.documentElement.style.overflow = "auto"
		}
	})


	const variants = {
		initial: {},
		exit: {transition: {staggerChildren: 0.05}}
	}

	const BlockVariants = {
		initial: {y: 0},
		exit: {y: "-100%", transition: {duration: 0.6, ease: "easeOut"}}
	}

	const blocks = [...Array(10)]

	return (
			<AnimatePresence>
				{showLoader && (
					<motion.div key="container" className="fixed top-0 left-0 w-full h-dvh flex items-start justify-center z-999"
					            variants={variants}
					            initial="initial"
					            animate="show"
					            exit="exit"
					>
						<motion.div className="absolute w-full h-full flex items-center justify-center text-white text-5xl"

						            animate={{opacity: isVisible ? 1 : 0}}
						            transition={{duration: 0.5, ease: "easeOut"}}
						            onAnimationComplete={() => {if (!isVisible) setShowLoader(false)}}

						>
							<Typewriter
							onComplete={() => {
								setTimeout(() => setIsVisible(false), 1500)
							}}
							>Welcome to my portfolio.</Typewriter>

						</motion.div>
						{blocks.map((_, i) => (
							<motion.div key={i} className="h-full w-full bg-zinc-950"
							variants={BlockVariants}
							></motion.div>
						))}

					</motion.div>
				)}
			</AnimatePresence>
	)

}