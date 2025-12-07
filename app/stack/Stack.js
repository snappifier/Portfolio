'use client'

import {useState} from "react";
import {motion} from "motion/react";
import { StackData, learningData } from "@/app/data"
import StackOpen from "@/app/stack/StackOpen";
import StackTitle from "@/app/stack/StackTitle";
import AnimateStagger from "@/app/Projects/AnimateStagger";
import TechnologiesStagger from "@/app/stack/TechnologiesStagger";
import Learning from "@/app/stack/Learning";
import LearningOpen from "@/app/stack/LearningOpen";

export default function Stack() {
	const [isStackOpened, setIsStackOpened] = useState(false)
	const [selectedElement, setSelectedElement] = useState(null)
	const [isLearningOpen, setIsLearningOpen] = useState(false)

	const handleLearningClick = (element) => {
		setSelectedElement(element)
		setIsLearningOpen(true)
	}

	return (
		<div id="stack" className=" flex flex-col items-center justify-center w-full h-max px-4 sm:px-6 lg:px-8 pb-20 sm:pb-30">
			<StackTitle />
			<TechnologiesStagger tags={StackData} onShow={() => setIsStackOpened(true)} />
			<motion.div className="w-full max-w-xs sm:max-w-sm mx-auto h-1 my-16 sm:my-20 lg:my-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
			            initial={{scaleX: 0, opacity: 0}}
			            whileInView={{scaleX: 1, opacity: 1}}
			            viewport={{once: true}}
			            style={{originX: 0.5}}
			            transition={{duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
			/>
			<Learning element={learningData} onClick={handleLearningClick}/>
			<StackOpen tags={StackData} isOpen={isStackOpened} onClose={() => setIsStackOpened(false)}/>
			<LearningOpen element={selectedElement} isOpen={isLearningOpen} onClose={() => setIsLearningOpen(false)}/>
		</div>
	)
}