

"use client";
import React, { useEffect, useState } from "react";

type Props = {
    monasteryName: string;
    id: number;
    visitingHours?: string;
    virtualTourAvailable?: boolean;
}

const MonasteryVisit = ({monasteryName, id, visitingHours, virtualTourAvailable}: Props) => {
    const [visitDuration, setVisitDuration] = useState(2);
    const [visitType, setVisitType] = useState(0);

    const visitOptions = [
        {title: "Quick Visit", duration: 1},
        {title: "Standard Tour", duration: 2},
        {title: "Detailed Exploration", duration: 4}
    ];

    useEffect(()=>{
        setVisitDuration(visitOptions[visitType].duration);
    },[visitType]);

    return(
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-orange-600">{visitDuration} Hour Visit</h2>
            {/* VISIT TYPE CONTAINER */}
            <div className="flex gap-4">
                {visitOptions?.map((option, index)=>(
                    <button key={option.title} className="p-2 ring-1 ring-orange-400 rounded-md min-w-[6rem]" style={{
                        background: visitType === index ? "rgb(251 146 60)" : "white",
                        color: visitType === index ? "white" : "orange"                }}
                            onClick={()=>setVisitType(index)}>
                        {option.title}
                    </button>
                ))}
            </div>
            {/* VISIT DETAILS and ADD BUTTON CONTAINER */}
            <div className="flex justify-between items-center">
            {/* VISIT DETAILS CONTAINER */}
                <div className="flex justify-between w-full p-3 ring-1 ring-orange-500">
                    <span>Visit Duration</span>
                    <div className="flex gap-4 items-center">
                        <button onClick={()=>setVisitType((prev)=> prev > 0 ? prev-1 : 0)}>{'<'}</button>
                        <span>{visitDuration} hours</span>
                        <button onClick={()=>setVisitType((prev) => prev < 2 ? prev + 1 : 2)}>{'>'}</button>
                    </div>
                </div>
                {/* ADD TO VISIT PLAN BUTTON */}
                <button className="uppercase bg-orange-600 text-white p-3 ring-1 ring-orange-500 hover:bg-orange-700 transition-colors">
                    Add to Visit Plan
                </button>
            </div>
            {virtualTourAvailable && (
                <div className="mt-2">
                    <button className="w-full bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700 transition-colors">
                        Start Virtual Tour
                    </button>
                </div>
            )}
        </div>
    )
}

export default MonasteryVisit;