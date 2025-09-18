import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return(
        <div className='h-12 md:h-24 lg:p-20 xl:p-40 flex items-center justify-between text-orange-600'>
            <Link href="/" className='font-bold text-xl'>Cultural Connect</Link>
            <p>© All RIGHTS RESERVED.</p>
        </div>

    )
}

export default Footer