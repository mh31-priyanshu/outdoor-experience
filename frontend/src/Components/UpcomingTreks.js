import React from "react";
import { Parallax } from "react-scroll-parallax";
import { useNavigate } from "react-router-dom";
import UpcomingTrekCard from "./UpcomingTrekCard";
import { Link } from "react-router-dom";

export default function UpcomingTreks(){
    const navigate = useNavigate();
    return <div>
        <div className="w-1 h-20"></div>
        <Parallax
            
            opacity={[0,2]}
        >
            <div className="h-[50px] w-[200px] m-auto text-white font-Quicksand tracking-[2px] border-2 border-gray-50 bg-black"> 
                <div className="ml-4 mt-3">UPCOMING TREKS</div>
            </div>
        </Parallax>

        {/* Cards */}
        <Parallax
            speed={5}
            easing="easeInOutCirc"
            opacity={[0,5]}
        >
            <div className="flex justify-around mt-24">
                <Link to="/visapur">
                <Parallax
                    speed={10}
                >
                    <div className="group cursor-pointer transition ease-out  border-white w-[200px]  hover:shadow-[0_20px_70px_rgba(0,_126,_1,_0.8)]">
                        <article class="relative isolate flex flex-col justify-end overflow-hidden px-14 pb-8 pt-80 max-w-sm mx-auto font-LeagueSpartan">
                            <img src={require("../assets/treks/visapur.jpg")}  class="absolute inset-0 h-full w-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-duration(300)" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-gray-900/40 to-transparent"></div>
                            <h3 class="z-10 mt-3 text-3xl font-bold text-white">Visapur</h3>
                            <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">Malavli</div>
                        </article>
                    </div>
                </Parallax>
                </Link>

                <Link to="/lohagad">
                <Parallax
                    speed={-13}
                >
                    <div className="group cursor-pointer transition ease-out  border-white w-[200px]  hover:shadow-[0_20px_70px_rgba(0,_126,_1,_0.8)] ">
                        <article class="relative isolate flex flex-col justify-end overflow-hidden px-14 pb-8 pt-80 max-w-sm mx-auto font-LeagueSpartan">
                            <img src={require("../assets/treks/lohagad.jpg")}  class="absolute inset-0 h-full w-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-duration(300)" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-gray-900/40 to-transparent"></div>
                            <h3 class="z-10 mt-3 text-3xl font-bold text-white">Lohagad</h3>
                            <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">Malavli</div>
                        </article>
                    </div>
                </Parallax>
                </Link>

                <Link to="/rajgad">
                <Parallax
                    speed={15}
                >
                    <div className="group cursor-pointer transition ease-out  border-white w-[200px]  hover:shadow-[0_20px_70px_rgba(0,_126,_1,_0.8)]">
                        <article class="relative isolate flex flex-col justify-end overflow-hidden px-14 pb-8 pt-80 max-w-sm mx-auto font-LeagueSpartan">
                            <img src={require("../assets/treks/RajGad.jpg")}  class="absolute inset-0 h-full w-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-duration(300)" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-gray-900/40 to-transparent"></div>
                            <h3 class="z-10 mt-3 text-3xl font-bold text-white">Rajgad</h3>
                            <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">Pune</div>
                        </article>
                    </div>
                </Parallax>
                </Link>
                

                <Link to="/sinhagad">
                <Parallax
                    speed={-10}
                >
                    <div className="group cursor-pointer transition ease-out  border-white w-[200px]  hover:shadow-[0_20px_70px_rgba(0,_126,_1,_0.8)]" onClick={
                        
                        console.log("waf")}>
                        <article class="relative isolate flex flex-col justify-end overflow-hidden px-14 pb-8 pt-80 max-w-sm mx-auto font-LeagueSpartan">
                            <img src={require("../assets/treks/sinhagad.jpg")}  class="absolute inset-0 h-full w-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-duration(300)" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-gray-900/40 to-transparent"></div>
                            <h3 class="z-10 mt-3 text-3xl font-bold text-white">Sinhagad</h3>
                            <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">Thoptewadi</div>
                        </article>
                    </div>
                </Parallax>
                </Link>

                <Link to="/harishchandragad">
                <Parallax
                    speed={17}
                >
                    <div className="group cursor-pointer transition ease-out  border-white w-[200px]  hover:shadow-[0_20px_70px_rgba(0,_126,_1,_0.8)]">
                        <article class="relative isolate flex flex-col justify-end overflow-hidden px-14 pb-8 pt-80 max-w-sm mx-auto font-LeagueSpartan">
                            <img src={require("../assets/treks/harishchandragad.jpg")}  class="absolute inset-0 h-full w-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-duration(300)" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-gray-900/40 to-transparent"></div>
                            <h3 class="z-10 mt-3 text-3xl font-bold text-white">Harish</h3>
                            <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">Pune</div>
                        </article>
                    </div>
                </Parallax>
                </Link>

            </div>
            
        </Parallax>

    </div>
}