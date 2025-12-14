'use client'

import {useEffect, useState} from 'react'
import {motion, AnimatePresence} from "motion/react";
import {useLenis} from 'lenis/react'

export default function ContactButton() {

	const lenis = useLenis();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			lenis?.stop()
			document.body.style.setProperty('overflow', 'hidden', 'important');
			document.documentElement.style.setProperty('overflow', 'hidden', 'important');
		} else {
			lenis?.start()
			document.body.style.removeProperty('overflow');
			document.documentElement.style.removeProperty('overflow');
		}
		return () => {
			document.body.style.removeProperty('overflow');
			document.documentElement.style.removeProperty('overflow');
			lenis?.start()
		}
	}, [isOpen, lenis])

	return (
		<>
			<div className="px-6 py-2 rounded-full border" onClick={() => setIsOpen(true)}>
				Get in touch
			</div>
			<AnimatePresence>
				{isOpen && (
					<>
						<motion.div className="fixed inset-0 bg-zinc-950/90 backdrop-blur-sm z-50"
						            initial={{opacity: 0}}
						            animate={{opacity: 1}}
						            exit={{opacity: 0}}
						            onClick={() => setIsOpen(false)}
						/>
						<motion.div className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-2xl mx-auto z-50"
						            initial={{opacity: 0, y: 20, scale: 0.95}}
						            animate={{opacity: 1, y: 0, scale: 1}}
						            exit={{opacity: 0, y: 20, scale: 0.95}}
						            transition={{type: 'spring', stiffness: 300, damping: 25}}
						>
							<div className="bg-zinc-900 rounded-sm border border-zinc-800 overflow-hidden">
								<div className="flex items-center justify-between p-4 sm:p-5 border-b border-zinc-800">
									<h3 className="text-base sm:text-lg font-bold text-white select-none pointer-events-none">Contact me</h3>
									<motion.button whileTap={{scale: 0.9}} onClick={() => setIsOpen(false)} className="p-2 text-zinc-500 hover:text-white transition-colors duration-400 cursor-pointer">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
									</motion.button>
								</div>

								<div className="p-4 sm:p-5 max-h-[60vh] overflow-y-auto overscroll-contain">
									<div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-4">
										<div className="w-full h-40 rounded-lg border-2 border-zinc-800 flex flex-col items-start justify-start p-5">
											<div className="bg-zinc-800 border border-zinc-700 rounded-full size-15 flex items-center justify-center text-zinc-300" >
												<svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"></path></svg>
											</div>
											<p className="text-white mt-2">Contact me via email</p>
											<p className="text-zinc-400 text-sm">test@test.com</p>
										</div>

										<div className="w-full h-40 rounded-lg border-2 border-zinc-800 flex flex-col items-start justify-start p-5">
											<div className="bg-zinc-800 border border-zinc-700 rounded-full size-15 flex items-center justify-center text-zinc-300" >
												<svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M15.003 4c.259 0 .584.068.845.132c.91.22 1.989.493 2.755 1.068c.713.535 1.267 1.468 1.695 2.416c.89 1.975 1.509 4.608 1.723 6.61c.102.95.127 1.906-.056 2.549c-.09.316-.285.554-.422.7c-.418.443-.956.774-1.488 1.075l-.264.149a25 25 0 0 1-.525.284l-.522.27l-.717.357l-.577.284a1 1 0 0 1-1.166-1.59l-.434-.868A13 13 0 0 1 12 18c-1.37 0-2.677-.2-3.85-.564l-.433.866a1 1 0 0 1-1.164 1.592l-.544-.27c-.604-.298-1.208-.596-1.796-.925c-.614-.343-1.265-.708-1.752-1.225a1.74 1.74 0 0 1-.422-.7c-.184-.642-.158-1.597-.057-2.548c.214-2.002.833-4.635 1.724-6.61c.427-.948.981-1.881 1.694-2.416c.766-.575 1.845-.848 2.755-1.068C8.416 4.068 8.74 4 9 4a1 1 0 0 1 .99 1.147A14 14 0 0 1 12 5c.691 0 1.366.05 2.014.148A1 1 0 0 1 15.004 4Zm1.354 2.363c-.15-.048-.186-.027-.24.063l-.062.112a1.515 1.515 0 0 1-1.635.716A11.4 11.4 0 0 0 12 7c-.852 0-1.667.09-2.42.254a1.515 1.515 0 0 1-1.635-.716l-.062-.111c-.053-.09-.089-.111-.238-.064c-.356.113-.738.234-1.045.437c-.287.215-.67.75-1.071 1.639c-.766 1.697-1.366 4.204-1.558 6q-.06.57-.066.972v.294q.007.267.035.422c.254.248.568.443.883.622l.682.377l.446.235l.364-.728a1 1 0 0 1 1.133-1.624C8.664 15.62 10.246 16 12 16s3.336-.382 4.552-.99a1 1 0 0 1 1.213 1.538l-.08.085l.364.73q.447-.233.897-.483c.39-.216.8-.443 1.117-.753q.027-.155.035-.422v-.294a11 11 0 0 0-.066-.973c-.192-1.795-.792-4.302-1.558-6c-.4-.888-.784-1.423-1.07-1.638c-.308-.203-.69-.324-1.047-.437M8.75 10.5a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5m6.5 0a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5"></path></g></svg>
											</div>
											<p className="text-white mt-2">Add me on Discord</p>
											<p className="text-zinc-400 text-sm">@snappify</p>
										</div>

										<div className="w-full h-40 rounded-lg border-2 border-zinc-800 flex flex-col items-start justify-start p-5">
											<div className="bg-zinc-800 border border-zinc-700 rounded-full size-15 flex items-center justify-center text-zinc-300" >
												<svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"></path><path d="M9 20.027c-3 .973-5.5 0-7-3"></path></g></svg>											</div>
											<p className="text-white mt-2">Check out my GitHub</p>
											<p className="text-zinc-400 text-sm">@snappify</p>
										</div>

										<div className="w-full h-40 rounded-lg border-2 border-zinc-800 flex flex-col items-start justify-start p-5">
											<div className="bg-zinc-800 border border-zinc-700 rounded-full size-15 flex items-center justify-center text-zinc-300" >
												<svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.464 16.828C2 15.657 2 14.771 2 11s0-5.657 1.464-6.828C4.93 3 7.286 3 12 3s7.071 0 8.535 1.172S22 7.229 22 11s0 4.657-1.465 5.828C19.072 18 16.714 18 12 18c-2.51 0-3.8 1.738-6 3v-3.212c-1.094-.163-1.899-.45-2.536-.96"></path></svg>
											</div>
											<p className="text-white mt-2">Send a message</p>
											<p className="text-zinc-400 text-sm">message me here</p>
										</div>
									</div>
								</div>
							</div>

						</motion.div>

					</>
				)}
			</AnimatePresence>
		</>
	)
}