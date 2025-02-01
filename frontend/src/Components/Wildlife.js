import React from "react";
import { Parallax } from "react-scroll-parallax";

export default function Wildlife(){
    return <div className='w-full relative overflow-hidden'>
        <Parallax
            scale={[1,1.5]}
        >
            <img src={require('../assets/images/dark-green.jpg')} alt="" />
        </Parallax>
        <div className='absolute inset-x-0  top-0 w-full h-3/4 bg-gradient-to-b from-black to-transparent z-10'></div>
        <div className='absolute inset-x-0 bottom-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent z-50'></div>
        <div className='absolute bottom-0 right-0 z-40 w-[650px] grayscale '>
            <img src={require('../assets/images/jaguar.png')} />
        </div>
        <div className=" absolute z-20 left-28 top-36" >
            <Parallax speed={-50}>
                <div className="text-yellow-400">
                    <div className="font-Quicksand text-[20px]">The</div>
                    <div className="font-LeagueSpartan text-[200px] font-bold -mt-16">WILDLIFE</div>
                </div>
                <div className="text-white ml-4 w-[600px] -mt-16">
                    In Maharashtra's Western Ghats, verdant wonders unfold, where each trek unveils a tapestry of life, from misty peaks to lush valleys below, a symphony of biodiversity beckons explorers to immerse in nature's grandeur.
                </div>
            </Parallax>
            
        </div>
        
    </div>
}