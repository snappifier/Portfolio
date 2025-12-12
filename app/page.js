import ScrollAnimation from "@/app/scrollAnimation/ScrollAnimation";
import AnimationWrapper from "@/app/animationwrapper/AnimationWrapper";
import FeaturedProjects from "@/app/Projects/FeaturedProjects";
import Stack from "@/app/stack/Stack";
import About from "@/app/about/About";
export default function Home() {

  return (<>

		  <ScrollAnimation />
		  <AnimationWrapper />
		  <FeaturedProjects />
		  <Stack />
		  <About />
    {/*  <div className="w-full h-800 flex flex-col justify-around items-center bg-zinc-950">*/}
	  {/*  <div className="w-1/2 h-100 bg-red-500"></div>*/}
	  {/*  <div className="w-1/2 h-100 bg-green-500"></div>*/}
	  {/*  <div className="w-1/2 h-100 bg-zinc-800"></div>*/}

    {/*</div>*/}
	  </>
  );
}
