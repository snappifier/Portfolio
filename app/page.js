import ScrollAnimation from "@/app/scrollAnimation/ScrollAnimation";
import AnimationWrapper from "@/app/animationwrapper/AnimationWrapper";
import Button from "@/app/main/Button";

export default function Home() {

  return (<>
		  <ScrollAnimation />
		  <AnimationWrapper />
      <div className="w-full h-2000 flex flex-col justify-around items-center bg-zinc-950">
	      <Button text="About me" bgColor="bg-[#1a1a1a]" glowColor="from-cyan-200 to-blue-300" underGlowColor="bg-[#1a1a1a]/40" textColor="text-white"/>
	    <div className="w-1/2 h-100 bg-red-500"></div>
	    <div className="w-1/2 h-100 bg-green-500"></div>
	    <div className="w-1/2 h-100 bg-zinc-800"></div>
	    <div className="w-1/2 h-100 bg-blue-500"></div>
	    <div className="w-1/2 h-100 bg-red-500"></div>
	    <div className="w-1/2 h-100 bg-green-500"></div>
	    <div className="w-1/2 h-100 bg-zinc-800"></div>
	    <div className="w-1/2 h-100 bg-blue-500"></div>
	    <div className="w-1/2 h-100 bg-red-500"></div>
	    <div className="w-1/2 h-100 bg-green-500"></div>
	    <div className="w-1/2 h-100 bg-zinc-800"></div>
	    <div className="w-1/2 h-100 bg-blue-500"></div>



    </div>
	  </>
  );
}
