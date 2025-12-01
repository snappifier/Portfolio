'use client'

import {motion, AnimatePresence} from "motion/react";
import {splitText} from "motion-plus";

export default function Info({project}) {
	if (!project) return null;
	return (
		<div className="sticky top-1/4 mb-80 mt-30 h-max w-max px-12">
			{/*<AnimatePresence mode="popLayout">*/}
			{/*	<motion.div*/}
			{/*		key={`glow-${project.id}`}*/}
			{/*		initial={{ opacity: 0, scale: 0.8 }}*/}
			{/*		animate={{ opacity: 0.4, scale: 1 }}*/}
			{/*		exit={{ opacity: 0, scale: 1.2 }}*/}
			{/*		transition={{ duration: 1 }}*/}
			{/*		className={`absolute top-5  w-1/2 h-1/4 bg-gradient-to-r ${project.color} blur-[60px] rounded-full -z-10`}*/}
			{/*	/>*/}
			{/*</AnimatePresence>*/}
			<AnimatePresence mode="wait">
				<motion.div className="flex flex-col items-start justify-center max-w-xl"
				            key={project.id}>

					<h2 className="text-4xl font-bold text-white tracking-tight leading-tight w-full">{project.title}</h2>
					<p className="text-lg text-zinc-400 leading-relaxed">{project.description}</p>
					<div className="flex flex-wrap gap-2 mt-5">
						{project.tags.map((tag) => (
							<div key={tag.name} className="flex items-center gap-2 px-3 py-1 rounded-sm bg-zinc-900 text-white text-sm select-none pointer-events-none">
								<img src={tag.icon} alt={tag.name} className="w-4 h-4"/>
								{tag.name}
							</div>
						))}
					</div>
					<div className="flex items-center justify-around mt-10 gap-5">

						<div className={`relative flex items-center justify-center gap-2 rounded-sm cursor-pointer select-none bg-zinc-50`}>
							{/*<div className={`absolute -inset-[1px] -z-10 ${project.color} rounded-sm`}/>*/}
							<p className="text-base text-zinc-950 px-4 py-2">See Live</p>
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

