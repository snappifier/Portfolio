'use client'

import {useState, useRef, useEffect} from "react";
import {motion} from "motion/react";
import Image from "next/image";

export default function TechnologyCard({tag, delay = 0}) {
	const [hovered, setHovered] = useState(false)
	const timeoutRef = useRef(null)

	const color = tag.color || '#52525b'

	const handleMouseEnter = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current)
		setHovered(true)
	}

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => setHovered(false), 300);
	};

	useEffect(() => {
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		}
	},[])

	return (
		<motion.div className="relative group"
		            initial={{ opacity: 0, y: 20}}
		            whileInView={{ opacity: 1, y: 0 }}
		            viewport={{ once: true, amount: 0.3 }}
		            transition={{type: 'spring', stiffness: 100, damping: 15, delay: delay}}
		            onMouseEnter={handleMouseEnter}
		            onMouseLeave={handleMouseLeave}
		>
			<div className="absolute -inset-px rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-md"
			     style={{backgroundColor: color, opacity: hovered ? 0.25 : 0}}
			/>
			<motion.div className="relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-zinc-900 border transition-colors duration-300"
									style={{borderColor: hovered ? `${color}50` : '#18181b'}}
			>
				<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 transition-all duration-300"
				     style={{backgroundColor: hovered ? `${color}20` : `${color}10`, boxShadow: hovered ? `0 0 15px -3px ${color}30` : 'none'}}
				>
					<Image src={tag.icon} alt={tag.name} width={32} height={32} className="w-6 h-6 sm:w-7 sm:h-7 object-contain transition-transform duration-500 group-hover:scale-120"/>
				</div>

				<div className="min-w-0">
					<p className="text-sm sm:text-base text-white font-medium truncate">{tag.name}</p>
					<p className="text-xs sm:text-sm text-zinc-500 truncate transition-colors duration-500 group-hover:text-zinc-400">{tag.description}</p>
				</div>
			</motion.div>
		</motion.div>
	)

}