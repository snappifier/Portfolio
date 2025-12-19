'use client'

import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "motion/react";
import Image from "next/image";
import {useLenis} from "lenis/react";

export default function LearningOpen({element, isOpen, onClose}) {
	const lenis = useLenis()
	const [openedCerts, setOpenedCerts] = useState({})
	const [pressedCardIndex, setPressedCardIndex] = useState(null)

	useEffect(() => {
		if (isOpen) {
			lenis?.stop();
			document.body.style.setProperty('overflow', 'hidden', 'important');
			document.documentElement.style.setProperty('overflow', 'hidden', 'important');
			setOpenedCerts({})
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

	if (!element) return null;

	const hasChannels = element.channels && element.channels.length > 0;
	const hasCertificate = element.certificates && element.certificates.length > 0;

	const handleCertClick = (index) => {

		setOpenedCerts(prev => ({...prev, [index]: true}))
	}

	const getIcon = (index) => {

		if (openedCerts[index]) {
			return (
				<motion.svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}><polyline points="20 6 9 17 4 12" /></motion.svg>
			)
		}

		return (<svg className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>)}

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div className="fixed inset-0 bg-zinc-950/90 backdrop-blur-sm z-900"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0, pointerEvents: 'none' }}
											onClick={onClose}
					/>
					<motion.div className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-md mx-auto z-999"
											initial={{opacity: 0, y: 20, scale: 0.95}}
											animate={{opacity: 1, y: 0, scale: 1}}
											exit={{opacity: 0, y: 20, scale: 0.95, pointerEvents: 'none'}}
											transition={{type: 'spring', stiffness: 300, damping: 25}}
											data-lenis-prevent
					>
						<div className="bg-zinc-900 rounded-sm border border-zinc-800 overflow-hidden">
							<div className="flex items-center justify-between p-4 sm:p-5 border-b border-zinc-800">
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden"
									     style={{backgroundColor: `${element.color || '#52525b'}15`}}>
										<Image src={element.icon} alt={element.name} width={28} height={28} className="w-6 h-6 object-contain select-none pointer-events-none"/>
									</div>
									<div>
										<h3 className="text-base sm:text-lg font-bold text-white select-all">{element.name}</h3>
										<p className="text-xs sm:text-sm text-zinc-500 select-none">{element.description}</p>
									</div>
								</div>
								<motion.button className="p-2 text-zinc-500 hover:text-white transition-colors duration-400 cursor-pointer" onClick={onClose} whileTap={{scale: 0.9}}>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
								</motion.button>
							</div>

							<div className="p-4 sm:p-5 max-h-[50vh] overflow-y-auto overscroll-contain">
								{hasChannels && (
									<div className="space-y-2">
										<p className="text-xs text-zinc-600 uppercase tracking-wider mb-3 select-none">Favorite Channels</p>
										{element.channels.map((channel, index) => (
											<motion.a className="group flex items-center justify-between gap-3 p-3 rounded-sm bg-zinc-800/50 cursor-pointer select-none"
																href={channel.link}
																target="_blank"
																rel="noopener noreferrer"
																key={channel.name}
																initial={{opacity: 0, x: -10}}
																animate={{opacity: 1, x: 0}}
																transition={{delay: 0, opacity: {delay: index * 0.05}, x: {delay: index * 0.05}}}
											          whileTap={{scale: 0.95}}
											>
												<span className="text-sm text-zinc-300">{channel.name}</span>
												<svg className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
											</motion.a>
										))}
									</div>
								)}

								{hasCertificate && (
									<div className="space-y-2">
										<p className="text-xs text-zinc-600 uppercase tracking-wider mb-3 select-none">Certificates</p>
										{element.certificates.map((cert, index) => (
											cert.file ? (
												<motion.a className="group flex items-center justify-between p-3 rounded-sm bg-zinc-800/50 cursor-pointer select-none"
																	href={cert.file}
																	target="_blank"
																	rel="noopener noreferrer"
																	key={cert.name}
																	initial={{ opacity: 0, x: -10 }}
																	animate={{ opacity: 1, x: 0 }}
																	transition={{ delay: 0, opacity: { delay: index * 0.05 }, x: { delay: index * 0.05} }}
												          onPointerDown={() => setPressedCardIndex(index)}
												          onPointerLeave={() => setPressedCardIndex(null)}
																	onPointerUp={(e) => {if (pressedCardIndex === index && (e.button === 0 || e.button === 1)) handleCertClick(index); setPressedCardIndex(null); }}
												          whileTap={{scale: 0.95}}
												>
													<div className="flex items-center gap-2 flex-1 min-w-0">
														<span className={`text-sm truncate transition-colors duration-300 ${openedCerts[index] ? 'text-green-400' : 'text-zinc-300'}`}>
															{cert.name}
														</span>
													</div>
													<div className="flex items-center gap-2 shrink-0">
														{cert.date && (
															<span className="text-xs text-zinc-600">{cert.date}</span>
														)}
														{getIcon(index)}
													</div>
												</motion.a>
											) : (
												<motion.div className="group flex items-center justify-between p-3 rounded-sm bg-zinc-800/50 select-none"
																		key={cert.name}
																		initial={{ opacity: 0, x: -10 }}
																		animate={{ opacity: 1, x: 0 }}
																		transition={{ delay: index * 0.05 }}
												>
													<div className="flex items-center gap-2 flex-1 min-w-0">
														<span className="text-sm truncate text-zinc-300">
															{cert.name}
														</span>
													</div>
													<div className="flex items-center gap-2 shrink-0">
														{cert.date && (
															<span className="text-xs text-zinc-600">{cert.date}</span>
														)}
													</div>
												</motion.div>
											)
										))}
									</div>
								)}
							</div>

							{element.profileLink && (
								<div className="p-4 sm:p-5 border-t border-zinc-800">
									<motion.a href={element.profileLink} target="_blank" rel="noopener noreferrer" whileTap={{scale: 0.95}} className="w-full flex items-center justify-center gap-2 p-3 rounded-sm bg-zinc-800 text-sm text-zinc-400 hover:text-white transition-colors select-none">
										View Profile
										<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
									</motion.a>
								</div>
							)}
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)
}