import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center py-6 sm:py-8 md:py-12'>
                <div className='space-y-3 sm:space-y-4 md:space-y-5'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white'>
                        <span className='font-extrabold'>Keen</span>Keeper
                    </h2>
                    <p className='text-sm sm:text-base text-white max-w-xs sm:max-w-sm md:max-w-lg mx-auto'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <p className='text-white text-base sm:text-lg md:text-xl mt-6 sm:mt-8 md:mt-10'>Social Links</p>
                    <div className='flex items-center justify-center gap-2 sm:gap-3'>
                        <div className='p-1.5 sm:p-2 bg-white rounded-full text-sm sm:text-base'><RiInstagramFill /></div>
                        <div className='p-1.5 sm:p-2 bg-white rounded-full text-sm sm:text-base'><FaFacebookSquare /></div>
                        <div className='p-1.5 sm:p-2 bg-white rounded-full text-sm sm:text-base'><FaXTwitter /></div>
                    </div>
                </div>
                <div className='border border-[#20624C] my-6 sm:my-8 md:my-10'></div>
                <div className='flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 text-gray-400'>
                    <div className='text-xs sm:text-sm md:text-base'>© {new Date().getFullYear()} Digitools. All rights reserved.</div>
                    <div className='flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 text-xs sm:text-sm md:text-base'>
                        <Link href='/'>Privacy Policy</Link>
                        <Link href='/'>Terms of Service </Link>
                        <Link href='/'>Cookies</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;