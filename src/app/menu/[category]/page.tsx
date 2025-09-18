import Link from "next/link";
import { featuredMonasteries } from "@/data";
import React from "react";
import Image from "next/image";

const CategoryPage = () => {
    return(
        <div className="flex flex-wrap text-orange-600">
            {featuredMonasteries.map((monastery) => (
                <Link className="w-full h-[60vh] border-r-2 border-b-2 border-orange-600 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-orange-50" href={`/product/${monastery.id}`} key={monastery.id}>
                    {/* IMAGE CONTAINER */}
                    {monastery.image && (
                        <div className="relative h-[80%]">
                            <Image src={monastery.image} alt={monastery.name} fill className="object-cover" />
                        </div>
                    )}
                    {/* TEXT CONTAINER */}
                    <div className="flex items-center justify-between font-bold">
                        <h1 className="text-2xl uppercase p-2 text-gray-800">{monastery.name}</h1>
                        <h2 className="group-hover:hidden text-xl text-teal-700">{monastery.significance}</h2>
                        <button className="hidden group-hover:block uppercase bg-orange-600 text-white p-2 rounded-md hover:bg-orange-700 transition-colors">
                            Learn More
                        </button>
                    </div>
                </Link>
            ))}
            
        </div>
    )
};

export default CategoryPage;