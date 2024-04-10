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
            <div className="font-LeagueSpartan text-[40px]">Lorem Ipsum</div>
            <div className="font-Quicksand">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        </div>
    </div>
}