
import React from 'react';

const OrderPage = () => {
    return(
        <div className='p-4 lg:px-20 xl:px-40'>
            <table className='w-full border-separate'>
                <thead>
                    <tr className='text-left'>
                        <th className='hidden md:block'>Order ID</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th className='hidden md:block'>Product</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-sm md:text-base bg-red-50'>
                        <td className='hidden md:block py-6 px-1'>1243392</td>
                        <td className='py-6 px-1'>20.02.2025</td>
                        <td className='py-6 px-1'>89.90</td>
                        <td className='hidden md:block'>Big Burger Menu (2), Veggie Pizza (2),Coca Cola 1L (2)</td>
                        <td className='py-6 px-1 text-red-400 font-bold'>On the way (approx. 10 min)...</td>
                    </tr>
                    <tr className='text-sm md:text-base odd:bg-gray-100'>
                        <td className='hidden md:block py-6 px-1'>1243392</td>
                        <td className='py-6 px-1'>18.02.2025</td>
                        <td className='py-6 px-1'>89.90</td>
                        <td className='hidden md:block'>Big Burger Menu (2), Veggie Pizza (2),Coca Cola 1L (2)</td>
                        <td className='py-6 px-1 font-bold text-green-800'>Delivered!</td>
                    </tr>
                    <tr className='text-sm md:text-base odd:bg-gray-100'>
                        <td className='hidden md:block py-6 px-1'>1243392</td>
                        <td className='py-6 px-1'>10.02.2025</td>
                        <td className='py-6 px-1'>89.90</td>
                        <td className='hidden md:block'>Big Burger Menu (2), Veggie Pizza (2),Coca Cola 1L (2)</td>
                        <td className='py-6 px-1 font-bold text-green-800'>Delivered!</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OrderPage