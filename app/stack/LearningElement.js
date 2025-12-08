'use client'

import {motion} from "motion/react";
import Image from "next/image";

export default function LearningElement({element, onClick, delay = 0}) {

	const handleClick = () => {
		if (element.hasDetails) {
			onClick(element);
		} else if (element.link) {
			window.open(element.link, '_blank')
		}
	}

	return (
		<motion.div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-sm bg-zinc-900 cursor-pointer"
		            initial={{opacity: 0, y: 15}}
		            whileInView={{opacity: 1, y: 0}}
		            viewport={{once: true}}
		            transition={{type: 'spring', stiffness: 120, damping: 14, delay}}
		            onClick={handleClick}
		>
			<div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 overflow-hidden`}>
				<Image src={element.icon} alt={element.name} width={32} height={32} className="w-6 h-6 sm:w-7 sm:h-7 object-contain group-hover:scale-120 transition-transform duration-500"/>
			</div>
			<div className="flex-1 min-w-0">
				<p className="text-sm sm:text-base text-white font-medium truncate">{element.name}</p>
				<p className="text-xs sm:text-sm text-zinc-500 truncate">{element.description}</p>
			</div>

			{element.hasDetails ? (
				<svg className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-400 shrink-0 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
			) : (
				<svg className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 group-hover:-translate-y-1 transition-all duration-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
			)}

		</motion.div>
	)


}