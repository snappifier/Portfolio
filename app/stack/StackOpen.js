'use client'

import {motion, AnimatePresence} from "motion/react";
import Image from "next/image";
import {useEffect} from "react";
import {useLenis, ReactLenis} from "lenis/react";

export default function StackOpen({tags, isOpen, onClose}) {

	const lenis = useLenis()

	useEffect(() => {
		if (isOpen) {
			lenis?.stop()
			document.body.style.overflow = 'hidden'
		}
		else {
			lenis?.start()
			document.body.style.overflow = ''
		}

		return () => {
			document.body.style.overflow = ''
			lenis?.start()
		}
	}, [isOpen, lenis])


	return (
		<AnimatePresence>
			{isOpen &&(
				<>
					<motion.div className="fixed inset-0 bg-zinc-950/90 backdrop-blur-sm z-50"
				              initial={{opacity: 0}}
					            animate={{opacity: 1}}
					            exit={{opacity: 0}}
					            onClick={onClose}
					/>

					<motion.div className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-2xl mx-auto z-50"
					            initial={{opacity: 0, y: 20, scale: 0.95}}
					            animate={{opacity: 1, y: 0, scale: 1}}
					            exit={{opacity: 0, y: 20, scale: 0.95}}
					            transition={{type: 'spring', stiffness: 300, damping: 25}}
					>
						<div className="bg-zinc-900 rounded-sm border border-zinc-800 overflow-hidden">
							<div className="flex items-center justify-between p-4 sm:p-5 border-b border-zinc-800">
								<div>
									<h3 className="text-base sm:text-lg font-bold text-white">All Technologies</h3>
									<p className="text-xs sm:text-sm text-zinc-500">{tags.length} technologies & tools</p>
								</div>
								<button onClick={onClose} className="p-2 text-zinc-500 hover:text-white transition-colors duration-400 cursor-pointer">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
								</button>
							</div>

							<ReactLenis className="p-4 sm:p-5 max-h-[60vh] overflow-y-auto overscroll-contain"
													root={false}
							            options={{duration: 1.2, prevent: true}}
							>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
									{tags.map((tag, index) => (
										<motion.div className="flex items-center gap-3 p-3 rounded-sm bg-zinc-800/50"
										            key={tag.name}
										            initial={{opacity: 0, x: -10}}
																animate={{opacity: 1, x: 0}}
																transition={{delay: index * 0.03}}
										>
											<div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 overflow-hidden">
												<Image src={tag.icon} alt={tag.name} width={24} height={24} className="w-5 h-5 object-contain"/>

											</div>
											<div className="min-w-0">
												<p className="text-sm text-white font-medium truncate">{tag.name}</p>
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