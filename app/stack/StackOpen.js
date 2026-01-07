'use client'

import {motion, AnimatePresence} from "motion/react";
import Image from "next/image";
import {useEffect, useRef} from "react";
import {useLenis, ReactLenis} from "lenis/react";

export default function StackOpen({tags, isOpen, onClose}) {

	const lenis = useLenis()
	const modalRef = useRef(null)
	const previousActiveElement = useRef(null)

	useEffect(() => {
		if (isOpen) {
			previousActiveElement.current = document.activeElement
			lenis?.stop()
			document.body.style.setProperty('overflow', 'hidden', 'important');
			document.documentElement.style.setProperty('overflow', 'hidden', 'important');
		}
		else {
			lenis?.start()
			document.body.style.removeProperty('overflow');
			document.documentElement.style.removeProperty('overflow');
		}

		return () => {
			document.body.style.removeProperty('overflow');
			document.documentElement.style.removeProperty('overflow');
			lenis?.start()
		}
	}, [isOpen, lenis])

	useEffect(() => {
		if (!isOpen) return

		const handleKeyDown = (e) => {
			if (e.key === 'Escape') {
				onClose()
				return
			}

			if (e.key !== 'Tab') return

			const focusableElements = modalRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')

			if (!focusableElements || focusableElements.length === 0) return

			const firstElement = focusableElements[0]
			const lastElement = focusableElements[focusableElements.length - 1]
			const isInsideModal = modalRef.current?.contains(document.activeElement)

			if (!isInsideModal) {
				e.preventDefault()
				if (e.shiftKey) {
					lastElement?.focus()
				} else {
					firstElement?.focus()
				}
				return
			}

			if (e.shiftKey) {
				if (document.activeElement === firstElement) {
					e.preventDefault()
					lastElement?.focus()
				}
			} else {
				if (document.activeElement === lastElement) {
					e.preventDefault()
					firstElement?.focus()
				}
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			previousActiveElement.current?.focus()
		}
	}, [isOpen, onClose])


	return (
		<AnimatePresence>
			{isOpen &&(
				<>
					<motion.div className="fixed inset-0 bg-zinc-950/90 backdrop-blur-sm z-900"
				              initial={{opacity: 0}}
					            animate={{opacity: 1}}
					            exit={{opacity: 0}}
					            onClick={onClose}
					/>

					<motion.div className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-2xl mx-auto z-999"
					            ref={modalRef}
					            initial={{opacity: 0, y: 20, scale: 0.95}}
					            animate={{opacity: 1, y: 0, scale: 1}}
					            exit={{opacity: 0, y: 20, scale: 0.95}}
					            transition={{type: 'spring', stiffness: 300, damping: 25}}
					>
						<div className="bg-zinc-900 rounded-sm border border-zinc-800 overflow-hidden">
							<div className="flex items-center justify-between p-4 sm:p-5 border-b border-zinc-800">
								<div>
									<h3 className="text-base sm:text-lg font-bold text-white select-none pointer-events-none">All Technologies</h3>
									<p className="text-xs sm:text-sm text-zinc-500 select-none pointer-events-none">{tags.length} technologies & tools</p>
								</div>
								<motion.button whileTap={{scale: 0.9}} onClick={onClose} className="p-2 text-zinc-500 hover:text-white transition-colors duration-400 cursor-pointer rounded-full focus-visible:text-white">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
								</motion.button>
							</div>

							<ReactLenis className="p-4 sm:p-5 max-h-[60vh] overflow-y-auto overscroll-contain"
													root={false}
							            options={{duration: 1.2, prevent: true}}
							>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 select-none">
									{tags.map((tag, index) => (
										<motion.div className="flex items-center gap-3 p-3 rounded-sm bg-zinc-800/50"
										            key={tag.name}
										            initial={{opacity: 0, x: -10}}
																animate={{opacity: 1, x: 0}}
																transition={{opacity: {delay: index * 0.05}, x: {delay: index * 0.05}}}
										            whileHover={{scale: 1.05}}
										>
											<div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 overflow-hidden">
												<Image src={tag.icon} alt={tag.name} width={24} height={24} className="w-5 h-5 object-contain pointer-events-none"/>

											</div>
											<div className="min-w-0">
												<p className="text-sm text-white font-medium truncate select-all">{tag.name}</p>
												<p className="text-xs text-zinc-500 truncate">{tag.description}</p>
											</div>
										</motion.div>
										)
									)}
								</div>
							</ReactLenis>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)
}