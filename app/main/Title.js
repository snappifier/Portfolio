import Button from "@/app/main/Button";

export default function Title({startAnimation}) {

	return (
		<div className="absolute w-full h-full flex items-center justify-center text-cyan-50 z-200">
			<div className="w-max h-max flex flex-col items-center justify-center mb-30">
				<h2 className="text-small text-blue-200/70 tracking-[0.4em] font-medium mb-6">FRONTEND DEVELOPER</h2>
				<h1 className="text-8xl font-bold mb-2 tracking-tight drop-shadow-2xl">KRYSTIAN MATWIEJ</h1>
				<p className="mb-10 max-w-2xl text-xl text-slate-300 mx-auto leading-loose text-center">
					I build immersive web experiences that feel alive by combining the
					<span className="text-white font-medium"> speed of Next.js </span>
					with the
					<span className="text-white font-medium"> fluidity of Motion</span>.</p>
				<div className="flex items-center justify-center gap-4  rounded-full">
					<Button/>
					<button className=" px-8 py-3 m-3 rounded-full border text-sm font-medium tracking-wide backdrop-blur-sm">View my work</button>
				</div>
			</div>
		</div>
	)
}