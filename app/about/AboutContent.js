'use client'

import {motion, useInView} from "motion/react";
import {useRef} from "react";
import Image from "next/image";
import AnimateText from "@/app/Projects/AnimateText";
import ContactButton from "@/app/contact/ContactButton";


export default function AboutContent() {
	const ref = useRef(null)
	const isInView = useInView(ref, {once: true, amount: 0.5})

	return (
				<div className="w-full mt-12 sm:mt-16 lg:mt-24 mb-15 sm:mb-20 lg:mb-30">
					<div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
						<div ref={ref} className="flex-1 flex flex-col items-start space-y-8 max-w-2xl text-center lg:text-left">
							<div className="space-y-6 text-base sm:text-lg text-zinc-300/90 leading-relaxed font-light">

										<AnimateText as="p" type="lines" duration={2} bounce={0.3} staggerD={0.1} trigger={isInView} >Hi, I&apos;m Krystian - a self-taught frontend developer from Poland. I&apos;m driven by the constant desire to improve my craft simply because I love building amazing things with my own hands.</AnimateText>
										<AnimateText as="p" className="text-lg sm:text-xl text-white font-medium tracking-tight drop-shadow-lg" type="lines" duration={2} bounce={0.3} staggerD={0.1} delay={0.4} trigger={isInView} >I never settle for &apos;good enough&apos; when exceptional is within reach.</AnimateText>

							</div>

							<div className="pt-2 w-full flex flex-col items-center lg:items-start">
								<AnimateText as="p" type="lines" className="text-zinc-300 mb-6" duration={2} bounce={0.3} staggerD={0.1} delay={0.5} trigger={isInView}>Wanna work together? Feel free to contact me</AnimateText>
								<ContactButton />
							</div>

						</div>
						<motion.div className="relative w-[280px] sm:w-[340px] lg:w-[400px] aspect-square shrink-0"
						            initial={{opacity: 0, scale: 0.9}}
						            whileInView={{opacity: 1, scale: 1}}
						            viewport={{once: true, amount: 0.5}}
						            transition={{duration: 0.8}}
						>
							<div className="absolute -inset-4 bg-linear-to-br from-blue-600/40 to-cyan-500/40 rounded-3xl blur-xl sm:blur-2xl opacity-60" />

							<div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-900/50 border border-zinc-700/30 shadow-2xl backdrop-blur-sm group">
								<Image src="/photo.jpg" alt="Photo" fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" priority={true} />
								<div className="absolute inset-0 bg-linear-to-t from-zinc-950/50 via-transparent tp-transparent opacity-80" />
							</div>
						</motion.div>
					</div>
				</div>

	)
}