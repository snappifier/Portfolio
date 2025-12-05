'use client'

import {useEffect, useRef, useState} from "react";
import {motion} from "motion/react";


export default function TechnologiesStagger({ tags }) {

	const containerRef = useRef(null);
	const [delays, setDelays] = useState([]);
	const [isReady, setIsReady] = useState(false);

	const staggerFactor = 0.001;
	const baseDelay = 0;

	useEffect(() => {
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
		<div ref={containerRef} className="flex flex-wrap items-center justify-center gap-x-12 gap-y-12 sm:gap-x-16 sm:gap-y-16 max-w-6xl mx-auto mt-16 sm:mt-24">
			{tags.map((tag, index) => (
				<motion.div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2 select-none pointer-events-none"
										key={tag.name || tag}
				            initial={{ opacity: 0, y: 10, scale: 0.8 }}
				            viewport={{ once: true, amount: 0.8 }}
				            whileInView={isReady ? { opacity: 1, y: 0, scale: 1 } : {}}
				            transition={{type: 'spring', stiffness: 150, damping: 12, delay: isReady ? (delays[index] + baseDelay) : 0 }}
				>
					{tag.icon && <img src={tag.icon} alt={tag.name} className="w-8 sm:w-12 lg:w-15 h-8 sm:h-12 lg:h-15"/>}
				</motion.div>
			))}
		</div>
	)
}