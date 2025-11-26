'use client'

import {motion} from "motion/react"

export default function Main() {

	return (<>
			<div className="w-full h-dvh flex items-center justify-center bg-zinc-950">
				<motion.div className="w-full h-full flex flex-col items-center justify-center"
				            initial={{opacity: 0.1}}
				            animate={{opacity: 1}}
				            transition={{duration: 2, ease: "easeOut"}}
				>
					<div></div>
					<motion.div className="w-full h-full flex items-center justify-center"
											animate={{opacity: [1, 0.8, 1]}}
					            transition={{duration: 8, ease: "easeInOut", repeat: Infinity, delay: 2}}
					>
						<div className="h-full w-1/2 bg-[conic-gradient(from_90deg,_#F8F8F8_0%,_#000_0%,#09090b_10%,_#0ea5e9_96%,_#75d4ff_100%)]  "></div>
						<div className="h-full w-1/2 bg-[conic-gradient(from_90deg,_#F8F8F8_0%,_#000_0%,#09090b_10%,_#0ea5e9_96%,_#75d4ff_100%)] scale-x-[-1] "></div>
						<div className="absolute w-full h-screen bg-linear-to-b from-zinc-950 from-0% via-transparent via-50% to-zinc-950 to-100% z-200 top-0 backdrop-saturate-150"/>
					</motion.div>
				</motion.div>
			</div>
		</>
	)
}