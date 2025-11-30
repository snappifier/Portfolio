
import {motion} from "motion/react";

export default function ProjectsTitle() {

	return (
		<div className="flex flex-col items-center justify-center w-max h-max">
			<h3 className="txt-sm text-blue-200/70 tracking-[0.4em] font-medium mb-4">PORTFOLIO</h3>
			<h2 className="text-7xl font-bold text-white mb-8 tracking-tight drop">Featured Projects</h2>
			<p className="text-slate-400 text-xl">A curated selection of projects demonstrating my expertise in React & Motion.</p>
		</div>
	)
}