'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathName = usePathname();

    return (
        <div>
            <Link 
            href={href}
            className={`btn ${pathName === href ? 'bg-[#244D3F] text-white' : 'btn-ghost text-gray-400'}`}
            >
                {children}
            </Link>
        </div>
    );
};

export default NavLink;