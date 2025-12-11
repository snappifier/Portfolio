'use client'

import {motion, AnimatePresence} from "motion/react"
import {Typewriter} from "motion-plus/react";
import {useEffect, useState} from "react"
import {useLenis} from "lenis/react"

export default function Loader({onLoadingComplete}) {
	const [showLoader, setShowLoader] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [checking, setChecking] = useState(true);
	const [blocksAmount, setBlocksAmount] = useState(10);

	const lenis = useLenis();

	useEffect(() => {
		const hasVisited = localStorage.getItem("hasVisited");

		if (window.innerWidth < 768) {
			setBlocksAmount(5)
		} else {
			setBlocksAmount(10)
		}

		if (!hasVisited) {
			setShowLoader(true)
			setIsVisible(true)
			localStorage.setItem("hasVisited", "true");

		} else {
			setShowLoader(false)
			setIsVisible(false)
			if (onLoadingComplete) onLoadingComplete();
		}
		setChecking(false)
	}, [onLoadingComplete])

	useEffect(() => {
		if (showLoader) {
			if (lenis) lenis.stop()

			document.body.style.setProperty("overflow", "hidden", "important")
			document.documentElement.style.setProperty("overflow", "hidden", "important")
		} else {
			if (lenis) lenis.start()
			document.body.style.removeProperty("overflow")
			document.documentElement.style.removeProperty("overflow")
		}
	}, [showLoader, lenis])


	const variants = {
		initial: {},
		exit: {transition: {staggerChildren: 0.05}}
	}

	const BlockVariants = {
		initial: {y: 0},
		exit: {y: "-100%", transition: {duration: 0.6, ease: "easeOut"}}
	}

	const blocks = [...Array(blocksAmount)]

	if (checking) return null

	return (
			<AnimatePresence>
				{showLoader &&  (
					<motion.div key="container" className="fixed top-0 left-0 w-full h-dvh flex items-start justify-center z-999"
					            variants={variants}
					            initial="initial"
					            animate="show"
					            exit="exit"
					>
						<motion.div className="absolute w-full h-full flex items-center justify-center text-white text-5xl px-20 text-center select-none"
						            animate={{opacity: isVisible ? 1 : 0}}
						            transition={{duration: 0.5, ease: "easeOut"}}
						            onAnimationComplete={() => {if (!isVisible) {
							            setShowLoader(false)
							            if (onLoadingComplete) onLoadingComplete();
						            }}}

						>
							<Typewriter
								speed={80}
							onComplete={() => {
								setTimeout(() => setIsVisible(false), 800)
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