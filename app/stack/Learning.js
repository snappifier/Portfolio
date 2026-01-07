'use client'

import {motion} from "motion/react";
import LearningElement from "@/app/stack/LearningElement";

export default function Learning({element, onClick}) {

	return (
		<div className="w-full max-w-2xl mx-auto">
			<motion.div className="flex items-center justify-center gap-4 mb-8 sm:mb-10"
			            initial={{opacity: 0}}
			            whileInView={{opacity: 1}}
			            viewport={{once: true}}
			            transition={{duration: 0.5}}
			>
				<div className="w-8 sm:w-12 h-px bg-zinc-800" />
				<span className="text-xs sm:text-sm text-zinc-500 tracking-[0.2em] uppercase select-none">Learning</span>
				<div className="w-8 sm:w-12 h-px bg-zinc-800" />
			</motion.div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pb-1">
				{element.map((el, index) => (
					<LearningElement key={el.id} element={el} onClick={onClick} delay={index * 0.08} />
				))}
			</div>

		</div>
	)
}

