export const badges = {
	next: {name: "Next.js", icon: "/nextjs_logo.svg"},
	react: {name: "React", icon: "/react_logo.svg"},
	motion: {name: "Motion.dev", icon: "/motion_logo.svg"},
	tailwind: {name: "Tailwind CSS", icon: "/tailwind_logo.svg"},
	vite: {name: "Vite", icon: "/vite_logo.svg"},
	javascript: {name: "JavaScript", icon: "/js_logo.png"},
	css: {name: "CSS", icon: "/css_logo.png"},
	html: {name: "HTML", icon: "/html_logo.png"},
	lenis: {name: "Lenis", icon: "/lenis_logo.png"},

	vercel: {name: "Vercel", icon: "/vercel_logo.svg"},
	medusajs: {name: "MedusaJS", icon: "/medusajs_logo.svg"},
	railway: {name: "Railway", icon: "/railway_logo.svg"},
	strapi: {name: "Strapi", icon: "/strapi_logo.svg"},
	resend: {name: "Resend", icon: "/resend_logo.jpeg"},
	stripe: {name: "Stripe", icon: "/stripe_logo.jpeg"},

	prisma: {name: "Prisma", icon: "/prisma_logo.svg"},
	postgres: {name: "Postgresql", icon: "/postgresql_logo.png"},

	shadcn: {name: "Shadcn", icon: "/shadcn_logo.svg"},
	baseui: {name: "Base UI", icon: "/baseui_logo.svg"},

	pagespeed: {name: "Pagespeed Insights", icon: "/pagespeed_logo.svg"},
	figma: {name: "Figma", icon: "/figma_logo.svg"},
	webstorm: {name: "Webstorm", icon: "/webstorm_logo.svg"},
	github: {name: "GitHub", icon: "/github_logo.svg"},

	hyperskill: {name: "Hyperskill", icon: "/hyperskill_logo.png"},
	youtube: {name: "YouTube", icon: "/youtube_logo.svg"},
	tryhackme: {name: "TryHackMe", icon: "/tryhackme_logo.svg"},

	python: {name: "Python", icon: "/python_logo.svg"},
}
const projectImages = {
	highschool: {alt: "1 Liceum Ogólnokształcące im. Jana Zamoyskiego w Zamościu", src: "/ss_lo2.png", width: 1563, height: 4041},
	portfolio: {alt: "Portfolio", src: "/ss_portfolio.png", width: 1920, height: 2254},
	third: {alt: "Third project"}
}

export const projects = [
	{
		id: 1,
		title: "HIGH SCHOOL OF JAN ZAMOYSKI IN ZAMOŚĆ",
		description: "A modern platform built to serve the school community. It combines a fast interface for students with an intuitive CMS, allowing the staff to easily manage news, galleries, and schedules.",
		tags: [badges.next, badges.react, badges.javascript, badges.tailwind, badges.motion, badges.vercel, badges.railway, badges.strapi, badges.postgres],
		image: projectImages.highschool,
		color: "bg-gradient-to-r from-blue-500 to-cyan-500",
		navbarText: "next-lo-ten.vercel.app",
		linkLive: "https://next-lo-ten.vercel.app/",
		linkRepo: "https://github.com/snappifier/NextLo"
	},
	{
		id: 2,
		title: "MY PORTFOLIO",
		description: "An interactive personal website showcasing my skills, work and expertise",
		tags: [badges.next, badges.react, badges.javascript, badges.tailwind, badges.motion, badges.vercel, badges.lenis, badges.resend],
		image: projectImages.portfolio,
		color: "bg-gradient-to-r from-blue-600 to-cyan-600",
		navbarText: "krystianmatwiej.pl",
		linkRepo: "https://github.com/snappifier/Portfolio"
	},
	{
		id: 3,
		title: "LITEAROMA ECOMMERCE PLATFORM",
		description: "A specialized modern e-commerce platform for fragrance lovers.",
		tags: [badges.next, badges.react, badges.javascript, badges.tailwind, badges.motion, badges.vercel, badges.medusajs, badges.stripe],
		image: projectImages.third,
		color: "bg-gradient-to-r from-purple-500 to-pink-500",
		navbarText: "litearoma.com",
	}
];

