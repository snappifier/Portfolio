'use client'

import {useEffect} from "react";
import {motion, AnimatePresence} from "motion/react";
import Image from "next/image";
import {ReactLenis, useLenis} from "lenis/react";

export default function LearningOpen({element, isOpen, onClose}) {
	const lenis = useLenis()

	useEffect(() => {
		if (isOpen) {
			lenis?.stop();
			document.body.style.overflow = 'hidden'
		} else {
			lenis?.start()
			document.body.style.overflow = ''
		}

		return () => {
			document.body.style.overflow = ''
			lenis?.start()
		}
	}, [isOpen, lenis])

	if (!element) return null;

	const hasChannels = element.channels && element.channels.length > 0;
	const hasCertificate = element.certificates && element.certificates.length > 0;

	const handleDownload = (cert) => {
		if (cert.file) {
			const link = document.createElement('a');
			link.href = cert.file;
			link.download = cert.file.split('/').pop();
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	};

	const handleChannelClick = (channel) => {
		if (channel.link) {
			window.open(channel.link, '_blank');
		}
	};

	return (
		<AnimatePresence>
			{isOpen &&(
				<>
					<motion.div
						className="fixed inset-0 bg-zinc-950/90 backdrop-blur-sm z-50"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
					/>
				<motion.div className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-md mx-auto z-50"
				            initial={{opacity: 0, y: 20, scale: 0.95}}
				            animate={{opacity: 1, y: 0, scale: 1}}
				            exit={{opacity: 0, y: 20, scale: 0.95}}
				            transition={{type: 'spring', stiffness: 300, damping: 25}}
				>
					<div className="bg-zinc-900 rounded-sm border border-zinc-800 overflow-hidden">
						<div className="flex items-center justify-between p-4 sm:p-5 border-b border-zinc-800">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center overflow-hidden">
									<Image src={element.icon} alt={element.name} width={28} height={28} className="w-6 h-6 object-contain"/>
								</div>
								<div>
									<h3 className="text-base sm:text-lg font-bold text-white">{element.name}</h3>
									<p className="text-xs sm:text-sm text-zinc-500">{element.description}</p>
								</div>
							</div>
							<button className="p-2 text-zinc-500 hover:text-white tranisiton-colors duration-400 cursor-pointer" onClick={onClose}>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
							</button>
						</div>

						<ReactLenis className="p-4 sm:p-5 max-h-[50vh] overflow-y-auto overscroll-contain"
												root={false}
						            options={{duration: 1.2, prevent: true}}
						>
							{hasChannels && (
								<div className="space-y-2">
									<p className="text-xs text-zinc-600 uppercase tracking-wider mb-3">Favorite Channels</p>
									{element.channels.map((channel, index) => (
										<motion.div className="group flex items-center justify-between gap-3 p-3 rounded-sm bg-zinc-800/50 cursor-pointer"
										            key={channel.name}
										            initial={{opacity: 0, x: -10}}
																animate={{opacity: 1, x: 0}}
																transition={{delay: index * 0.05}}
										            onClick={() => handleChannelClick(channel)}
										>
											<span className="text-sm text-zinc-300">{channel.name}</span>
											<svg className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>

										</motion.div>
									))}
								</div>
							)}

									{hasCertificate && (
										<div className="space-y-2">
											<p className="text-xs text-zinc-600 uppercase tracking-wider mb-3">Certificates</p>
											{element.certificates.map((cert, index) => (
												<motion.div className="group flex items-center justify-between p-3 rounded-sm bg-zinc-800/50 cursor-pointer"
																		key={cert.name}
																		initial={{ opacity: 0, x: -10 }}
																		animate={{ opacity: 1, x: 0 }}
																		transition={{ delay: index * 0.05 }}
												            onClick={() => handleDownload(cert)}
												>
													<div className="flex items-center gap-2 flex-1 min-w-0">
														<span className="text-sm text-zinc-300 truncate">{cert.name}</span>
													</div>
													<div className="flex items-center gap-2 shrink-0">
														{cert.date && (
															<span className="text-xs text-zinc-600">{cert.date}</span>
														)}
														{cert.file && (
															<svg className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
														)}
													</div>
												</motion.div>
											))}
										</div>
									)}
						</ReactLenis>

						{element.profileLink && (
							<div className="p-4 sm:p-5 border-t border-zinc-800">
								<a href={element.profileLink} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 p-3 rounded-sm bg-zinc-800 text-sm text-zinc-400 hover:text-white transition-colors">
									View Profile
									<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
								</a>
							</div>
						)}

					</div>
				</motion.div>
				</>
			)}
		</AnimatePresence>
	)
}