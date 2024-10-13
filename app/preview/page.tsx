"use client";

import React from 'react';
import { FaArrowRight, FaShareAlt } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Image from 'next/image';
import Man from '@/assets/images/man.jpeg';
import Link from 'next/link';
import useGlobalContext from '@/hooks/useGlobalContext';
import { LinkBgColor, PlatformLinkPreviewDetails } from '@/constant';

const Preview = () => {

    const { linkDetails } = useGlobalContext();


    return (
        <div className='w-full h-screen'>

            <div className='bg-indigo-700 w-full h-2/6 rounded-b-[40px] pt-5'>
                <div className='flex justify-between bg-white px-5 py-4 w-11/12 mx-auto rounded-lg'>
                    <Link
                        href={"/links"}
                        className='border-2 border-indigo-700 px-5 py-2 rounded-lg text-indigo-700 font-semibold hover:bg-indigo-100'
                    >
                        <span className='hidden md:block'>Back to Editor</span>
                        <IoMdArrowRoundBack className='text-indigo-700 font-semibold md:hidden' size={24} />
                    </Link>

                    <button
                        className='border-2 bg-indigo-700 px-5 py-2 rounded-lg text-white font-semibold hover:bg-indigo-900'
                    >
                        <span className='hidden md:block'>Share LInk</span>
                        <FaShareAlt className='text-white font-semibold md:hidden' size={24} />

                    </button>
                </div>


                <div className='flex justify-center'>
                    <div
                        className="flex mt-24 flex-col w-[320px] h-full text-white items-center py-8 px-8 rounded-2xl bg-white shadow-2xl">

                        <div className='items-center flex flex-col gap-3'>

                            <div className="flex flex-col items-center">
                                <div className='rounded-full border-2 border-indigo-700 overflow-hidden' >
                                    <Image
                                        src={Man}
                                        alt='profile picture'
                                        width={100}
                                        height={100}
                                        className='object-fill aspect-square'
                                    />
                                </div>
                                <p className='text-black font-bold text-center text-xl mt-3' >Ben Wright</p>
                                <p className='text-black font-thin text-center' >ben@example.com</p>
                            </div>

                        </div>

                        <div className='w-full px-4 pt-10 flex flex-col gap-5'>


                            {linkDetails.map((item) => {

                                if (item.platFormName == "") return <div key={item.id} className='bg-neutral-200 py-3 px-5 h-12 rounded-lg flex flex-row w-full items-center justify-between' />;

                                const platformValue = item.platFormName;
                                const PlatformIcon = () => PlatformLinkPreviewDetails[platformValue].icon;
                                const PlatformName = PlatformLinkPreviewDetails[platformValue].name;

                                const handleCopyTheLink = () => {

                                    if (!item.link) return;

                                    navigator.clipboard.writeText(item.link).then(() => {
                                        alert('Text copied to clipboard!');
                                    }).catch(err => {
                                        console.error('Failed to copy text: ', err);
                                    });
                                };

                                return (
                                    <div
                                        key={item.id}
                                        className={`${LinkBgColor[platformValue]} py-3 px-5 rounded-lg flex flex-row w-full items-center justify-between cursor-pointer`}
                                        onClick={handleCopyTheLink}
                                    >
                                        <div className='flex items-center gap-2'>
                                            <PlatformIcon />
                                            <span className='text-white'>{PlatformName}</span>
                                        </div>
                                        <FaArrowRight color='white' />
                                    </div>
                                );
                            })}

                        </div>


                    </div>
                </div>

            </div>

        </div>
    );
};

export default Preview;