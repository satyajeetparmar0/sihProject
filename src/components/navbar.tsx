import { constrainedMemory } from 'process';
import React from 'react';
import Menu from './menu';
import Link from 'next/link';
import CartIcon from './CartIcon';
import Image from 'next/image';

const Navbar = () => {
    const user =false;
    return(
        <div className='h-12 text-orange-600 p-4 flex items-center justify-between border-b-2 border-b-orange-600 md:h-24 lg:px-20 xl:px-40'>
            {/* Left Links */}
            <div className='hidden md:flex gap-4 flex-1'>
                <Link href="/">Homepage</Link>
                <Link href="/menu">Monasteries</Link>
                <Link href="/">Cultural Heritage</Link>
                <Link href="/">Virtual Tours</Link>
            </div>
            {/* LOGO */}
            <div className='text-xl md:font-bold flex-1 md:text-center'>
            <Link href="/">Cultural Connect</Link>
            </div>
            {/* MOBILE MENU */}
            <div>
                <Menu/>
            </div>

            {/* Right Links */}
            <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
                <div className='flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md md:absolute top-3 r-2 lg:static'>
                    <Image src="/phone.png" alt="" width={20} height={20}/>
                    <span>123-321</span>
                </div>
                {!user ? (<Link href="/login">Login</Link>) :
                (<Link href="/orders">My Visits</Link>)}
                <CartIcon/>
            </div>
        </div>
    )
}

export default Navbar