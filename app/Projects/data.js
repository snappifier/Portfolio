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
}

export const projects = [
	{
		id: 1,
		title: "HIGH SCHOOL OF JAN ZAMOYSKI IN ZAMOŚĆ",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor quis tincidunt consequat, metus odio tincidunt sapien.",
		tags: [badges.next, badges.tailwind, badges.react, badges.strapi, badges.motion, badges.railway, badges.vercel, badges.figma, badges.vite, badges.postgres, badges.baseui,],
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
		color: "bg-gradient-to-r from-blue-500 to-cyan-500",
		buttonColor: "bg-gradient-to-r from-blue-500/60 to-cyan-500/60",
		linkLive: "#",
		linkRepo: "#"
	},
	{
		id: 2,
		title: "MY PORTFOLIO",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor quis tincidunt consequat, metus odio tincidunt sapien.",
		tags: [badges.next, badges.tailwind, badges.react,],
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
		color: "bg-gradient-to-r from-purple-500 to-pink-500",
		buttonColor: "bg-gradient-to-r from-purple-500/60 to-pink-500/60",
		linkLive: "#",
		linkRepo: "#"
	},
	{
		id: 3,
		title: "THIRD PROJECT",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor quis tincidunt consequat, metus odio tincidunt sapien.",
		tags: [badges.next, badges.tailwind, badges.react,],
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
		color: "bg-gradient-to-r from-emerald-400 to-green-600",
		buttonColor: "bg-gradient-to-r from-emerald-400/60 to-green-600/60",
		linkLive: "#",
		linkRepo: "#"
	}
];

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