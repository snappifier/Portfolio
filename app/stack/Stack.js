'use client'

import StackTitle from "@/app/stack/StackTitle";
import { StackData } from "@/app/data"
import AnimateStagger from "@/app/Projects/AnimateStagger";
import TechnologiesStagger from "@/app/stack/TechnologiesStagger";
import {useState} from "react";
import StackOpen from "@/app/stack/StackOpen";

export default function Stack() {
	const [isOpened, setIsOpened] = useState(false)

	return (
		<div id="stack" className=" flex flex-col items-center justify-center w-full h-max px-4 sm:px-6 lg:px-8 pb-20 sm:pb-30">
			<StackTitle />
			<TechnologiesStagger tags={StackData} onShow={() => setIsOpened(true)} />
			<StackOpen tags={StackData} isOpen={isOpened} onClose={() => setIsOpened(false)}/>
		</div>
	)
}