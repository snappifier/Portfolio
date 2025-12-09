'use client'

import {motion} from "motion/react";
import {useLayoutEffect, useRef, useState} from "react";

export default function AnimateStagger({ tags, baseDelay = 0, staggerFactor = 0.002 }) {
	const containerRef = useRef(null);
	const [delays, setDelays] = useState([]);
	const [isReady, setIsReady] = useState(false);

	useLayoutEffect(() => {
		if (!containerRef.current) return;

		const tagElements = Array.from(containerRef.current.children);

		if (tagElements.length === 0) return;

		const originIndex = 0;
		const originRect = tagElements[originIndex].getBoundingClientRect();
		const originX = originRect.left + originRect.width / 2;
		const originY = originRect.top + originRect.height / 2;

		const newDelays = tagElements.map((el) => {
			const rect = el.getBoundingClientRect();
			const x = rect.left + rect.width / 2;
			const y = rect.top + rect.height / 2;

			const distance = Math.sqrt(Math.pow(x - originX, 2) + Math.pow(y - originY, 2));

			return distance * staggerFactor
		})

		setDelays(newDelays);
		setIsReady(true);
	}, [tags, staggerFactor])

	return (
		<div ref={containerRef} className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4 lg:mt-5">
			{tags.map((tag, index) => (
				<motion.div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2 px-2 sm:px-2.5 lg:px-3 py-1 sm:py-1.5 lg:py-2  rounded-sm bg-zinc-900 text-white text-sx sm:text-sm select-none pointer-events-none"
				            key={tag.name || tag}
				            initial={{ opacity: 0, y: 10, scale: 0.8 }}
				            animate={isReady ? { opacity: 1, y: 0, scale: 1 } : {}}
				            transition={{type: 'spring', stiffness: 150, damping: 12, delay: isReady ? (delays[index] + baseDelay) : 0 }}
				>
					{tag.icon && <img src={tag.icon} alt={tag.name} className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4"/>}
					<span className="hidden sm:inline">{tag.name}</span>
				</motion.div>
			))}
		</div>
	)




}