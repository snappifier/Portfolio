'use client'

export default function Main() {

	return (<>
		<div className="w-full h-screen flex items-center justify-center bg-zinc-950">

			{/*<div className="h-full w-1/2 bg-conic-90 from-[#F8F8F8] from-0% via-zinc-950 via-0% to-sky-500 to-99% "></div>*/}
			<div className="h-full w-1/2 bg-[conic-gradient(from_90deg,_#F8F8F8_0%,_#000_0%,_#0ea5e9_96%,_#75d4ff_100%)]  "></div>
			<div className="h-full w-1/2 bg-[conic-gradient(from_90deg,_#F8F8F8_0%,_#000_0%,_#0ea5e9_96%,_#75d4ff_100%)] scale-x-[-1] "></div>
			{/*<div className="h-full w-1/2 bg-conic-90 from-[#F8F8F8] from-0% via-black via-0% to-[#AAAAAA] to-30% scale-x-[-1] mix-blend-color-dodge"/>*/}
			<div className="absolute w-full h-screen bg-linear-to-b from-[#08081B] from-0% via-transparent via-50% to-[#08081B] to-100% z-200 top-0 backdrop-saturate-150"/>

		</div>
		</>
	)
}