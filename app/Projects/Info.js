'use client'

import {memo} from 'react';
import {motion, AnimatePresence} from "motion/react";
import AnimateText from "./AnimateText"
import AnimateStagger from "@/app/Projects/AnimateStagger";

function Info({project, isVisible, isMobile = false}) {
	if (!project) return null;

	if (isMobile) return (
		<AnimatePresence>
			{isVisible && (
				<motion.div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950  border-t border-zinc-800 p-4 sm:p-5 lg:hidden"
				            initial={{y: "100%", opacity: 0}}
				            animate={{y: 0, opacity: 1}}
				            exit={{y: "100%", opacity: 0}}
				            transition={{duration: 0.4, ease: [0.25, 0.1, 0.25, 1]}}
				>

						<motion.div className="flex flex-col items-start justify-center max-w-2xl mx-auto"
						            key={project.id}
						            initial={{opacity: 0}}
						            animate={{opacity: 1}}
						            transition={{duration: 0.3, delay: 0.1}}
						>
							<AnimateText as="h2" className="text-base sm:text-lg font-bold text-white tracking-tight w-full line-clamp-1" duration={0.6} staggerD={0.015}>{project.title}</AnimateText>
							<AnimateText as="p" className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-2 w-full" type="lines" duration={1} bounce={0.5} staggerD={0.1} delay={0.2}>{project.description}</AnimateText>
							<motion.div className="w-full overflow-x-auto no-scrollbar my-2"
							            initial={{opacity: 0}}
							            animate={{opacity: 1}}
							            transition={{duration: 0.4, delay: 0.25}}
							>
								<div className="flex gap-1.5 pb-1">
									{project.tags.slice(0, 6).map((tag, index) => (
										<motion.div className="flex items-center gap-1 px-2 py-1 rounded-sm bg-zinc-800 text-white text-xs whitespace-nowrap shrink-0"
										            key={tag.name}
										            initial={{opacity: 0, scale: 0.8}}
																animate={{opacity: 1, scale: 1}}
																transition={{duration: 0.3, delay: 0.3 + index * 0.03}}
										>
											{tag.icon && <img src={tag.icon} alt={tag.name} className="w-3 h-3"/>}
											<span>{tag.name}</span>
										</motion.div>
									))}
									{project.tags.length > 6 && (
										<motion.div className="flex items-center px-2 py-1 rounded-sm bg-zinc-800/50 text-zinc-400 text-xs whitespace-nowrap shrink-0"
										            initial={{opacity: 0}}
										            animate={{opacity: 1}}
										            transition={{duration: 0.3, delay: 0.5}}
										>
										+{project.tags.length - 6}
										</motion.div>
									)}
								</div>
							</motion.div>

							<motion.div className="flex items-center gap-3 w-full"
							            initial={{opacity: 0, y: 10}}
							            animate={{opacity: 1, y: 0}}
							            transition={{duration: 0.5, delay: 0.4, ease: "easeOut"}}
							>
								<div className="flex items-center justify-center cursor-pointer select-none">
									<p className="text-sm text-white tracking-wide">See Live</p>
								</div>
								<div className="flex items-center justify-center gap-1.5 rounded-sm cursor-pointer select-none bg-zinc-800 text-white px-3 py-1.5">
									<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24">
										<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
											<path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"/>
											<path d="M9 20.027c-3 .973-5.5 0-7-3"/>
										</g>
									</svg>
									<p className="text-xs sm:text-sm">Source</p>
								</div>

							</motion.div>
						</motion.div>
				</motion.div>

				)}
		</AnimatePresence>
	)

	return (
		<div className="sticky top-1/4 mb-40 mt-30 h-max w-full flex items-center justify-center px-4 xl:px-8">
				{isVisible && (
				<motion.div className="flex flex-col items-start justify-center max-w-xl xl:max-w-2xl"
				            key={project.id}
										initial={{opacity: 0}}
				            animate={{opacity: 1}}
				            transition={{duration: 0.3}}
				>

					<AnimateText as="h2" className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight  w-full" >{project.title}</AnimateText>
					<AnimateText as="p" className="text-sm md:text-base lg:text-lg text-zinc-400 leading-tight w-full"
					             duration={1}
					             bounce={0.5}
					             type="lines"
					             staggerD={0.1}
					             delay={0.2}
					>{project.description}</AnimateText>
					<AnimateStagger tags={project.tags} baseDelay={0.5} staggerFactor={0.05}/>
					<motion.div className={`w-full h-1 my-6 md:my-8 lg:my-10 rounded-full ${project.color}`}
											initial={{scaleX: 0, opacity: 0}}
											animate={{scaleX: 1, opacity: 1}}
					            style={{originX: 0}}
											transition={{duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1]}}
					/>
					<motion.div className="flex items-center justify-around gap-2 md:gap-4 lg:gap-5 ml-2 lg:ml-3"
											initial={{opacity: 0, y: 10}}
					            animate={{opacity: 1, y: 0}}
					            transition={{duration: 0.7, delay: 1.3, ease: "easeOut"}}
					>

						<div className={`flex items-center justify-center cursor-pointer select-none`}>
							<p className="text-sm md:text-base text-white tracking-wide">See Live</p>
						</div>
						<div className="flex items-center justify-center gap-2 rounded-sm cursor-pointer select-none bg-zinc-800 text-white  px-3 py-1.5 md:px-4 md:py-2 ">
							<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"></path><path d="M9 20.027c-3 .973-5.5 0-7-3"></path></g></svg>
							<p className="text-sm md:text-base">Source Code</p>
						</div>
					</motion.div>
				</motion.div>
					)}
		</div>
	)
}

export default memo(Info)

