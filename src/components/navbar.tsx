import { constrainedMemory } from 'process';
import React from 'react';
import Menu from './menu';
import Link from 'next/link';

const Navbar = () => {
    return(
        <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 '>
            {/* LOGO */}
            <div className='text-xl'>
            <Link href="/">Swaad-Bhavan</Link>
            </div>
            {/* MOBILE MENU */}
            <div>
                <Menu/>
            </div>
        </div>
    )
}

export default Navbar