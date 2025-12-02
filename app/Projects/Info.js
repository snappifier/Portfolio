'use client'

import {useEffect, useRef} from "react";
import {motion, AnimatePresence, animate, stagger} from "motion/react";
import {splitText} from "motion-plus";
import AnimateText from "./AnimateText"

export default function Info({project}) {
	if (!project) return null;

	return (
		<div className="sticky top-1/4 mb-80 mt-30 h-max w-1/2 flex items-center justify-center">
			<AnimatePresence mode="wait">
				<motion.div className="flex flex-col items-start justify-center max-w-2xl"
				            key={project.id}>

					<AnimateText as="h2" className="text-6xl font-bold text-white tracking-tight leading-tight w-full" >{project.title}</AnimateText>
					{/*<motion.h2 className="text-6xl font-bold text-white tracking-tight leading-tight w-full">{project.title}</motion.h2>*/}
					<AnimateText as="p" className="text-lg text-zinc-400 leading-relaxed w-full"
					             duration={1}
					             bounce={0.5}
					             type="lines"
					             staggerD={0.1}
					             delay={0.2}
					>{project.description}</AnimateText>
					{/*<motion.p className="text-lg text-zinc-400 leading-relaxed">{project.description}</motion.p>*/}
					<div className="flex flex-wrap gap-2 mt-5">
						{project.tags.map((tag) => (
							<div key={tag.name} className="flex items-center gap-2 px-3 py-2  rounded-sm bg-zinc-900 text-white text-sm select-none pointer-events-none">
								<img src={tag.icon} alt={tag.name} className="w-4 h-4"/>
								{tag.name}
							</div>
						))}
					</div>
					<div className={`w-full h-px my-10 ${project.color}`}></div>
					<div className="flex items-center justify-around gap-5 ml-3">

						<div className={`flex items-center justify-center cursor-pointer select-none`}>
							<p className="text-base text-white tracking-wide">See Live</p>
						</div>
						<div className="flex items-center justify-center gap-2 rounded-sm cursor-pointer select-none bg-zinc-800 text-white  px-4 py-2 ">
							<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"></path><path d="M9 20.027c-3 .973-5.5 0-7-3"></path></g></svg>
							<p className="text-base">Source Code</p>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	)
}

