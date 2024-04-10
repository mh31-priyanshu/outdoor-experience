//Libraries
import { Parallax } from 'react-scroll-parallax';
import React from "react";

//Components
import Navbar from "../Components/Navbar";
import UpcomingTreks from "../Components/UpcomingTreks"
import CloudCard from '../Components/CloudCard';
import Wildlife from '../Components/Wildlife';
import Footer from '../Components/Footer';

const Home = () => {
    return <div className="relative select-none scroll-smooth">
        <Navbar className=""></Navbar>
        <div className="absolute w-full inset-0 -z-10 h-max">
            <div className="relative">
                <div className="h-full">
                    <img className="w-full h-1/6" draggable="false" src={require('../assets/images/amazing-view-glen-coe-kinlochleven-uk-cloudy-sky.jpg')} alt="" />
                </div>
                <div className="absolute inset-x-0 z-10 bottom-0 h-3/5 bg-gradient-to-b from-transparent to-black ">
                    <div className="flex justify-end text-gray-300">
                        <div className="flex flex-col items-end">
                            <Parallax
                                speed={5}
                                opacity={[5,0]}
                                easing="ease"
                            >
                                <div className="font-LeagueSpartan font-bold text-[200px] text-shad  tracking-widest">
                                    TRAVEL
                                </div>
                            </Parallax>
                            
                            <div className="text-[20px] italic mr-8 -mt-24 flex opacity-90">
                                / [tra-uh l] /
                                <div className="ml-4 font-bold ">
                                    [noun]
                                </div>
                            </div>
                            <div className="text-[30px] mr-8 -mt-2 opacity-90">
                                the only thing you buy that makes you richer.
                            </div> 
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="w-full bg-black h-[700px]">
                <UpcomingTreks></UpcomingTreks>
            </div>
            <div className='w-full relative -z-10'>
                <img src={require('../assets/images/forest-top.jpg')} alt="" />
                <div className='absolute inset-x-0  top-0 w-full h-3/4 bg-gradient-to-b from-black to-transparent z-10'></div>
                <div className='absolute inset-x-0 bottom-0 w-full h-3/4 bg-gradient-to-t from-black to-transparent z-10'></div>
                <div className='absolute inset-0 z-20'>
                    <CloudCard></CloudCard>

                </div>
            </div>
            <Wildlife></Wildlife>
            <div className='h-[20px] w-full bg-black text-white'></div>
            <Footer></Footer>
            
        </div>
        
    </div>
}

export default Home;