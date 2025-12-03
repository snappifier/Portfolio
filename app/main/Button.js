'use client'

import {motion, useMotionValue, animate} from "motion/react";
import {useRef, useEffect, useState} from "react";

export default function Button({text ,bgColor, glowColor, underGlowColor, textColor, noClick }) {
	const containerRef = useRef(null);
	const buttonRef = useRef(null);
	const timeoutRef = useRef(null);
	const isUserInteractingRef = useRef(false);
	const introAnimationRef = useRef(null);

	const [isIntro, setIsIntro] = useState(true);
	const [isHovered, setIsHovered] = useState(false);

	const x = useMotionValue(-200);
	const y = useMotionValue(0);

	useEffect(() => {
		if (buttonRef.current) {
			const rect = buttonRef.current.getBoundingClientRect();
			y.set(rect.height / 2);

			const startTimer = setTimeout(() => {
				if (!isUserInteractingRef.current) {
					introAnimationRef.current = animate(x, rect.width + 200, {
						duration: 5,
						ease: "easeInOut",
						onComplete: () => {
							if (!isUserInteractingRef.current) {
								setIsIntro(false);

								setTimeout(() => {
									if (!isUserInteractingRef.current) {
										x.set(rect.width / 2);
									}
								}, 350);
							}
						}
					});
				}
			}, 1000);

			return () => {
				clearTimeout(startTimer);
				if (introAnimationRef.current) {
					introAnimationRef.current.stop();
				}
			}
		}
	},[])

	const handleMouseMove = (e) => {
		if (!buttonRef.current || !containerRef.current) return;

		if (!isUserInteractingRef.current) {
			isUserInteractingRef.current = true;
			if (introAnimationRef.current) {
				introAnimationRef.current.stop();
			}
		}

		if (isIntro) setIsIntro(false);
		if (timeoutRef.current) clearTimeout(timeoutRef.current);

		setIsHovered(true);

		const rect = buttonRef.current.getBoundingClientRect();
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		animate(x, mouseX, {
			type: "spring",
			damping: 25,
			stiffness: 350,
			mass: 0.1
		});
		animate(y, mouseY, {
			type: "spring",
			damping: 25,
			stiffness: 350,
			mass: 0.1
		});
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setIsHovered(false);
		}, 200);
	};

	return(
		<div className="flex items-center justify-center w-fit p-2 sm:p-3"
		     ref={containerRef}
		     onMouseMove={handleMouseMove}
		     onMouseLeave={handleMouseLeave}>
			<div ref={buttonRef} className="relative rounded-full overflow-hidden">
				<div className="absolute inset-0">
					<motion.div
						className={`absolute w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-r ${glowColor} blur-[15px] sm:blur-[20px] rounded-full`}
						style={{
							x: x,
							y: y,
							translateX: "-50%",
							translateY: "-50%"
						}}
						animate={{opacity: (isIntro || isHovered) ? 1 : 0}}
						transition={{opacity: {duration: 0.3}}}
					/>
				</div>
				<div className={`relative ${bgColor} flex items-center justify-center px-6 py-2 sm:px-8 sm:py-2.5 lg:px-12 lg:py-3 m-[2px] rounded-full z-10 transition colors duration-300 cursor-pointer`}>
					<span className={`${textColor} font-medium tracking-wide text-xs sm:text-sm select-none whitespace-nowrap`}>{text}</span>
				</div>
			</div>
		</div>
	)
}