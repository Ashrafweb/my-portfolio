import climaImg from "../assets/images/clima.png";
import reactAgencyImg from "../assets/images/react-agency.png";
import netflixCloneImg from "../assets/images/netflix-clone.png";
import axaroImg from "../assets/images/axaro-mern-ecom.png";
import whatsappImg from "../assets/images/whatsapp.webp";
import instantPickupImg from "../assets/images/instantpickup.png";

export const projectData = [
	{
		id: 1,
		title: "Axaro",
		alt: "axaro-mern-app",
		imgUrl: axaroImg,
		description:
			"A weather website using openweather api data and built with react , shadcn and tanstack query",
		stack: ["MERN", "Tailwindcss"],
		url: "https://axaro-mern-store.vercel.app/",
		githubUrl: "https://github.com/Ashrafweb/axaro-mern-store",
	},

	{
		id: 2,
		title: "Chat App",
		alt: "nextjs-firebase-chat",
		imgUrl: whatsappImg,
		description: "Realtime chat web application using Next.js and firebase",
		stack: ["Next.js", "Firebase"],
		url: "https://github.com/Ashrafweb/next-firebase-chat",
		githubUrl: "https://github.com/Ashrafweb/next-firebase-chat",
	},
	{
		id: 3,
		title: "Clima Weather",
		alt: "clima-weather-app",
		imgUrl: climaImg,
		description:
			"A weather website using openweather api data and built with react , shadcn and tanstack query",
		stack: ["React", "Tanstack", "Shadcn"],
		url: "https://clima-weather-ashweb.netlify.app/",
		githubUrl: "https://github.com/Ashrafweb/clima-weather-app",
	},
	{
		id: 4,
		title: "React Agency Website",
		alt: "react-agency",
		imgUrl: reactAgencyImg,
		description: "An agency website built with React and styled components",
		stack: ["React", "Styled components"],
		url: "https://ashreact-agencyv1-3434.netlify.app/",
		githubUrl: "https://github.com/Ashrafweb/react-agency-websiteV1",
	},
	{
		id: 5,
		title: "Netflix UI Clone",
		alt: "netflix-ui-clone",
		imgUrl: netflixCloneImg,
		description:
			"Netflix UI clone built using React.js , firebase and styled using styled components",
		stack: ["React", "firebase", "styled components"],
		url: "https://ashflix-clone-9462c1.netlify.app/",
		githubUrl: "https://github.com/Ashrafweb/Netflix-clone",
	},

	// {
	// 	id: 6,
	// 	title: "Instant PickUp",
	// 	alt: "instant-pickup",
	// 	imgUrl: instantPickupImg,
	// 	description:
	// 		"Eco-friendly house and office mover service web app using next.js",
	// 	stack: ["Next.js", "Styled components"],
	// 	url: "/",
	// 	githubUrl: "/",
	// },
];
