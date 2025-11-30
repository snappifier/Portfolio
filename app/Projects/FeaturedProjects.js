'use client'

export default function FeaturedProjects() {
	return (
		// 1. TWORZYMY MIEJSCE DO SCROLLOWANIA (300vh)
		<div className="w-full h-[300vh] bg-zinc-900 pt-20 px-10">

			<div className="flex gap-20 items-start">

				{/* ELEMENT LEWY (STICKY) */}
				{/* h-40 to wysokość klocka. sticky top-10 przykleja go. */}
				<div className="w-40 h-40 bg-red-500 sticky top-10 flex items-center justify-center font-bold text-black">
					JESTEM STICKY
				</div>

				{/* ELEMENT PRAWY (DŁUGI) */}
				{/* To jest tor, po którym sticky się porusza. Musi być długi. */}
				<div className="w-40 h-[200vh] bg-blue-500 flex items-center justify-center font-bold text-black">
					DŁUGA TREŚĆ
				</div>

			</div>

		</div>
	)
}