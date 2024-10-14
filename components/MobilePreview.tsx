"use client";

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Man from "@/assets/images/man.jpeg";
import useGlobalContext from '@/hooks/useGlobalContext';
import { LinkBgColor, PlatformLinkPreviewDetails } from '@/constant';
import { toast } from 'sonner';


const MobilePreview = () => {

    const pathname = usePathname();

    const { linkDetails } = useGlobalContext();


    return (
        <div>
            <div className='phoneFrame flex justify-center pt-11 pb-6 px-12'>

                <div className="flex flex-col w-full h-full text-white items-center pt-5 overflow-y-scroll no-scrollbar">

                    <div className='items-center flex flex-col gap-3'>
                        {pathname === "/links" ?
                            <>
                                <div className='w-[100px] h-[100px] bg-neutral-200 rounded-full' />
                                <div className='h-5 w-[150px] bg-neutral-200 rounded-lg mt-3' />
                                <div className='h-3 w-[100px] bg-neutral-200 rounded-lg' />
                            </> :
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
                        }
                    </div>

                    <div className='w-full px-4 pt-10 flex flex-col gap-5'>

                        {linkDetails.map((item) => {

                            if (item.platFormName == "") return <div key={item.id} className='bg-neutral-200 py-3 px-5 h-12 rounded-lg flex flex-row w-full items-center justify-between' />;

                            const platformValue = item.platFormName;
                            const PlatformIcon = () => PlatformLinkPreviewDetails[platformValue].icon;
                            const PlatformName = PlatformLinkPreviewDetails[platformValue].name;
                            const bgColor = LinkBgColor[platformValue];

                            const handleCopyTheLink = () => {

                                if (!item.link) return;


                                navigator.clipboard.writeText(item.link).then(() => {
                                    toast.success('Text copied to clipboard!');
                                }).catch(err => {
                                    console.error('Failed to copy text: ', err);
                                });
                            };

                            return (
                                <div
                                    key={item.id}
                                    className={`${bgColor} py-3 px-5 rounded-lg flex flex-row w-full items-center justify-between cursor-pointer`}
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

                        {pathname === "/links" && linkDetails.length <= 0 &&
                            <>
                                <div className='bg-neutral-200 py-3 px-5 h-12 rounded-lg flex flex-row w-full items-center justify-between' />
                                <div className='bg-neutral-200 py-3 px-5 h-12 rounded-lg flex flex-row w-full items-center justify-between' />
                                <div className='bg-neutral-200 py-3 px-5 h-12 rounded-lg flex flex-row w-full items-center justify-between' />
                                <div className='bg-neutral-200 py-3 px-5 h-12 rounded-lg flex flex-row w-full items-center justify-between' />
                                <div className='bg-neutral-200 py-3 px-5 h-12 rounded-lg flex flex-row w-full items-center justify-between' />
                            </>
                        }

                    </div>


                </div>

            </div>
        </div >
    );
};

export default MobilePreview;