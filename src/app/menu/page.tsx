import { monasteryCategories } from "@/data";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row gap-6">
      {monasteryCategories.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="relative flex-1 hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden shadow-lg"
        >
          {/* Background Image */}
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover"
            priority={category.id === 1}
          />

          {/* Lighter overlay so the image is still visible */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between h-full p-8 text-white">
            <div>
              <h1 className="uppercase font-bold text-3xl mb-3 drop-shadow-lg">
                {category.title}
              </h1>
              <p className="text-sm line-clamp-3 font-medium drop-shadow-md">
                {category.description}
              </p>
            </div>

            <button className="bg-orange-600 text-white hover:bg-orange-700 py-2 px-5 rounded-md mt-4 transition-colors font-semibold shadow-lg self-start">
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
