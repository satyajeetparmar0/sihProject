import Image from "next/image";
import React from "react";

const VisitPlanningPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-orange-600 lg:flex-row">
      {/* MONASTERIES CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* SINGLE MONASTERY */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/monastries/rumtek_monastery.jpg" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold text-gray-800">Rumtek Monastery</h1>
            <span className="text-gray-600">Gangtok, East Sikkim</span>
          </div>
          <h2 className="font-bold text-orange-600">Spiritual Center</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE MONASTERY */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/monastries/pemayangtse_monastery.jpg" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold text-gray-800">Pemayangtse Monastery</h1>
            <span className="text-gray-600">Pelling, West Sikkim</span>
          </div>
          <h2 className="font-bold text-orange-600">Historical Site</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE MONASTERY */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/monastries/tashiding_monastery.jpg" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold text-gray-800">Tashiding Monastery</h1>
            <span className="text-gray-600">Tashiding, West Sikkim</span>
          </div>
          <h2 className="font-bold text-orange-600">Sacred Site</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* VISIT SUMMARY CONTAINER */}
      <div className="h-1/2 p-4 bg-orange-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Monasteries Selected (3)</span>
          <span className="">3 Sites</span>
        </div>
        <div className="flex justify-between">
          <span className="">Virtual Tours</span>
          <span className="">2 Available</span>
        </div>
        <div className="flex justify-between">
          <span className="">Estimated Visit Time</span>
          <span className="text-green-500">6-8 Hours</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL EXPERIENCE</span>
          <span className="font-bold">Cultural Heritage Tour</span>
        </div>
        <button className="bg-orange-600 text-white p-3 rounded-md w-1/2 self-end">
          PLAN VISIT
        </button>
      </div>
    </div>
  );
};

export default VisitPlanningPage;