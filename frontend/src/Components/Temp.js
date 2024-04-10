import React from "react";
import Navbar from "./Navbar";
import { Parallax } from 'react-scroll-parallax';

const Temp = () => {
    return <div>
        <Parallax 
            translateX={['100px', '300px']}
            translateY={['-20', '20']} >
            <div className="bg-black h-[100px] w-[100px]"  ></div>
        </Parallax>
        <div className="bg-black h-[10000px] w-[100px]">

        </div>
    </div>

}
export default Temp;