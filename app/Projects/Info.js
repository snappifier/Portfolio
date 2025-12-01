'use client'

import {motion, AnimatePresence} from "motion/react";

export default function Info({project}) {

	return (
		<div className="sticky top-40 mb-80 mt-30 w-max h-max">
			<AnimatePresence mode="wait">
				<motion.div className="flex flex-col gap-6 items-center justify-center w-max h-max"
										key={project.id}
				            initial={{opacity: 0, y: 20}}
				            animate={{opacity: 1, y: 0}}
				            exit={{opacity: 0, y: 20}}
				            transition={{duration: 0.4, ease: "easeOut"}}
				>
					<div className={`w-20 h-5 ${project.color}`}/>
				</motion.div>
			</AnimatePresence>
		</div>
	)
}