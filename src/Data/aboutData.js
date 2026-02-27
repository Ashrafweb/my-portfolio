import profileImg from "../../public/pro_img.jpg";

export const socialLinks = [
	{
		id: 1,
		key: "facebook",
		href: "https://www.facebook.com/ashraf.uddin.75839",
	},
	{ id: 2, key: "github", href: "https://github.com/Ashrafweb" },
	{
		id: 3,
		key: "linkedin",
		href: "https://www.linkedin.com/in/mdashraf-uddin",
	},
	{ id: 4, key: "fiverr", href: "https://www.fiverr.com/s/R7x80BV" },
];

export const technicalSkills = [
	{
		tag: "01",
		label: "Backend",
		items:
			"Node.js · Express · PostgreSQL · Prisma · Redis · BullMQ · REST · Flask",
	},
	{
		tag: "02",
		label: "Frontend",
		items: "React · Next.js · Astro · TanStack Query · Redux · Tailwind · MUI",
	},
	{
		tag: "03",
		label: "Cloud & DevOps",
		items: "AWS · GCP · PM2 · GitHub Actions · Jenkins",
	},
	{ tag: "04", label: "Monitoring & Analytics", items: "Sentry · Metabase" },
	{ tag: "05", label: "Testing", items: "Jest · Supertest" },
];

export const data = {
	name: "Md. Ashraf Uddin",
	title: "Software Engineer (Full-Stack)",
	country: "Chattogram, Bangladesh",
	bio: "Full-stack Software Engineer building production systems for a working capital financing platform. Experienced in backend architecture, asynchronous job processing, RBAC implementation, document workflows, cloud deployment, monitoring, and end-to-end feature delivery.",
	email: "ashrafuddin.code@gmail.com",
	github: "https://github.com/Ashrafweb",
	linkedin: "https://www.linkedin.com/in/mdashraf-uddin",
	socials: socialLinks,
	technicalSkills,
	img: profileImg,
};
