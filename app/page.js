import ScrollAnimation from "@/app/scrollAnimation/ScrollAnimation";
import Main from "@/app/main/Main";
import Loader from "@/app/loader/Loader";

export default function Home() {
  return (<>
		  <Loader/>
		  <ScrollAnimation />
		  <Main />
      <div className="w-full h-2000 flex flex-col justify-around items-center bg-zinc-950">

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
