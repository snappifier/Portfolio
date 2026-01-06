'use client'

import {motion, AnimatePresence} from "motion/react";

export default function Card({title, subtitle, icon, onClick, isCopied}) {

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			onClick();
		}
	}

	return (
		<motion.div className="bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 focus-visible:bg-zinc-700 hover:border-zinc-600 focus-visible:border-zinc-600 p-4 rounded-xl cursor-pointer transition-colors duration-300 flex flex-col justify-between gap-3 group relative overflow-hidden"
		            onClick={onClick}
		            whileTap={{scale: 0.95}}
		            transition={{duration: 0.1}}
					onKeyDown={handleKeyDown}
		>
			<div className="flex items-start justify-between">
				<div className="text-zinc-400 group-hover:text-white group-focus:text-white transition-colors duration-300 relative w-6 h-6">
					<AnimatePresence initial={false}>
						{isCopied ? (
							<motion.div className="absolute inset-0 text-green-400"
							            key="check"
							            initial={{scale: 0.5, opacity: 0}}
							            animate={{scale: 1, opacity: 1}}
							            exit={{scale: 0.5, opacity: 0}}
							            transition={{type: 'spring', stiffness: 500, damping: 25}}
							>
								<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
							</motion.div>
						) : (
							<motion.div className="absolute inset-0"
							            key="icon"
							            initial={{scale: 0.5, opacity: 0}}
							            animate={{scale: 1, opacity: 1}}
							            exit={{scale: 0.5, opacity: 0}}
							            transition={{duration: 0.15}}
							>
								{icon}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
			<div>
				<h4 className="text-zinc-100 font-medium text-sm">{title}</h4>
				<p className="text-zinc-400 text-xs mt-0.5 truncate group-hover:text-zinc-300 transition-colors duration-300">{subtitle}</p>
			</div>
		</motion.div>
	)
}