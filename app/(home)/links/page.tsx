"use client";

import LinksForm from '@/components/LinksForm';
import MobilePreview from '@/components/MobilePreview';
import { PlatformLinkPreviewDetails } from '@/constant';
import useGlobalContext from '@/hooks/useGlobalContext';
import axios from 'axios';
import React from 'react';
import { toast } from 'sonner';

const Page = () => {

    const { devLinks, setLinkInputFormErrorIDs, devLinksDatabaseID, setDevLinksDatabaseID } = useGlobalContext();

    const handleSaveLinks = async () => {

        const getEmptyInputLinkFormIDs: number[] = devLinks.filter((item) => {
            if (item.link === "" || item.platFormName === "") {
                return item;
            } else if (!PlatformLinkPreviewDetails[item.platFormName].validation(item.link)) {
                return item;
            }
        }).map(item => item.id);


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

        try {

            if (devLinksDatabaseID) {
                console.log({ Upload_id: devLinksDatabaseID });
                const response = await axios.put("http://localhost:3000/api/devlink", {
                    devLinks,
                    "_id": devLinksDatabaseID
                });


                console.log(response.data);


                toast.success("Dev links has been update");
            } else {

                const response = await axios.post("http://localhost:3000/api/devlink", {
                    devLinks,
                });

                setDevLinksDatabaseID(response.data._id);

                toast.success("Dev links has been saved");
            }

        } catch (error) {

            toast.error("Something went wrong", {
                style: {
                    backgroundColor: 'red',
                    color: "white"
                }
            });

            console.log(error);
        }

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