'use client'

import {useState, useRef, useEffect, useCallback} from "react";
import {motion} from "motion/react";
import Cards from "./Cards";
import Info from "./Info";
import {projects, testData} from "./data"
import ProjectsTitle from "@/app/Projects/ProjectsTitle";

export default function FeaturedProjects() {

	const [activeProject, setActiveProject] = useState(0)
	const [isVisible, setIsVisible] = useState(false)
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

	useEffect(() => {
		if (!containerRef.current) return

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true)
				observer.disconnect()
			}
		},{rootMargin: '-400px'})
		observer.observe(containerRef.current)
		return () => observer.disconnect()
	},[])

	return (
		<div className="flex flex-col items-center justify-center w-full h-max">
			<ProjectsTitle />
			<div ref={containerRef} className="w-full h-max flex items-start justify-center ">

				<motion.div className="flex flex-col items-end gap-50 py-30 w-1/2"
				            initial={{opacity: 0, y: 20}}
				            whileInView={{opacity: 1, y: 0}}
				            viewport={{ once: true, margin: "-400px" }}
				            transition={{duration: 0.5, ease: "easeOut"}}
				>
					{projects.map((project, index) => (
						<Cards key={project.id} project={project} ref={(el) => cardsRef.current[index] = el} isVisible={isVisible} />
					))}

				</motion.div>
				<Info project={projects[activeProject]} isVisible={isVisible}/>

			</div>
		</div>
	)
}