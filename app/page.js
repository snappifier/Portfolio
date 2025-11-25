import Image from "next/image";
import Scroll from "@/app/scrollAnimation/Scroll";
import ScrollAnimation from "@/app/scrollAnimation/scrollAnimation";

export default function Home() {
  return (<>
		<Scroll />
		  <ScrollAnimation />
    <div className="w-full h-2000 flex flex-col justify-around items-center">
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
