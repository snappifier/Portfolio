'use client'
import {motion} from "motion/react";
import {forwardRef} from "react";

const Cards = forwardRef(function Cards({project}, ref) {

	return (
		<motion.div className="flex flex-col items-center justify-center gap-5"
								ref={ref}
		>
			<div className={`${project.color} size-200`}></div>

		</motion.div>
	)
})
export default Cards