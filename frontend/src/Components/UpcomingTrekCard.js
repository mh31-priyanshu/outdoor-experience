import React from "react";

export default function UpcomingTrekCard({title, img, city}){
    return <div>
        <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-xl px-14 pb-8 pt-80 max-w-sm mx-auto font-LeagueSpartan">
            <img src={require("../assets/treks/RajGad.jpg")}  class="absolute inset-0 h-full w-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-gray-900/40 to-transparent"></div>
            <h3 class="z-10 mt-3 text-3xl font-bold text-white">{title}</h3>
            <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{city}</div>
        </article>

    </div>
}