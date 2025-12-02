'use client'

import { useEffect, useRef } from "react";
import { animate, stagger } from "motion/react";
import { splitText } from "motion-plus";

const AnimateText = ({ children, className, as: Tag = "div", type = "char", delay = 0, duration = 0.6, bounce = 0.5, staggerD = 0.03 }) => {
	const ref = useRef(null)

	useEffect(() => {
		if (!ref.current) return

		ref.current.style.visibility = 'visible'

		const split = splitText(ref.current, { charClass: "inline-block", wordClass: "inline-block", lineClass: "block overflow-hidden"})

		let animationType;
		switch (type) {
			case "lines": animationType = split.lines; break;
			case "words": animationType = split.words; break;
			default: animationType = split.chars;
		}

		if (!animationType || animationType.length === 0) return


		animate(
			animationType,
			{
				opacity: [0, 1],
				y: [20, 0],
				rotateX: [40, 0],
			},
			{
				type: 'spring',
				duration: duration,
				bounce: bounce,
				delay: stagger(staggerD, {startDelay: delay})
			}
			)
	}, [delay, duration, bounce, staggerD, type, children])
	return (
		<Tag ref={ref} className={className} style={{visibility: 'hidden'}}>{children}</Tag>
	)
}

export default AnimateText