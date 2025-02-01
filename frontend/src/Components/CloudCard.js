import React from "react";
import { Parallax } from "react-scroll-parallax";

export default function CloudCard(){
    return <div className='mt-[300px] m-auto w-[900px] relative flex'>
        <div>
            <img className="w-[400px]" src={require('../assets/images/top-mountain-view.jpg')} alt="" />
            <Parallax   
                className="absolute inset-0 w-[550px] -left-40 -top-10 opacity-80"
                translateX={["-150px","50px"]}
            >
                <img  src={require('../assets/images/clouds1.png')} alt="" />
            </Parallax>
        </div>
        <div className="bg-white w-[500px] p-10">
            <div className="font-LeagueSpartan text-[40px]">Explore the beauty</div>
            <div className="font-Quicksand">Mountains stand as silent sentinels, their rugged peaks tracing the horizon with timeless grace, offering vistas that stir the soul and awaken a primal longing for adventure amidst nature's grandeur.</div>
        </div>
    </div>
}