'use client'

import {useState, useRef, useEffect, useCallback} from "react";
import Cards from "./Cards";
import Info from "./Info";
import {projects, testData} from "./data"
import ProjectsTitle from "@/app/Projects/ProjectsTitle";

export default function FeaturedProjects() {

	const [activeProject, setActiveProject] = useState(0)
	const cardsRef = useRef([])
	const containerRef = useRef(null)

	const updateActiveProject = useCallback(() => {
		if (!cardsRef.current.length) return

		const breakPoint = window.innerHeight * 0.5

		for (let i = cardsRef.current.length - 1; i >= 0; i--) {
			const ref = cardsRef.current[i]
			if (!ref) continue
			const rect = ref.getBoundingClientRect()

			if (rect.top <= breakPoint) {
				setActiveProject(i)
				return
			}
		}
		setActiveProject(0)
	}, [])

	useEffect(() => {

		let ticking = false

		const handleScroll = () => {
			// ograniczenie do odswiezania
			if (!ticking) {
				requestAnimationFrame(() => {
					updateActiveProject()
					ticking = false
				})
				ticking = true
			}
		}

		updateActiveProject()

		window.addEventListener('scroll', handleScroll, {passive: true})

		return () => window.removeEventListener('scroll', handleScroll)
	},[updateActiveProject])

	return (
		<div className="flex flex-col items-center justify-center w-full h-max">
			<ProjectsTitle />
			<div ref={containerRef} className="w-full h-max flex items-start justify-center gap-5">
			{/*	<div className="flex flex-col gap-30 py-30">*/}
			{/*		{projects.map((project, index) => (*/}
			{/*			<Cards key={project.id} project={project} setAsActive={() => setActiveProject(index)} />*/}
			{/*		))}*/}
			{/*</div>*/}
				<div className="flex flex-col gap-30 py-30">
					{testData.map((project, index) => (
						<Cards key={project.id} project={project} ref={(el) => cardsRef.current[index] = el} />
					))}

			</div>
				<Info project={testData[activeProject]}/>

		</div>
		</div>
	)
}