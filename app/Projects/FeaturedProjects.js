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
	const [isInProject, setIsInProject] = useState(false)
	const cardsRef = useRef([])
	const sectionRef = useRef(null)

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

	const checkIfInProjects = useCallback(() => {
		if (!sectionRef.current) return

		const firstCard = cardsRef.current[0]
		const lastCard = cardsRef.current[cardsRef.current.length - 1]

		if (!firstCard || !lastCard) return

		const firstRect = firstCard.getBoundingClientRect()
		const lastRect = lastCard.getBoundingClientRect()
		const windowHeight = window.innerHeight
		const showThreshold = windowHeight * 0.6
		const hideThreshold = windowHeight * 0.5
		const isInSection = firstRect.top < showThreshold && lastRect.bottom > hideThreshold
		setIsInProject(isInSection)
	},[])

	useEffect(() => {

		let ticking = false

		const handleScroll = () => {
			// ograniczenie do odswiezania
			if (!ticking) {
				requestAnimationFrame(() => {
					updateActiveProject()
					checkIfInProjects()
					ticking = false
				})
				ticking = true
			}
		}

		updateActiveProject()
		checkIfInProjects()

		window.addEventListener('scroll', handleScroll, {passive: true})

		return () => window.removeEventListener('scroll', handleScroll)
	},[updateActiveProject, checkIfInProjects])

	return (
		<div ref={sectionRef} className="flex flex-col items-center justify-center w-full h-max px-4 sm:px-6 lg:px-8">
			<ProjectsTitle />
			<div className="relative w-full flex flex-col lg:flex-row lg:items-start lg:justify-center ">

				<motion.div className="flex flex-col items-center lg:items-end gap-20 sm:gap-30 md:gap-40 lg:gap-50 py-10 sm:py-20 lg:py-30 w-full lg:w-1/2"
				            initial={{opacity: 0, y: 20}}
				            whileInView={{opacity: 1, y: 0}}
				            viewport={{ once: true, amount: 0.1 }}
				            transition={{duration: 0.5, ease: "easeOut"}}
				            onViewportEnter={() => setIsVisible(true)}
				>
					{projects.map((project, index) => (
						<Cards key={project.id} project={project} ref={(el) => cardsRef.current[index] = el} isVisible={isVisible} />
					))}

				</motion.div>
				<div className="hidden lg:block lg:w-1/2 self-stretch">
					<Info project={projects[activeProject]} isVisible={isVisible}/>
				</div>
			</div>
				<Info project={projects[activeProject]} isVisible={isVisible && isInProject} isMobile={true}/>
		</div>
	)
}