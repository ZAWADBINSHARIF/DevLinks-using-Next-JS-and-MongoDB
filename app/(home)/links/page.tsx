"use client";

import LinksForm from '@/components/LinksForm';
import MobilePreview from '@/components/MobilePreview';
import { PlatformLinkPreviewDetails } from '@/constant';
import useGlobalContext from '@/hooks/useGlobalContext';
import React from 'react';
import { toast } from 'sonner';

const Page = () => {

    const { linkDetails, setLinkInputFormErrorIDs } = useGlobalContext();

    const handleSaveLinks = () => {

        const getEmptyInputLinkFormIDs: number[] = linkDetails.filter((item) => {
            if (item.link === "" || item.platFormName === "") {
                return item;
            } else if (!PlatformLinkPreviewDetails[item.platFormName].validation(item.link)) {
                return item;
            }
        }).map(item => item.id);

        console.log(getEmptyInputLinkFormIDs);

        if (getEmptyInputLinkFormIDs.length > 0) {
            setLinkInputFormErrorIDs(getEmptyInputLinkFormIDs);

            toast.error("Some fields are empty. Please fill up the require input.", {
                style: {
                    backgroundColor: "red",
                    color: "white"
                },
                duration: 3000
            });

        }

        // ** upload links
    };


    return (
        <div className='flex flex-row gap-3'>

            <div className='lg:flex w-2/5 bg-white rounded-lg px-5 py-8 justify-center items-center hidden'>
                <MobilePreview />
            </div>
            <div className='flex flex-1 bg-white rounded-lg px-5 py-8 h-[730px] flex-col justify-between'>

                <LinksForm />

                <div className='self-end'>
                    <hr color='gray' />

                    <div className='pt-5'>
                        <button
                            className='bg-indigo-700 px-5 py-2 text-white rounded-lg'
                            onClick={handleSaveLinks}
                        >Save</button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Page;