'use client'

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Form() {
	const [formData, setFormData] = useState({ email: '', message: '' });
	const [status, setStatus] = useState('idle');
	const [errorMessage, setErrorMessage] = useState('');
	const [isPressed, setIsPressed] = useState(false)

	useEffect(() => {
		setIsPressed(false)
	}, [status])

	const isValidEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setIsPressed(false)
		setStatus('loading');
		setErrorMessage('');

		if (!formData.email || !formData.message) {
			setStatus('error');
			setErrorMessage('Please fill in all fields.');
			return;
		}


		if (!isValidEmail(formData.email)) {
			setStatus('error');
			setErrorMessage('Please enter a valid email address.');
			return;
		}

		try {
			const res = await fetch('/api/send', {
				method: 'POST',
				body: JSON.stringify(formData),
				headers: { 'Content-Type': 'application/json' },
			});

			const data = await res.json();

			if (res.ok) {
				setStatus('success');
				setFormData({ email: '', message: '' });
				setTimeout(() => setStatus('idle'), 4000);
			} else {
				setStatus('error');

				const errorText = typeof data.error === 'string'
					? data.error
					: data.error?.message || 'Server error. Please try again later.';

				setErrorMessage(errorText);
			}
		} catch (error) {
			setStatus('error');
			setErrorMessage('Connection error. Please check your internet.');
		}
	};

	const isEmailError = status === 'error' && typeof errorMessage === 'string' && errorMessage.toLowerCase().includes('email');

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full h-full">
			<div>
				<label htmlFor="email" className="block text-xs text-zinc-400 mb-1.5 ml-1">Email</label>
				<input className={`w-full bg-zinc-900 border rounded-lg p-3 text-sm text-white focus:outline-none focus:ring-1 transition-all placeholder:text-zinc-600 ${isEmailError ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' : 'border-zinc-700 focus:border-zinc-500 focus:ring-zinc-500'}`}
				       id="email"
				       type="email"
				       required
				       value={formData.email}
				       onChange={(e) => {setFormData({ ...formData, email: e.target.value }); if(status === 'error') setStatus('idle');}}
				       placeholder="your@email.com"
				/>
			</div>

			<div className="flex-1 min-h-0 flex flex-col">
				<label htmlFor="message" className="block text-xs text-zinc-400 mb-1.5 ml-1">Message</label>
				<textarea className="w-full flex-1 bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-600 resize-none min-h-[120px]"
						  id="message"
						  required
						  value={formData.message}
						  onChange={(e) => {setFormData({ ...formData, message: e.target.value }); if(status === 'error') setStatus('idle');}}
						  placeholder="Hi, I would like to talk about..."
				/>
			</div>

			<div className="flex flex-col gap-2">
				<motion.button className={`group w-full p-3 rounded-lg text-sm font-medium transition-colors duration-300 relative overflow-hidden cursor-pointer
						       ${status === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : ''}
						       ${status === 'error' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : ''}
						       ${status === 'idle' || status === 'loading' ? 'bg-zinc-100 text-zinc-950 hover:bg-white' : ''}
						       `}
							   key={status}
				               whileTap={{ scale: 0.95 }}
							   animate={isPressed ? { scale: 0.95 } : { scale: 1 }}
				               transition={{duration: 0.1}}
				               type="submit"
				               disabled={status === 'loading' || status === 'success'}
							   onKeyDown={(e) => {
								   if (e.key === 'Enter' || e.key === ' ') {
									   setIsPressed(true)
									   setTimeout(() => setIsPressed(false), 150)
								   }
							   }}

				>
            <span className="relative z-10 flex items-center justify-center gap-2">
                {status === 'idle' && (
	                <>
		                Send Message
		                <svg className="w-4 h-4 group-hover:translate-x-1 group-focus-visible:translate-x-1 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none"><path d="M2 3.5L21.5 12L2 20.5L5 12z"></path><path stroke="currentColor" strokeLinecap="square" strokeWidth={2} d="m5 12l-3 8.5L21.5 12L2 3.5zm0 0h5"></path></g></svg>
	                </>
                )}
	            {status === 'loading' && 'Sending...'}
	            {status === 'success' && 'Message Sent!'}
	            {status === 'error' && 'Error. Try again.'}
            </span>
				</motion.button>

				{status === 'error' && (
					<motion.p className="text-xs text-red-400 text-center"
							  initial={{ opacity: 0, y: -10 }}
							  animate={{ opacity: 1, y: 0 }}

					>
						{typeof errorMessage === 'string' ? errorMessage : "An unexpected error occurred."}
					</motion.p>
				)}
			</div>
		</form>
	);
}