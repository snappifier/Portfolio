
import {motion} from "motion/react";

export default function ProjectsTitle() {

	return (
		<div className="flex flex-col items-center justify-center w-max h-max text-center py-40">
			<h3 className="text-sm text-blue-200/70 tracking-[0.4em] font-medium mb-2">PORTFOLIO</h3>
			<h2 className="text-6xl font-bold text-white mb-3 tracking-tight drop-shadow-2xl">Featured Projects</h2>
			<p className="max-w-xl text-lg text-slate-300 leading-relaxed">A curated selection of projects demonstrating my expertise in
                <span className="text-white font-bold"> React</span> & <span className="text-white font-bold">Motion</span>.</p>
		</div>
	)
}