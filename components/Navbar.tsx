'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaLink } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';
import { LuEye } from 'react-icons/lu';

const Navbar = () => {


    const pathname = usePathname();
    console.log(pathname);

    return (
        <div className='flex my-5 bg-white rounded-lg px-3 py-3 justify-center items-center'>
            <div className='flex gap-2'>
                <div className='bg-indigo-700 rounded-xl flex justify-center items-center text-center px-2 py-1'>
                    <FaLink size={18} color='white' />
                </div>
                <span className='font-semibold text-3xl text-black hidden md:block'>devlinks</span>
            </div>

            <div className='flex flex-1 justify-center items-center gap-3'>
                <Link
                    className={`flex gap-2 justify-center items-center px-4 py-2 ${pathname === "/links" ? "bg-indigo-700/20" : "bg-white"} rounded-lg cursor-pointer`}
                    href={"/links"}
                >
                    <FiLink className='text-indigo-700' size={16} />
                    <span className='text-indigo-700 font-semibold text-sm hidden md:block'>Links</span>
                </Link>
                <Link
                    className={`flex gap-2 justify-center items-center px-4 py-2 ${pathname === "/profile" ? "bg-indigo-700/20" : "bg-white"} rounded-lg cursor-pointer`}
                    href={"/profile"}
                >
                    <CgProfile className='text-indigo-700' size={16} />
                    <span className='text-indigo-700 font-semibold text-sm hidden md:block'>Profile Details</span>
                </Link>
            </div>

            <Link
                className='px-5 py-2 border-indigo-500 border-2 rounded-lg font-semibold text-indigo-700 cursor-pointer hover:bg-indigo-500 hover:text-white'
                href={"/preview"}
            >
                <span className='hidden md:block'>Preview</span>
                <LuEye size={18} className='text-indigo-700 md:hidden' />
            </Link>
        </div>
    );
};

export default Navbar;