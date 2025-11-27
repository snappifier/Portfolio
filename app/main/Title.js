import Button from "@/app/main/Button";

export default function Title({startAnimation}) {

	return (
		<div className="absolute w-full h-full flex items-center justify-center text-cyan-50 z-200">
			<div className="w-max h-max flex flex-col items-center justify-center mb-30">
				<h2 className="text-small text-blue-200/70 tracking-[0.4em] font-medium mb-6">FRONTEND DEVELOPER</h2>
				<h1 className="text-8xl font-bold mb-2 tracking-tight drop-shadow-2xl">KRYSTIAN MATWIEJ</h1>
				<p className=" max-w-2xl text-xl text-slate-300 mx-auto leading-loose text-center">
					I build immersive web experiences that feel alive by combining the
					<span className="text-white font-medium"> speed of Next.js </span>
					with the
					<span className="text-white font-medium"> fluidity of Motion</span>.</p>
				<div className="flex items-center justify-center gap-4  rounded-full">
					<Button text="View my work" bgColor="bg-[#1a1a1a]" glowColor="from-cyan-200 to-blue-300" underGlowColor="bg-[#1a1a1a]/40" textColor="text-white"/>
				</div>
			</div>
		</div>
	)
}