'use client'

import {useEffect, useState, useRef} from 'react'
import {createPortal} from 'react-dom'
import {motion, AnimatePresence} from "motion/react"
import {useLenis} from 'lenis/react'
import Form from './Form'
import Card from './Card'
import Social from './Social'

export default function ContactButton() {

	const lenis = useLenis()
	const [isOpen, setIsOpen] = useState(false)
	const [copied, setCopied] = useState(null)
	const [showForm, setShowForm] = useState(false)
	const [mounted, setMounted] = useState(false)
	const [activeSocial, setActiveSocial] = useState(null)
	const [pressedKey, setPressedKey] = useState(null)

	const copyTimeoutRef = useRef(null)
	const socialTimeoutRef = useRef(null)
	const modalRef = useRef(null)
	const previousActiveElement = useRef(null)

	useEffect(() => {
		setMounted(true)
		return () => setMounted(false)
	}, [])

	const handleClose = () => {
		setIsOpen(false)
		setTimeout(() => setShowForm(false), 300)
	}

	useEffect(() => {
		if (!isOpen) return

		previousActiveElement.current = document.activeElement

		const setupFocusTrap = () => {
			if (!modalRef.current) return

			const handleKeyDown = (e) => {
				if (e.key === 'Escape') {
					handleClose()
					return
				}

				if (e.key !== 'Tab') return

				const focusableElements = modalRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')

				if (!focusableElements || focusableElements.length === 0) return

				const firstElement = focusableElements[0]
				const lastElement = focusableElements[focusableElements.length - 1]
				const isInsideModal = modalRef.current?.contains(document.activeElement)

				if (!isInsideModal) {

					e.preventDefault()
					if (e.shiftKey) {
						lastElement?.focus()
					} else {
						firstElement?.focus()
					}
					return
				}

				if (e.shiftKey) {
					if (document.activeElement === firstElement) {
						e.preventDefault()
						lastElement?.focus()
					}
				} else {
					if (document.activeElement === lastElement) {
						e.preventDefault()
						firstElement?.focus()
					}
				}
			}

			document.addEventListener('keydown', handleKeyDown)

			return () => {
				document.removeEventListener('keydown', handleKeyDown)
			}
		}

		const cleanup = setupFocusTrap()

		return () => {
			cleanup?.()
			previousActiveElement.current?.focus()
		}
	}, [isOpen, showForm])

	useEffect(() => {
		if (isOpen) {
			lenis?.stop()
			document.body.style.setProperty('overflow', 'hidden', 'important')
			document.documentElement.style.setProperty('overflow', 'hidden', 'important')
		} else {
			lenis?.start()
			document.body.style.removeProperty('overflow')
			document.documentElement.style.removeProperty('overflow')
		}
		return () => {
			document.body.style.removeProperty('overflow')
			document.documentElement.style.removeProperty('overflow')
			lenis?.start()
		}
	}, [isOpen, lenis])

	const handleCopy = (id, text) => {
		if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current)
		navigator.clipboard.writeText(text)
		setCopied(id)
		copyTimeoutRef.current = setTimeout(() => setCopied(null), 2000)
	}

	const handleSocialClick = (e, id, link) => {
		if (link) return
		e.preventDefault()
		if (socialTimeoutRef.current) clearTimeout(socialTimeoutRef.current)
		setActiveSocial(id)
		socialTimeoutRef.current = setTimeout(() => setActiveSocial(null), 2000)
	}

	const modalContent = (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div className="fixed inset-0 bg-zinc-950/90 backdrop-blur-sm z-999"
								initial={{opacity: 0}}
								animate={{opacity: 1}}
								exit={{opacity: 0}}
								onClick={handleClose}
								aria-hidden="true"
					/>

					<div className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none z-999">

						<motion.div className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl pointer-events-auto overflow-hidden select-none"
									ref={modalRef}
									initial={{opacity: 0, y: 20, scale: 0.95}}
									animate={{opacity: 1, y: 0, scale: 1}}
									exit={{opacity: 0, y: 20, scale: 0.95}}
									transition={{type: 'spring', stiffness: 350, damping: 25}}
									layout
									role="dialog"
									aria-modal="true"
									aria-labelledby="modal-title"
						>
							<div className="p-6 sm:p-8">
								<div className="flex items-center justify-between mb-6">
									<motion.div className="flex items-center" layout>
										<AnimatePresence initial={false}>
											{showForm && (
												<motion.div className="overflow-hidden flex items-center -ml-3"
															initial={{width: 0, opacity: 0, marginRight: 0}}
															animate={{width: "auto", opacity: 1, marginRight: 12}}
															exit={{width: 0, opacity: 0, marginRight: 0}}
															transition={{duration: 0.25, ease: "easeInOut"}}
												>
													<motion.button className="text-zinc-500 hover:text-white focus:text-white transition-colors duration-300 p-1 m-1 rounded-full hover:bg-zinc-700/50"
																   onClick={() => setShowForm(false)}
																   whileTap={{scale: 0.9}}
																   transition={{duration: 0.1}}
																   aria-label="Go back"
													>
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
													</motion.button>
												</motion.div>
											)}
										</AnimatePresence>

										<AnimatePresence mode="wait" initial={false}>
											<motion.h2 className="text-xl font-bold text-white tracking-tight"
													   id="modal-title"
													   key={showForm ? 'send' : 'get'}
													   initial={{opacity: 0}}
													   animate={{opacity: 1}}
													   exit={{opacity: 0}}
													   transition={{duration: 0.25}}
													   layout="position"
											>
												{showForm ? 'Send a message' : 'Get in touch'}
											</motion.h2>
										</AnimatePresence>
									</motion.div>

									<motion.button className="text-zinc-500 hover:text-white focus:text-white transition-colors duration-300 p-1 rounded-full hover:bg-zinc-800/50"
												   onClick={handleClose}
												   whileTap={{scale: 0.9}}
												   transition={{duration: 0.1}}
												   aria-label="Close modal"
									>
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
									</motion.button>
								</div>

								<AnimatePresence mode="wait" initial={false}>
									{showForm ? (
										<motion.div className=""
													key="form"
													initial={{opacity: 0, x: -20}}
													animate={{opacity: 1, x: 0}}
													exit={{opacity: 0, x: -20}}
													transition={{duration: 0.25, ease: "easeInOut"}}
										>
											<Form />
										</motion.div>
									) : (
										<motion.div className="flex flex-col gap-3"
													key="menu"
													initial={{opacity: 0, x: 20}}
													animate={{opacity: 1, x: 0}}
													exit={{opacity: 0, x: 20}}
													transition={{duration: 0.25, ease: "easeInOut"}}
										>
											<motion.div className="relative w-full p-6 rounded-xl bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 focus-visible:bg-zinc-700 hover:border-zinc-600 focus-visible:border-zinc-600 cursor-pointer group overflow-hidden transition-colors duration-300 "
														onClick={() => setShowForm(true)}
														whileTap={{scale: 0.98}}
														animate={pressedKey === 'conversation' ? {scale: 0.98} : {scale: 1}}
														transition={{duration: 0.1}}
														tabIndex={0}
														role="button"
														onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setPressedKey('conversation') }}}
														onKeyUp={(e) => {if (e.key === 'Enter' || e.key === ' ') { setPressedKey(null); setShowForm(true) }}}
														onBlur={() => setPressedKey(null)}
											>
												<div className="hidden sm:block absolute top-4 right-4 text-zinc-500 group-hover:text-white group-focus-visible:text-white transition-all duration-500 ease-out group-hover:rotate-45 group-focus-visible:rotate-45 ">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
												</div>

												<div className="flex items-center gap-4 relative z-10">
													<div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-white group-focus-visible:text-white group-hover:scale-110 group-focus-visible:scale-110 transition-all duration-300 shrink-0 border border-zinc-800">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
													</div>
													<div>
														<h3 className="text-lg font-semibold text-white">Start a conversation</h3>
														<p className="text-zinc-400 text-sm mt-0.5 group-hover:text-zinc-300 group-focus-visible:text-zinc-300 transition-colors duration-300">I usually respond within 24 hours.</p>
													</div>
												</div>
											</motion.div>

											<div className="grid grid-cols-2 gap-3 mt-1">
												<Card title="Copy Email" subtitle="matwiejkrystian@gmail.com" isCopied={copied === 'email'} onClick={() => handleCopy('email', 'matwiejkrystian@gmail.com')} icon={<svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24"><path fill="currentColor" d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z"></path></svg>}/>
												<Card title="Copy Discord" subtitle="@snappify" isCopied={copied === 'discord'} onClick={() => handleCopy('discord', '@snappify')} icon={<svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17.59 34.173A49 49 0 0 1 14.68 38C7.3 37.79 4.5 33 4.5 33a44.8 44.8 0 0 1 4.81-19.52A16.47 16.47 0 0 1 18.69 10l1 2.31A33 33 0 0 1 24 12a33 33 0 0 1 4.33.3l1-2.31a16.47 16.47 0 0 1 9.38 3.51A44.8 44.8 0 0 1 43.5 33s-2.8 4.79-10.18 5a47 47 0 0 1-2.86-3.81m6.46-2.9c-3.84 1.945-7.555 3.89-12.92 3.89s-9.08-1.945-12.92-3.89" strokeWidth={2}></path><circle cx={17.847} cy={26.23} r={3.35} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></circle><circle cx={30.153} cy={26.23} r={3.35} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></circle></svg>}/>
											</div>

											<div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-800/50">
												<span className="text-[10px] text-zinc-600 font-medium tracking-widest uppercase">Socials</span>
												<div className="flex gap-5 items-start">
													<Social id="github" href="https://github.com/snappifier" activeSocial={activeSocial} onClick={handleSocialClick} icon={<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"></path><path d="M9 20.027c-3 .973-5.5 0-7-3"></path></g></svg>}/>
													<Social id="ig" href={null} activeSocial={activeSocial} onClick={handleSocialClick} icon={<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></path><path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"></path><path strokeLinecap="round" strokeLinejoin="round" d="m17.5 6.51l.01-.011"></path></g></svg>}/>
													<Social id="x" href={null} activeSocial={activeSocial} onClick={handleSocialClick} icon={<svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 16 16"><path fill="currentColor" d="m9.237 7.004l4.84-5.505H12.93L8.727 6.28L5.371 1.5H1.5l5.075 7.228L1.5 14.499h1.147l4.437-5.047l3.545 5.047H14.5zM7.666 8.791l-.514-.72L3.06 2.344h1.762l3.302 4.622l.514.72l4.292 6.007h-1.761z"></path></svg>} />
													<Social id="linkedin" href={null} activeSocial={activeSocial} onClick={handleSocialClick} icon={<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx={4} cy={4} r={2}></circle></g></svg>}/>
												</div>
											</div>

										</motion.div>
									)}
								</AnimatePresence>

							</div>
						</motion.div>
					</div>
				</>
			)}
		</AnimatePresence>
	);

	return (
		<>
			<motion.button
				onClick={() => setIsOpen(true)}
				whileTap={{ scale: 0.95 }}
				transition={{ duration: 0.1 }}
				className={`group relative inline-flex items-center gap-2.5 px-6 py-2 sm:px-8 sm:py-2.5 lg:px-12 lg:py-3 rounded-full transition-colors duration-400 border border-white/20 hover:border-white  `}
			>
				<span className="text-xs sm:text-sm font-medium tracking-wide text-white">
					Get in touch
				</span>
				<svg className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 512 512"><path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2"></path></svg>
			</motion.button>

			{mounted && createPortal(modalContent, document.body)}
		</>
	)
}