'use client'

import {useState} from "react";
import Loader from "@/app/loader/Loader";
import Main from "@/app/main/Main";

export default function AnimationWrapper() {
	const [mainStarted, setMainStarted] = useState(false)

	return (<>
	<Loader onLoadingComplete={() => setMainStarted(true)}/>
		<Main startAnimation={mainStarted}/>
	</>)
}