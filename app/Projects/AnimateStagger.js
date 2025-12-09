'use client'

import {motion} from "motion/react";

export default function AnimateStagger({ tags, baseDelay = 0, staggerFactor = 0.04 }) {


	return (
		<div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4 lg:mt-5">
			{tags.map((tag, index) => (
				<motion.div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2 px-2 sm:px-2.5 lg:px-3 py-1 sm:py-1.5 lg:py-2  rounded-sm bg-zinc-900 text-white text-sx sm:text-sm select-none pointer-events-none"
				            key={tag.name || tag}
				            initial={{ opacity: 0, y: 10, scale: 0.8 }}
				            animate={{ opacity: 1, y: 0, scale: 1 }}
				            transition={{type: 'spring', stiffness: 150, damping: 12, delay: baseDelay + (index * staggerFactor) }}
				>
					{tag.icon && <img src={tag.icon} alt={tag.name} className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4"/>}
					<span className="hidden sm:inline">{tag.name}</span>
				</motion.div>
			))}
		</div>
	)




}