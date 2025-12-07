export const badges = {
	next: {name: "Next,js", icon: "/nextjs_logo.svg"},
	tailwind: {name: "Tailwind CSS", icon: "/tailwind_logo.svg"},
	react: {name: "React", icon: "/react_logo.svg"},
	strapi: {name: "Strapi", icon: "/strapi_logo.svg"},
	motion: {name: "Motion.dev", icon: "/motion_logo.svg"},
	railway: {name: "Railway", icon: "/railway_logo.svg"},
	vercel: {name: "Vercel", icon: "/vercel_logo.svg"},
	figma: {name: "Figma", icon: "/figma_logo.svg"},
	vite: {name: "Vite", icon: "/vite_logo.svg"},
	postgres: {name: "Postgresql", icon: "/postgresql_logo.png"},
	baseui: {name: "Base UI", icon: "/baseui_logo.svg"},
	pagespeed: {name: "Pagespeed Insights", icon: "/pagespeed_logo.svg"},
	javascript: {name: "JavaScript", icon: "/js_logo.png"},
	css: {name: "CSS", icon: "/css_logo.png"},
	html: {name: "HTML", icon: "/html_logo.png"},
	lenis: {name: "Lenis", icon: "/lenis_logo.png"},
	webstorm: {name: "Webstorm", icon: "/webstorm_logo.svg"},
	github: {name: "GitHub", icon: "/github_logo.svg"},
}
const projectImages = {
	highschool: {alt: "1 Liceum Ogólnokształcące im. Jana Zamoyskiego w Zamościu", src: "/ss_lo2.png", width: 1563, height: 4041},
	portfolio: {alt: "Portfolio"},
	third: {alt: "Third project"}
}

export const projects = [
	{
		id: 1,
		title: "HIGH SCHOOL OF JAN ZAMOYSKI IN ZAMOŚĆ",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor quis tincidunt consequat, metus odio tincidunt sapien.",
		tags: [badges.next, badges.tailwind, badges.react, badges.strapi, badges.motion, badges.railway, badges.vercel, badges.figma, badges.vite, badges.postgres, badges.baseui, badges.pagespeed, badges.javascript, badges.css, badges.html, badges.lenis],
		image: projectImages.highschool,
		color: "bg-gradient-to-r from-blue-500 to-cyan-500",
		navbarText: "1lo.com.pl",
		linkLive: "#",
		linkRepo: "#"
	},
	{
		id: 2,
		title: "MY PORTFOLIO",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor quis tincidunt consequat, metus odio tincidunt sapien.",
		tags: [badges.next, badges.tailwind, badges.react, badges.strapi, badges.motion, badges.railway, badges.vercel, badges.figma, badges.vite, badges.postgres, badges.baseui, badges.pagespeed, badges.javascript, badges.css, badges.html, badges.lenis],
		image: projectImages.portfolio,
		color: "bg-gradient-to-r from-purple-500 to-pink-500",
		navbarText: "krystianmatwiej.vercel.app",
		linkLive: "#",
		linkRepo: "#"
	},
	{
		id: 3,
		title: "THIRD PROJECT",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor quis tincidunt consequat, metus odio tincidunt sapien.",
		tags: [badges.next, badges.tailwind, badges.react, badges.strapi, badges.motion, badges.railway, badges.vercel, badges.figma, badges.vite, badges.postgres, badges.baseui, badges.pagespeed, badges.javascript, badges.css, badges.html, badges.lenis],
		image: projectImages.third,
		color: "bg-gradient-to-r from-emerald-400 to-green-600",
		navbarText: "thirdproject.com",
		linkLive: "#",
		linkRepo: "#"
	}
];

export const StackData = [
	{name: "Next.js", icon: badges.next.icon, description: "React framework", color: "#ffffff", darkText: true},
	{name: "Tailwind CSS", icon: badges.tailwind.icon, description: "CSS framework", color: "#38bdf8", darkText: true},
	{name: "Motion.dev", icon: badges.motion.icon, description: "Animation library", color: "#facc15", darkText: true},
	{name: "Vercel", icon: badges.vercel.icon, description: "Deployment platform", color: "#ffffff", darkText: true},
	{name: "React", icon: badges.react.icon, description: "JavaScript library", color: "#61dafb", darkText: true},
	{name: "Figma", icon: badges.figma.icon, description: "Design platform", color: "#f24e1e"},
	{name: "Webstorm", icon: badges.webstorm.icon, description: "IDE", color: "#00cdd7", darkText: true},
	{name: "GitHub", icon: badges.github.icon, description: "Version control", color: "#ffffff", darkText: true},
	{name: "JavaScript", icon: badges.javascript.icon, description: "Programming language", color: "#f7df1e", darkText: true},
	{name: "PostgreSQL", icon: badges.postgres.icon, description: "Database", color: "#336791"},
	{name: "Base UI", icon: badges.baseui.icon, description: "React UI library", color: "#ffffff", darkText: true},
	{name: "HTML", icon: badges.html.icon, description: "Markup language", color: "#e34f26"},
	{name: "CSS", icon: badges.css.icon, description: "Stylesheet language", color: "#1572b6"},
	{name: "Railway", icon: badges.railway.icon, description: "Deployment platform", color: "#ffffff", darkText: true},
	{name: "Vite", icon: badges.vite.icon, description: "Build tool", color: "#646cff"},
	{name: "Pagespeed Insights", icon: badges.pagespeed.icon, description: "Website performance tool", color: "#4285f4"},
	{name: "Strapi", icon: badges.strapi.icon, description: "Headless CMS", color: "#4945ff"},
	{name: "Lenis", icon: badges.lenis.icon, description: "Design tool", color: "#ff906e", darkText: true},
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