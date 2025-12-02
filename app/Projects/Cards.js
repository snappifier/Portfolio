'use client'
import {motion, useMotionValue, useSpring, useTransform} from "motion/react";
import {forwardRef, useState} from "react";
import Image from "next/image";

const Cards = forwardRef(function Cards({project}, ref) {
	const [isHovered, setIsHovered] = useState(false)
	const hasImage = project.image?.src && project.image?.src.trim() !== "";

	const x = useMotionValue(0.5);
	const y = useMotionValue(0.5);
	const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), {stiffness: 300, damping: 30});
	const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), {stiffness: 300, damping: 30});

	const handleMouseMove = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		x.set((e.clientX - rect.left) / rect.width);
		y.set((e.clientY - rect.top) / rect.height);
	}

	const handleMouseLeave = () => {
		x.set(0.5);
		y.set(0.5);
		setIsHovered(false);
	}

	return (
				<motion.div className="relative size-200 cursor-pointer"
				            ref={ref}
				            style={{perspective: 2000}}
				            onMouseMove={handleMouseMove}
				            onMouseLeave={handleMouseLeave}
				            onMouseEnter={() => setIsHovered(true)}
				            initial={{opacity: 0, y: 60}}
				            whileInView={{opacity: 1, y: 0}}
				            viewport={{once: true, margin: "-100px"}}
				            transition={{duration: 0.8, ease: [0.25, 0.1, 0.25, 1]}}
				>
					<motion.div className={`absolute -inset-4 ${project.color} rounded-2xl blur-2xl`}
											initial={{opacity: 0.2}}
					            animate={{opacity: isHovered ? 0.4 : 0.2}}
					            transition={{duration: 0.4}}
					/>
					<motion.div className="relative size-full rounded-xl overflow-hidden bg-zinc-900"
					            style={{rotateX, rotateY, transformStyle: "preserve-3d" }}
					            animate={{z: isHovered ? 20: 0, boxShadow: isHovered ? "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1)" : "0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.05)"}}
					            transition={{duration: 0.3}}
					>
						<div className="bg-zinc-800/90 backdrop-blur-sm px-3 py-2 flex items-center justify-center gap-2 border-b border-zinc-700/50">
							<div className="flex items-center gap-1.5">
								<div className="size-3 rounded-full bg-red-400"></div>
								<div className="size-3 rounded-full bg-amber-300"></div>
								<div className="size-3 rounded-full bg-green-500"></div>
							</div>

							<div className="flex-1 flex items-center justify-center">
								<div className="bg-zinc-900/80 rounded-md px-2 py-1 flex items-center gap-1.5 max-w-[200px] w-full">
									<svg className="w-4 h-4 text-zinc-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
									</svg>
									<span className="text-xs text-zinc-400 truncate">
										{project.navbarText || "preview.dev"}
									</span>
								</div>
							</div>
							<div className="w-13.5"/>
						</div>

						<div className="relative w-full h-[calc(100%-36px)] overflow-hidden">
							{hasImage ? (
								<motion.div className="w-full h-full pointer-events-none select-none"
								            animate={{scale: isHovered ? 1.05 : 1}}
								            transition={{duration: 0.6, ease: [0.25, 0.1, 0.25, 1]}}
								>
									<Image src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height}/>
								</motion.div>
							) : (
								<div className={`w-full h-full ${project.color} flex flex-col items-center justify-center`}>
									<motion.div className="flex flex-col items-center justify-center gap-2"
									            animate={{scale: isHovered ? 1.05 : 1}}
									            transition={{duration: 0.3, ease: [0.25, 0.1, 0.25, 1]}}
									>
										<span className="text-white/90 font-semibold text-base tracking-wider">
											COMING SOON
										</span>
									</motion.div>
								</div>
							)}
							{hasImage && (
								<motion.div className="absolute inset-0 rounded-xl pointer-events-none"
								            style={{background: useTransform([x, y], ([latestX, latestY]) => `radial-gradient(circle at ${latestX * 100}% ${latestY * 100}%, rgba(255,255,255,0.12) 0%, transparent 50%)`)}}
								            animate={{opacity: isHovered ? 1 : 0}}
								            transition={{duration: 0.3}}
								/>
							)}
						</div>
					</motion.div>

				</motion.div>
	)
})
export default Cards