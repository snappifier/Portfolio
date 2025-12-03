import ScrollAnimation from "@/app/scrollAnimation/ScrollAnimation";
import AnimationWrapper from "@/app/animationwrapper/AnimationWrapper";
import FeaturedProjects from "@/app/Projects/FeaturedProjects";
import TickerComponent from "@/app/ticker/TickerComponent";
export default function Home() {

  return (<>

		  <ScrollAnimation />
		  <AnimationWrapper />
		  <FeaturedProjects />
      <div className="w-full h-800 flex flex-col justify-around items-center bg-zinc-950">
	    <div className="w-1/2 h-100 bg-red-500"></div>
	    <div className="w-1/2 h-100 bg-green-500"></div>
	    <div className="w-1/2 h-100 bg-zinc-800"></div>

    </div>
	  </>
  );
}
