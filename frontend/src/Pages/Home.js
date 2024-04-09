import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
    return <div className="relative select-none scroll-smooth">
        <Navbar className=""></Navbar>
        <div className="absolute w-full inset-0 -z-10 h-max">
            <div className="relative">
                <div className="h-full">
                    <img className="w-full h-1/6" draggable="false" src={require('../assets/images/amazing-view-glen-coe-kinlochleven-uk-cloudy-sky.jpg')} alt="" />
                </div>
                <div className="absolute inset-x-0 z-10 bottom-0 h-3/5 bg-gradient-to-b from-transparent to-black ">
                    <div className="flex justify-end mr-10 text-gray-300">
                        <div className="flex flex-col items-end">
                            <div className="font-LeagueSpartan font-bold text-[200px] text-shad  tracking-widest">
                                TRAVEL
                            </div>
                            <div className="text-[20px] italic mr-8 -mt-24 flex">
                                / [tra-uh l] /
                                <div className="ml-4 font-bold ">
                                    [noun]
                                </div>
                            </div>
                            <div className="text-[30px] mr-8 -mt-2">
                                the only thing you buy that makes you richer.
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="w-full bg-black h-[1000px]">

            </div>
        </div>
        
    </div>
}

export default Home;