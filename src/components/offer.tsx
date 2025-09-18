import Image from "next/image";
import React from "react";

const Offer = () => {
    return(
        <div className="bg-black h-screen flex flex-1 flex-col md:flex-row md:justify-between md:bg-[url('/monastries/rumtek_monastery.jpg')] md:h-[70vh]">
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 p-6 bg-black bg-opacity-50">
                <h1 className="text-white text-3xl font-bold xl:text-6xl drop-shadow-lg">Virtual Monastery Tours</h1>
                <p className="text-white xl:text-xl font-medium drop-shadow-md">Experience the sacred beauty of Sikkim's monasteries from anywhere in the world. 
                Immerse yourself in Buddhist culture and architectural marvels through our interactive virtual tours.</p>
                <button className="bg-orange-600 text-white rounded-md py-3 px-6 font-semibold hover:bg-orange-700 transition-colors">Start Virtual Tour</button>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="flex-1 w-full relative md:h-full">
                <Image src="/monastries/rumtek_monastery.jpg" alt="Rumtek Monastery Virtual Tour" fill className="object-cover" />
            </div>
        </div>
    )
}

export default Offer