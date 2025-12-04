import StackTitle from "@/app/stack/StackTitle";
import { StackData } from "@/app/data"
import AnimateStagger from "@/app/Projects/AnimateStagger";
import TechnologiesStagger from "@/app/stack/TechnologiesStagger";

export default function Stack() {

	return (
		<div className="flex flex-col items-center justify-center w-full h-max px-4 sm:px-6 lg:px-8">
			<StackTitle />
			<TechnologiesStagger tags={StackData} />
		</div>
	)
}