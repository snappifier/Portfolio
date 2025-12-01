'use client'
import {motion} from "motion/react";

export default function Cards({project, setAsActive}) {

	return (
		<motion.div className="flex flex-col items-center justify-center gap-5"
								onViewportEnter={setAsActive}
		            viewport={{amount: 0.5, margin: "0px 0px 20% 0px"}}
		>
			<div className={`${project.color} size-200`}></div>

		</motion.div>
	)
}