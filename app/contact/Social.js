'use client'

import {motion, AnimatePresence} from "motion/react";

export default function Social({id, href, icon, activeSocial, onClick}) {

	return(
		<div className="relative flex flex-col items-center">
			<AnimatePresence>
				{activeSocial === id && (
					<motion.div className="absolute whitespace-nowrap bg-zinc-800 text-white text-[10px] py-1 px-2 rounded-md border border-zinc-700 shadow-xl z-50 pointer-events-none"
					            initial={{ opacity: 0, y: 10, scale: 0.8 }}
					            animate={{ opacity: 1, y: -30, scale: 1 }}
					            exit={{ opacity: 0, y: 10, scale: 0.8 }}
					>
						Coming soon
						<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 border-r border-b border-zinc-700 rotate-45 transform"></div>
					</motion.div>
				)}
			</AnimatePresence>

			<a className={`text-zinc-600 hover:text-white transition-colors duration-300 cursor-pointer`}
			   href={href || '#'}
			   target={href ? "_blank" : undefined}
			   rel="noreferrer"
			   onClick={(e) => onClick(e, id, href)}
			>
				<motion.div whileTap={{scale: 0.9}}>
					{icon}
				</motion.div>
			</a>
		</div>
	)
}