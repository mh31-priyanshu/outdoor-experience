import React, { useState } from "react";
import { VisapurTrekInfo } from "../../Components/TrekInfo/Visapur/VisapurTrekInfo";
import { VisapurBooking } from "../../Components/TrekInfo/Visapur/VisapurBooking";

export const Visapur = () =>{

    const [showTrekInfo, setShowTrekInfo] = useState(true);
    const handleJoin = () =>{
        setShowTrekInfo(!showTrekInfo)
    }

    return <div className="select-none">
        <div className="h-screen w-full flex pt-6 pl-12 pr-3 -mt-3">
            {/* Data */}
            <div className="w-1/2">  
                <div className="w-[100px]">
                    <img src={require("../../assets/images/logo-red-dot.png")} alt="" />
                </div>
                <div className="flex mt-8">
                    <div className="w-1/12 bg-red-400 h-[2px] rounded-full mr-3"></div>
                    <div className="w-10/12 bg-zinc-950 rounded-full h-[2px]"></div>
                </div>
                {/* <div className="w-8 bg-red-600 h-[2px] rounded-full mt-8"></div> */}
                {showTrekInfo?(
                    <VisapurTrekInfo></VisapurTrekInfo>

                ):(
                    <VisapurBooking></VisapurBooking>
                )}
                {showTrekInfo?(
                    <div className="uppercase mt-14 ml-[65px] w-10/12 py-2 cursor-pointer hover:text-red-500 text-center bg-black text-white" onClick={handleJoin}>
                    Join
                </div>
                ):(<div></div>)
                }
                
            </div>
            {/* Poster */}
            <div className="w-1/2 h-full">
                <img className="object-cover h-full w-full rounded-3xl" src={require("../../assets/treks/visapur.jpg")} alt="" />
            </div>
        </div>
    </div>
}