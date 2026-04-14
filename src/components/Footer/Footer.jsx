import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='max-w-7xl mx-auto text-center py-15'>
                <div className='space-y-5'>
                    <h2 className='text-6xl font-bold text-white'><span className='font-extrabold'>Keen</span>Keeper</h2>
                    <p className='text-base text-white'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <p className='text-white text-xl mt-10'>Social Links</p>
                    <div className='flex items-center justify-center gap-2'>
                        <div className='p-2 bg-white rounded-full'><RiInstagramFill /></div>
                        <div className='p-2 bg-white rounded-full'><FaFacebookSquare /></div>
                        <div className='p-2 bg-white rounded-full'><FaXTwitter /></div>
                    </div>
                </div>
                <div className='border border-[#20624C] my-10'></div>
                <div className='flex justify-between text-gray-400'>
                    <div>© {new Date().getFullYear()} Digitools. All rights reserved.</div>
                    <div className='flex gap-5'>
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