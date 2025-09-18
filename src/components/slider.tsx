"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Discover the Sacred Monasteries of Sikkim",
    image: "/monastries/dubdi_monastery.jpg",
  },
  {
    id: 2,
    title: "Preserve Cultural Heritage Through Digital Innovation",
    image: "/monastries/pemayangtse_monastery.jpg",
  },
  {
    id: 3,
    title: "Experience Buddhist Architecture & Spiritual Traditions",
    image: "/monastries/enchey_monastery.jpg",
  },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(()=>{
      const interval = setInterval(
            ()=>setCurrentSlide((prev)=>(prev===data.length-1 ? 0 : prev + 1)),
            2000);
      return ()=> clearInterval(interval);
    },[])

    return(
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
            {/* TEXT PART */}
            <div className=" flex items-center justify-center flex-col gap-8 text-teal-700 font-bold flex-1 bg-gradient-to-r from-orange-50 to-teal-50">
                <h1 className="text-4xl text-center uppercase p-4 md:text-5xl xl:text-6xl font-bold drop-shadow-sm">
                    {data[currentSlide].title}
                </h1>
                <button className="bg-orange-600 text-white py-4 px-8 hover:bg-orange-700 transition-colors font-semibold shadow-lg">
                    Explore Monasteries
                </button>
            </div>
            {/* IMAGE PART */}
            <div className="w-full flex-1 relative">
                <Image src={data[currentSlide].image} alt="" fill className='object-cover'/>
            </div>
        </div>
    )
}

export default Slider