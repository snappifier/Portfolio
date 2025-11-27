import Glow from "@/app/main/Glow";
import Title from "@/app/main/Title";

export default function Main({startAnimation}) {

	return (<>
			<div className="w-full h-svh flex items-center justify-center bg-zinc-950">
				<Title startAnimation={startAnimation}/>
				<Glow startAnimation={startAnimation}/>
			</div>
		</>
	)
}