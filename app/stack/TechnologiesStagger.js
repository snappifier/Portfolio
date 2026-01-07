'use client'

import {useLayoutEffect, useRef, useState} from "react";
import {motion} from "motion/react";
import TechnologyCard from "@/app/stack/TechnologyCard";


export default function TechnologiesStagger({ tags, onShow }) {

	const containerRef = useRef(null);
	const [delays, setDelays] = useState([]);

	const staggerFactor = 0.001;
	const maxVisible = 8;
	const visible = tags.slice(0, maxVisible);
	const more = tags.length > maxVisible;

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
	}, [tags])



	return (
		<div className="w-full max-w-6xl mx-auto mt-12 sm:mt-16 lg:mt-20">
			<div ref={containerRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
				{visible.map((tag, index) => (
					<TechnologyCard key={tag.name} tag={tag} delay={delays[index] || index * 0.05}/>
				))}
			</div>

			{more && (
				<motion.div className="flex justify-center mt-6 sm:mt-8"
				            initial={{opacity: 0, y: 10}}
				            whileInView={{opacity: 1, y: 0}}
				            viewport={{ once: true}}
				            transition={{delay: 0.4}}
				>
					<motion.button className="flex items-center gap-2 px-5 py-2.5 rounded-sm bg-zinc-900 hover:bg-zinc-800 focus-visible:bg-zinc-800 text-zinc-400 hover:text-white focus-visible:text-white transition-colors duration-300 cursor-pointer"
					               onClick={onShow}
					               whileHover={{}}
					               whileTap={{scale: 0.95}}
					>
						<span className="text-sm">View all</span>
						<span className="text-xs text-zinc-600">+{tags.length - maxVisible}</span>
					</motion.button>
				</motion.div>
			)}

		</div>
	)
}