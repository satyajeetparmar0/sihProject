import MonasteryVisit from '@/components/Price';
import {featuredMonasteries} from '@/data';
import Image from 'next/image';
import React from 'react';

const SingleMonasteryPage = () => {
    // For now, let's use the first monastery. In a real app, you'd get the ID from params
    const monastery = featuredMonasteries[0];
    
    if (!monastery) {
        return <div>Monastery not found</div>;
    }
    
    return(
        <div className='p-4 lg:px-20 xl:px-49 h-screen flex flex-col justify-around text-orange-600 md:flex-row md:gap-8 md:items-center'>
            {/* IMAGE CONTAINER */}
            {monastery.image &&
                <div className='relative w-full h-1/2 md:h-[70%]'>
                <Image src={monastery.image} alt={monastery.name} className='object-contain' fill />
            </div>}
            {/* TEXT CONTAINER */}
            <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
                <h1 className='text-2xl font-bold uppercase xl:text-4xl text-gray-800'>{monastery.name}</h1>
                <p className='text-gray-600 text-base leading-relaxed'>{monastery.description}</p>
                <div className='text-sm text-gray-500 space-y-1'>
                    <p><strong>Location:</strong> {monastery.location}</p>
                    <p><strong>Founded:</strong> {monastery.foundedYear}</p>
                    <p><strong>Architecture:</strong> {monastery.architecturalStyle}</p>
                    <p><strong>Visiting Hours:</strong> {monastery.visitingHours}</p>
                </div>
                <MonasteryVisit 
                    monasteryName={monastery.name} 
                    id={monastery.id} 
                    visitingHours={monastery.visitingHours}
                    virtualTourAvailable={monastery.virtualTourAvailable}
                />
            </div>
        </div>
    )
}

export default SingleMonasteryPage