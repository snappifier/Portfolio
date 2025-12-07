'use client'

import {useState} from "react";
import {motion} from "motion/react";
import Image from "next/image";

export default function TechnologyCard({tag, delay = 0}) {
	const [hovered, setHovered] = useState(false)

	return (
		<motion.div className=""
		            initial={{ opacity: 0, y: 20}}
		            whileInView={{ opacity: 1, y: 0 }}
		            viewport={{ once: true, amount: 0.3 }}
		            transition={{type: 'spring', stiffness: 100, damping: 15, delay: delay}}
		            onMouseEnter={() => setHovered(true)}
		            onMouseLeave={() => setHovered(false)}
		>
			<motion.div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-zinc-900 border">
				<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 overflow-hidden">
					<Image src={tag.icon} alt={tag.name} width={32} height={32} className="w-6 h-6 sm:w-7 sm:h-7 object-contain"/>
				</div>

				<div className="min-w-0">
					<p className="text-sm sm:text-base text-white font-medium truncate">{tag.name}</p>
					<p className="text-xs sm:text-sm text-zinc-500 truncate">{tag.description}</p>
				</div>
			</motion.div>
		</motion.div>
	)

}