import { featuredMonasteries } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-orange-600">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredMonasteries.map((monastery) => (
          <div
            key={monastery.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-orange-50 transition-all duration-300 md:w-[400px] lg:w-[400px] xl:w-[400px] xl:h-[90vh] hover:scale-105"
          >
                         {/* IMAGE CONTAINER */}
             {monastery.image && (
               <div className="relative flex-1 w-full hover: transition-all duration-500">
                 <Image src={monastery.image} alt="" fill className="object-contain" />
               </div>
             )}
            {/* TEXT CONTAINER */}
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 px-4">
                <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl text-gray-800">{monastery.name}</h1>
                <p className="text-sm leading-relaxed max-w-[300px] text-gray-600">{monastery.description}</p>
                <span className="text-lg font-semibold text-teal-700">{monastery.location}</span>
                <div className="flex gap-2 flex-wrap justify-center">
                <button className="bg-orange-600 text-white p-2 rounded-md hover:bg-orange-700 transition-colors">
                   Learn More
                </button>
                 {monastery.virtualTourAvailable && (
                   <button className="bg-teal-700 text-white p-2 rounded-md hover:bg-teal-800 transition-colors">
                     Virtual Tour
                </button>
                 )}
               </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;