import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { RiHome2Line, RiLineChartLine, RiTimeLine } from 'react-icons/ri';
import NavLink from './NavLink';
import Link from 'next/link';

const navLinks = [
    { href: "/", label: "Home", icon: <RiHome2Line /> },
    { href: "/timeline", label: "Timeline", icon: <RiTimeLine /> },
    { href: "/stats", label: "Stats", icon: <RiLineChartLine /> },
];

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <Link href='/'>
                        <Image src={logo} alt='logo' width={150} height={150} ></Image>
                    </Link>
                </div>
                <div className="navbar-end gap-2">
                    {
                        navLinks.map((link, index) => <NavLink key={index} href={link.href}>{link.icon}{link.label}</NavLink>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;