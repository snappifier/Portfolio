import StackTitle from "@/app/stack/StackTitle";
import { StackData } from "@/app/data"
import AnimateStagger from "@/app/Projects/AnimateStagger";
import TechnologiesStagger from "@/app/stack/TechnologiesStagger";

export default function Stack() {

	return (
		<div className="relative flex flex-col items-center justify-center w-full h-max py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
			<StackTitle />
			<TechnologiesStagger tags={StackData} />

		</div>
	)
}