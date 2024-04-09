import React from "react";

export default function Navbar(){
    return <div className="px-10 pt-8 ">
        <div className="flex flex-row justify-between items-end">
            <div className="flex flex-row pt-2 w-2/6 justify-between font-Quicksand font-medium mb-4 text-lg">
                <div className="w-10 cursor-pointer">ABOUT</div>
                <div className="w-10 cursor-pointer">GALLERY</div>
                <div className="w-10 cursor-pointer">CONTACT</div>
            </div>
            <div className="w-48">
                <img src={require('../assets/images/logo-red-dot.png')} draggable="false" alt="img" />
            </div>
        </div>
        <div className="bg-slate-900 h-[2px] opacity-25"></div>
    </div>
}

