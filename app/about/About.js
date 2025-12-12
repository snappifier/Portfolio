'use client'

import {motion} from "motion/react";
import Image from "next/image";
import AboutTitle from "@/app/about/AboutTitle";
import AboutContent from "@/app/about/AboutContent";
import Footer from "@/app/footer/Footer";


export default function About() {

	return (
	<div id="about" className="relative flex flex-col items-center justify-center w-full h-max px-4 sm:px-6 lg:px-8 pb-20 sm:pb-30 overflow-hidden text-white">
		<div className="absolute left-0 bottom-0 w-full h-full overflow-hidden pointer-events-none">
			<div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[200%] sm:w-[120%] h-[50vh] sm:h-[60vh] opacity-50 sm:opacity-50 blur-[60px] sm:blur-[120px] "
			     style={{background: "radial-gradient(ellipse at bottom, #3b82f6 0%, #06b6d4 30%, transparent 70%)"}}/>
			<div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[200%] sm:w-[150%] h-[20vh] sm:h-[40vh] bg-blue-900/10 sm:bg-blue-900/20 blur-[50px] sm:blur-[100px]" />
		</div>
		<div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
			<AboutTitle />
			<AboutContent />
		</div>
		<Footer />
	</div>
	)
}