'use client'

import {useState} from "react";
import Cards from "./Cards";
import Info from "./Info";
import {projects, testData} from "./data"
import ProjectsTitle from "@/app/Projects/ProjectsTitle";

export default function FeaturedProjects() {

	const [activeProject, setActiveProject] = useState(0)

	return (
		<div className="flex flex-col items-center justify-center w-full h-max">
			<ProjectsTitle />
			<div className="w-full h-max flex items-start justify-center gap-5">
			{/*	<div className="flex flex-col gap-30 py-30">*/}
			{/*		{projects.map((project, index) => (*/}
			{/*			<Cards key={project.id} project={project} setAsActive={() => setActiveProject(index)} />*/}
			{/*		))}*/}
			{/*</div>*/}
				<div className="flex flex-col gap-30 py-30">
					{testData.map((project, index) => (
						<Cards key={project.id} project={project} setAsActive={() => setActiveProject(index)} />
					))}

			</div>
				<Info project={[activeProject]}/>

		</div>
		</div>
	)
}