export const StackData = [
	{...badges.next, description: "React framework", color: "#ffffff", darkText: true},
	{...badges.tailwind, description: "CSS framework", color: "#38bdf8", darkText: true},
	{...badges.motion, description: "Animation library", color: "#facc15", darkText: true},
	{...badges.vercel, description: "Deployment platform", color: "#ffffff", darkText: true},
	{...badges.react, description: "JavaScript library", color: "#61dafb", darkText: true},
	{...badges.figma, description: "Design platform", color: "#f24e1e"},
	{...badges.github, description: "Version control", color: "#ffffff", darkText: true},
	{...badges.webstorm, description: "IDE", color: "#00cdd7", darkText: true},
	{...badges.javascript, description: "Programming language", color: "#f7df1e", darkText: true},
	{...badges.prisma, description: "ORM", color: "#3d44b5", darkText: true},
	{...badges.postgres, description: "Database", color: "#336791"},
	{...badges.shadcn, description: "React UI library", color: "#ffffff", darkText: true},
	{...badges.baseui, description: "React UI library", color: "#ffffff", darkText: true},
	{...badges.html, description: "Markup language", color: "#e34f26"},
	{...badges.css, description: "Stylesheet language", color: "#1572b6"},
	{...badges.railway, description: "Deployment platform", color: "#ffffff", darkText: true},
	{...badges.vite, description: "Build tool", color: "#646cff"},
	{...badges.pagespeed, description: "Website performance tool", color: "#4285f4"},
	{...badges.strapi, description: "Headless CMS", color: "#4945ff"},
	{...badges.lenis, description: "Design tool", color: "#ff906e", darkText: true},
	{...badges.resend, description: "Email verification tool", color: "#ffffff", darkText: true},
	{...badges.medusajs, description: "Headless e-commerce platform", color: "#ffffff", darkText: true},
	{...badges.stripe, description: "Payment gateway", color: "#ffffff", darkText: true},
	{...badges.python, description: "Programming language", color: "#3776ab"},

]

export const learningData = [
	{
		id: "hyperskill",
		name: "HyperSkill",
		icon: badges.hyperskill.icon,
		color: "#61dafb",
		description: "JetBrains Academy",
		hasDetails: true,
		certificates: [
			{name: "Frontend Developer", date: " apr 2025"},
			{name: "Introduction to Frontend", date: "apr 2025", file: "/certificates/IntroductionToFrontend.pdf"},
			{name: "Introduction to JavaScript", date: "apr 2025", file: "/certificates/IntroductionToJS.pdf"},
			{name: "Introduction to HTML and CSS", date: "apr 2025"},

		],
		profileLink: "https://hyperskill.org/my-learning/620691045"
	},
	{
		id: "react-tutorial",
		name: "react-tutorial.app",
		icon: badges.react.icon,
		color: "#61dafb",
		description: "React course",
		hasDetails: true,
		certificates: [
			{ name: "Certificate of completion", date: "may 2025", file: "/certificates/ReactTutorial.pdf" },
		]
	},
	{
		id: "tryhackme",
		name: "TryHackMe",
		icon: badges.tryhackme.icon,
		color: "#84cc16",
		description: "Security learning",
		hasDetails: true,
		certificates: [
			{name: "Cyber Security 101", date: "in progress"},
			{name: "Pre Security", date: "oct 2025", file: "/certificates/PreSecurity.pdf"}
		],
		profileLink: "https://tryhackme.com/p/nzzhry"
	},
	{
		id: "nextjs-docs",
		name: "Next.js Docs",
		icon: badges.next.icon,
		color: "#ffffff",
		description: "Official documentation",
		hasDetails: false,
		link: "https://nextjs.org/docs"
	},
	// {
	// 	id: "react-docs",
	// 	name: "React Docs",
	// 	icon: badges.react.icon,
	// 	color: "#61dafb",
	// 	description: "Official documentation",
	// 	hasDetails: false,
	// 	link: "https://react.dev"
	// },
	{
		id: "tailwind-docs",
		name: "Tailwind CSS Docs",
		icon: badges.tailwind.icon,
		color: "#38bdf8",
		description: "Official documentation",
		hasDetails: false,
		link: "https://tailwindcss.com/docs"
	},
	{
		id: "motion-docs",
		name: "Motion.dev Docs",
		icon: badges.motion.icon,
		color: "#facc15",
		description: "Official documentation",
		hasDetails: false,
		link: "https://motion.dev/docs"
	},
	{
		id: "youtube",
		name: "YouTube",
		icon: badges.youtube.icon,
		color: "#FF0000",
		description: "A few creators I like",
		hasDetails: true,
		channels: [
			{name: "DeadOverflow", link: "https://www.youtube.com/@deadoverflow"},
			{name: "Fireship", link: "https://www.youtube.com/@Fireship"},
			{name: "The Coding Sloth", link: "https://www.youtube.com/@TheCodingSloth" },
			{name: "CyberFlow", link: "https://www.youtube.com/@cyberflow10" },
		]
	},
	{
		id: "react-native",
		name: "React Native",
		icon: badges.react.icon,
		color: "#61dafb",
		description: "Udemy react native course",
		hasDetails: true,
		certificates: [
			{name: "React Native Guide", date: "in progress"}
		]
	},
]

