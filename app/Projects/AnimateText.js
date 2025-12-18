'use client'

import { useLayoutEffect, useRef } from "react";
import { animate, stagger } from "motion/react";
import { splitText } from "motion-plus";

const AnimateText = ({ children, className, as: Tag = "div", type = "char", delay = 0, duration = 0.6, bounce = 0.5, staggerD = 0.03, trigger = true }) => {
	const ref = useRef(null)
	const hasAnimated = useRef(false)

	useLayoutEffect(() => {
		if (!ref.current || !trigger || hasAnimated.current) return

		hasAnimated.current = true
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
	}, [delay, duration, bounce, staggerD, type, children, trigger])

	return (
		<Tag ref={ref} className={className} style={{visibility: 'hidden', content: "layout paint", willChange: "opacity, transform"}}>{children}</Tag>
	)
}

export default AnimateText