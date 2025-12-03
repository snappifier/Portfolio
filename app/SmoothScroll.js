'use client'
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect } from 'react'

function Keys() {
	const lenis = useLenis()

	useEffect(() => {
		if (!lenis) return

		const handleKeyDown = (e) => {
			const activeElement = document.activeElement
			if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable)) {
				return
			}

			const step = 200;

			if (e.key === 'ArrowDown' || e.key === ' ') {
				e.preventDefault();
				lenis.scrollTo(lenis.scroll + step)
			} else if (e.key === 'ArrowUp') {
				e.preventDefault();
				lenis.scrollTo(lenis.scroll - step);
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	},[lenis])
}

export default function SmoothScroll({ children }) {
	return (
		<ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
			<Keys />
			{children}
		</ReactLenis>
	)
}