export const contactData = [
	{
		id: "email",
		name: "Email",
		description: 'matwiejkrystian@gmail.com',
		color: "#dc2626",
		action: "copy",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"></path></svg>
		),
	},
	{
		id: "message",
		name: "Message",
		description: "Send a message here",
		color: "#38bdf8",
		action: "form",
		link: "#",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.464 16.828C2 15.657 2 14.771 2 11s0-5.657 1.464-6.828C4.93 3 7.286 3 12 3s7.071 0 8.535 1.172S22 7.229 22 11s0 4.657-1.465 5.828C19.072 18 16.714 18 12 18c-2.51 0-3.8 1.738-6 3v-3.212c-1.094-.163-1.899-.45-2.536-.96"></path></svg>
		)
	},
	{
		id: "discord",
		name: "Discord",
		description: "@snappify",
		color: "#6366f1",
		action: "copy",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M15.003 4c.259 0 .584.068.845.132c.91.22 1.989.493 2.755 1.068c.713.535 1.267 1.468 1.695 2.416c.89 1.975 1.509 4.608 1.723 6.61c.102.95.127 1.906-.056 2.549c-.09.316-.285.554-.422.7c-.418.443-.956.774-1.488 1.075l-.264.149a25 25 0 0 1-.525.284l-.522.27l-.717.357l-.577.284a1 1 0 0 1-1.166-1.59l-.434-.868A13 13 0 0 1 12 18c-1.37 0-2.677-.2-3.85-.564l-.433.866a1 1 0 0 1-1.164 1.592l-.544-.27c-.604-.298-1.208-.596-1.796-.925c-.614-.343-1.265-.708-1.752-1.225a1.74 1.74 0 0 1-.422-.7c-.184-.642-.158-1.597-.057-2.548c.214-2.002.833-4.635 1.724-6.61c.427-.948.981-1.881 1.694-2.416c.766-.575 1.845-.848 2.755-1.068C8.416 4.068 8.74 4 9 4a1 1 0 0 1 .99 1.147A14 14 0 0 1 12 5c.691 0 1.366.05 2.014.148A1 1 0 0 1 15.004 4Zm1.354 2.363c-.15-.048-.186-.027-.24.063l-.062.112a1.515 1.515 0 0 1-1.635.716A11.4 11.4 0 0 0 12 7c-.852 0-1.667.09-2.42.254a1.515 1.515 0 0 1-1.635-.716l-.062-.111c-.053-.09-.089-.111-.238-.064c-.356.113-.738.234-1.045.437c-.287.215-.67.75-1.071 1.639c-.766 1.697-1.366 4.204-1.558 6q-.06.57-.066.972v.294q.007.267.035.422c.254.248.568.443.883.622l.682.377l.446.235l.364-.728a1 1 0 0 1 1.133-1.624C8.664 15.62 10.246 16 12 16s3.336-.382 4.552-.99a1 1 0 0 1 1.213 1.538l-.08.085l.364.73q.447-.233.897-.483c.39-.216.8-.443 1.117-.753q.027-.155.035-.422v-.294a11 11 0 0 0-.066-.973c-.192-1.795-.792-4.302-1.558-6c-.4-.888-.784-1.423-1.07-1.638c-.308-.203-.69-.324-1.047-.437M8.75 10.5a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5m6.5 0a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5"></path></g></svg>
		),
	},
	{
		id: "github",
		name: "GitHub",
		description: "@snappifier",
		color: "#ffffff",
		action: "link",
		link: "https://github.com/snappifier",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"></path><path d="M9 20.027c-3 .973-5.5 0-7-3"></path></g></svg>
		),
	},

]

export const testData = [
	{id: 1, color: "bg-red-500",},
	{id: 2, color: "bg-green-500",},
	{id: 3, color: "bg-blue-500",},
	{id: 4, color: "bg-yellow-500",},
	{id: 5, color: "bg-pink-500",},
	{id: 6, color: "bg-purple-500",},
	{id: 7, color: "bg-orange-500",},
	{id: 8, color: "bg-cyan-500",},

]