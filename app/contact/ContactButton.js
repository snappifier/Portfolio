'use client'

import {useEffect, useState} from 'react'
import {motion, AnimatePresence} from "motion/react";
import {useLenis} from 'lenis/react'
import {contactData} from "@/app/data";

export default function ContactButton() {

	const lenis = useLenis();
	const [isOpen, setIsOpen] = useState(false);
	const [copied, setCopied] = useState(null);
	const [hovered, setHovered] = useState(false);
	const [showForm, setShowForm] = useState(false);

	useEffect(() => {
		if (isOpen) {
			lenis?.stop()
			document.body.style.setProperty('overflow', 'hidden', 'important');
			document.documentElement.style.setProperty('overflow', 'hidden', 'important');
		} else {
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

	const handleCopy = (id, text) => {
		navigator.clipboard.writeText(text);
		setCopied(id);
		setTimeout(() => setCopied(null), 2000);
	}

	const handleClick = (item) => {
		if (item.action === 'copy') {
			handleCopy(item.id, item.description);
		} else if (item.action === 'link' && item.link) {
			window.open(item.link, '_blank');
		} else if (item.action === 'form') {
			setShowForm(true)
		}
	}

	return (
		<>
			<div className="px-6 py-2 rounded-full border" onClick={() => setIsOpen(true)}>
				Get in touch
			</div>
			<AnimatePresence>
				{isOpen && (
					<>
						<motion.div className="fixed inset-0 bg-zinc-950/90 backdrop-blur-sm z-50"
						            initial={{opacity: 0}}
						            animate={{opacity: 1}}
						            exit={{opacity: 0}}
						            onClick={() => setIsOpen(false)}
						/>
						<motion.div className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-md mx-auto z-50"
						            initial={{opacity: 0, y: 20, scale: 0.95}}
						            animate={{opacity: 1, y: 0, scale: 1}}
						            exit={{opacity: 0, y: 20, scale: 0.95}}
						            transition={{type: 'spring', stiffness: 300, damping: 25}}
						>
							<div className="bg-zinc-900 rounded-sm border border-zinc-800 overflow-hidden">

								<div className="flex items-center justify-between p-4 sm:p-5 border-b border-zinc-800">
									<h3 className="text-base sm:text-lg font-bold text-white select-none pointer-events-none">Contact me</h3>
									<motion.button whileTap={{scale: 0.9}} onClick={() => setIsOpen(false)} className="p-2 text-zinc-500 hover:text-white transition-colors duration-400 cursor-pointer">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
									</motion.button>
								</div>

								<div className="p-4 sm:p-5 max-h-[60vh] overflow-y-auto overscroll-contain">
									<div className="flex flex-col items-center justify-center gap-3">
										{contactData.map((item, index) => (
											<motion.div className="group w-full flex items-center gap-4 p-4 rounded-lg bg-zinc-800/30 cursor-pointer"
											            key={item.id}
																	initial={{opacity: 0, x: -20}}
																	animate={{opacity: 1, x: 0}}
																	transition={{type: 'spring', stiffness: 400, damping: 40, delay: 0.1 + index * 0.05, scale: {delay: 0}}}
																	onMouseEnter={() => setHovered(item.id)}
																	onMouseLeave={() => setHovered(null)}
																	onClick={() => handleClick(item)}
											            whileTap={{scale: 0.95}}
											>
												<div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 `}
												     style={{backgroundColor: `${item.color}30`}}
												>
													<div className="transition-transform duration-300 group-hover:scale-110 shrink-0">
														{item.icon}
													</div>
												</div>

												<div className="flex-1 min-w-0">
													<p className="text-white font-medium select-none">{item.name}</p>
													<p className="text-zinc-500 text-sm truncate select-none">{item.description}</p>
												</div>

												<div className="flex items-center gap-2">
													{item.action === 'copy' && (
														<div className="p-2 text-zinc-500 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300"
														            onClick={(e) => {e.stopPropagation(); handleCopy(item.id, item.description)}}
														>
															{copied === item.id ? (
																<motion.svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
																	initial={{scale: 0}}
																	animate={{scale: 1}}
																	transition={{type: 'spring', stiffness: 300, damping: 20}}
																>
																	<polyline points="20 6 9 17 4 12"/>
																</motion.svg>
															) : (
																<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
															)}

														</div>
													)}
													{item.action === 'link' && (
														<div className="p-2 text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"

														>
															<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
														</div>
													)}
													{item.action === 'form' && (
														<div className="p-2 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
															<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>

														</div>

													)}


												</div>

											</motion.div>

										))}

									</div>
								</div>
							</div>

						</motion.div>

					</>
				)}
			</AnimatePresence>
		</>
	)
}