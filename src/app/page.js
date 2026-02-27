import HeroSection from "../sections/heroSection";
import AboutPageContent from "../sections/aboutSection";
import MyProjects from "../sections/myProjects";
import ExperienceSection from "../sections/experienceSection";

export const metadata = {
	title: "Home — Ashraf Uddin",
	description:
		"Portfolio of Ashraf Uddin — MERN stack developer. Showcasing projects, services and contact details.",
};

export default function Page() {
	return (
		<>
			<HeroSection />
			<AboutPageContent />
			<MyProjects />
			<ExperienceSection />
		</>
	);
}
