import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
                     className="w-full h-1/3 bg-cover p-8 md:h-1/2 lg:h-2/3"
          style={{ backgroundImage: `url(${category.img})` }}
        >
                     <div className={`w-1/2 ${category.color === 'white' ? 'text-white' : 'text-black'} flex flex-col justify-center h-full`}>
             <h1 className="uppercase font-bold text-3xl mb-4">{category.title}</h1>
             <p className="text-sm mb-4 line-clamp-3">{category.desc}</p>
                           <button className={`hidden md:block ${category.color === 'white' ? 'bg-white text-black' : 'bg-black text-white'} py-2 px-4 rounded-md mt-auto`}>Explore</button>
           </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;