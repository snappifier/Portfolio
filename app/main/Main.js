import Glow from "@/app/main/Glow";
import Title from "@/app/main/Title";

export default function Main({startAnimation}) {

	return (<>
			<div className="w-full h-svh min-h-[500px] sm:min-h-[600px] flex items-center justify-center bg-zinc-950 overflow-hidden">
				<Title startAnimation={startAnimation}/>
				<Glow startAnimation={startAnimation}/>
			</div>
		</>
	)
}