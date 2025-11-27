'use client'

import {motion, useMotionValue, useSpring} from "motion/react";
import {useRef, useEffect, useState} from "react";

export default function Button() {
	const containerRef = useRef(null);
	const buttonRef = useRef(null);
	const timeoutRef = useRef(null);

	const [isIntro, setIsIntro] = useState(true);
	const [isHovered, setIsHovered] = useState(false);

	const x = useMotionValue(-200);
	const y = useMotionValue(0);

	const springConfig = isIntro ? {damping: 25, stiffness: 15, mass: 1} : {damping: 25, stiffness: 350, mass: 0.1};
	const springX = useSpring(x, springConfig);
	const springY = useSpring(y, springConfig);


	useEffect(() => {
		if (buttonRef.current) {
			const rect = buttonRef.current.getBoundingClientRect();
			y.set(rect.height / 2);

			const startTimer = setTimeout(() => {
				x.set(rect.width + 200);
			}, 500);

			const endTimer = setTimeout(() => {
				setIsIntro(false);
				x.set(rect.width / 2);
			}, 3000);

			return () => {
				clearTimeout(startTimer);
				clearTimeout(endTimer);
			}
		}
	},[])

	const handleMouseMove = (e) => {
		if (!buttonRef.current || !containerRef.current) return;
		if (isIntro) setIsIntro(false);
		if (timeoutRef.current) clearTimeout(timeoutRef.current);

		setIsHovered(true);

		const rect = buttonRef.current.getBoundingClientRect();
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;
		x.set(mouseX);
		y.set(mouseY);
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setIsHovered(false);
		},200);
	};

	return(

		<div className="flex items-center justify-center w-fit p-3 "
			ref={containerRef}
		  onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}>
			<div ref={buttonRef} className="relative rounded-full overflow-hidden">
				<div className="absolute inset-0 bg-gray-800">
					<motion.div className="absolute w-32 h-32 bg-gradient-to-r from-cyan-200 to-blue-300 blur-[20px] rounded-full"
					            style={{x: springX, y: springY, translateX: "-50%", translateY: "-50%"}}
					            animate={{opacity: (isIntro || isHovered) ? 1 : 0}}
					            transition={{opacity: {duration: 0.3}}}/>
				</div>
				<div className="relative flex items-center justify-center px-12 py-3 m-[2px] rounded-full bg-[#1a1a1a] z-10 transition colors duration-300 cursor-pointer">
					<span className="text-gray-200 font-medium tracking-wide text-sm select-none">View my work</span>
				</div>

			</div>
		</div>
	)
}