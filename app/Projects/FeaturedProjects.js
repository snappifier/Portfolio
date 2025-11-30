import ProjectsTitle from "./ProjectsTitle";
import Cards from "./Cards";
import Info from "./Info";

export default function FeaturedProjects() {
	return (
		<div className="w-full h-max flex flex-col items-center justify-start">
			<ProjectsTitle/>
			<Cards/>
			<Info/>
		</div>
	)
}