'use client';

import React, { useEffect, useState } from 'react';
import Avatar from "@/assets/images/avatar.jpg";
import Img from 'next/image';
import { FaRegImage } from 'react-icons/fa';
import { toast } from 'sonner';
import axios from 'axios';
import useGlobalContext from '@/hooks/useGlobalContext';

const ProfileDetails = () => {

    const { profileDatabaseID, setProfileDatabaseID } = useGlobalContext();


    const [imageChangeShow, setImageChangeShow] = useState(false);

    // const [profile_picture, set_profile_picture] = useState<File | null>(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const [previewImage, setPreviewImage] = useState<string>();

    const [showInputError, setShowInputError] = useState(false);
    const [profile_picture_upload_error, set_profile_picture_upload_error] = useState(false);


    const handleOnChageInputFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const files = e?.target?.files;
        const acceptedFileTypes = ["image/jpg", "image/png", "image/bmp"];

        set_profile_picture_upload_error(false);

        if (files && files.length > 0) {

            if (!acceptedFileTypes.includes(files[0].type)) {
                set_profile_picture_upload_error(true);
                setPreviewImage("");
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {

                const img = new Image();

                img.onload = () => {

                    if (img.height <= 1024 && img.width <= 1024) {
                        setPreviewImage(reader?.result as string);
                    }
                    else {
                        set_profile_picture_upload_error(true);
                        setPreviewImage("");
                        return;
                    }
                };

                img.src = reader?.result as string;

            };

            reader.readAsDataURL(files[0]);

            // set_profile_picture(files[0]);
        }

    };

    const handleSaveProfile = async () => {

        setShowInputError(false);

        if (!firstName || !lastName || !email) {
            setShowInputError(true);
            return;
        }

        try {

            const formData = new FormData();

            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("email", email);


            if (profileDatabaseID) {

                formData.append("_id", profileDatabaseID);

                const response = await axios.put("/api/user", formData);
                console.log(response);


            } else {
                const response = await axios.post("/api/user", formData);
                if (response?.data?._id)
                    setProfileDatabaseID(response?.data?._id);
                else
                    setProfileDatabaseID(null);
                console.log(response);
            }

            toast.success("Profile has been saved");

        } catch (error) {
            toast.error("Something went wrong", {
                style: {
                    backgroundColor: "red",
                    color: "white"
                }
            });
            console.log(error);
        }


    };



    useEffect(() => {
        if (previewImage) {
            toast.warning("Image can't be saved, I clound not have much time to develop this feature. 🤒");
        }
    }, [previewImage]);


    useEffect(() => {

        const fetchProfileDetails = async () => {
            try {

                const response = await axios.get("/api/user");

                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
                if (response?.data?._id)
                    setProfileDatabaseID(response?.data?._id);
                else
                    setProfileDatabaseID(null);


            } catch (error) {
                toast.error("Something went wrong", {
                    style: {
                        background: "red",
                        color: "white"
                    }
                });
                console.log(error);
            }

        };

        fetchProfileDetails();

    }, [setProfileDatabaseID]);


    return (
        <div className='w-full flex flex-col'>

            <div className='space-y-3'>
                <p className='text-3xl font-semibold'>Profile Details</p>
                <p className='font-thin'>Add your details to create a personal touch to your profile.</p>
            </div>

            <div className='space-y-5'>

                <div className='bg-neutral-100 p-3 flex flex-col md:flex-row w-full rounded-lg mt-8'>

                    <div className='md:w-3/12 pb-3 md:pb-0 flex flex-col justify-center'>
                        <p className='text-neutral-600'>Profile picture</p>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <div
                            className='relative rounded-lg cursor-pointer overflow-hidden'
                            onMouseEnter={() => setImageChangeShow(true)}
                            onMouseLeave={() => setImageChangeShow(false)}
                        >
                            <Img
                                src={previewImage ? previewImage : Avatar}
                                alt='Profile picture'
                                width={200}
                                height={200}
                            />

                            {imageChangeShow &&
                                <>
                                    <label
                                        htmlFor='profile_picture'
                                        className='absolute w-full h-full top-0 left-0 flex justify-center items-center bg-black/60 cursor-pointer'
                                    >
                                        <div className='flex flex-col items-center'>
                                            <FaRegImage color="white" size={36} />
                                            <p className='font-bold text-white'>Change Image</p>
                                        </div>
                                    </label>
                                    <input id="profile_picture" name='profile_picture' type='file' className='hidden' accept='image/png, image/jpg, image/bmp'
                                        onChange={handleOnChageInputFile}
                                    />
                                </>
                            }

                        </div>
                        <div>
                            <p className={`${profile_picture_upload_error ? "text-red-600" : "text-neutral-600"} text-xs sm:text-sm md:text-base`}>Image must be below 1024x1024.</p>
                            <p className={`${profile_picture_upload_error ? "text-red-600" : "text-neutral-600"} text-xs sm:text-sm md:text-base`}>Use PNG, JPG or BMP format</p>
                        </div>
                    </div>

                </div>


                <div className='bg-neutral-100 px-3 py-6 flex flex-col gap-2 w-full rounded-lg'>
                    <div className='flex flex-col md:flex-row w-full md:items-center'>
                        <label htmlFor='firstName' className='text-neutral-600 md:w-3/12'>First name*</label>
                        <input
                            name='firstName' id='firstName' type='text'
                            className='glow-input w-full h-8 py-5 px-4 rounded-lg border-2 border-neutral-300 focus:outline-none focus:border-indigo-700'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className='flex flex-col md:flex-row w-full md:items-center'>
                        <label htmlFor='lastName' className='text-neutral-600 md:w-3/12'>Last name*</label>
                        <input
                            name='lastName' id='lastName' type='text'
                            className='glow-input w-full h-8 py-5 px-4 rounded-lg border-2 border-neutral-300 focus:outline-none focus:border-indigo-700'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div className='flex flex-col md:flex-row w-full md:items-center'>
                        <label htmlFor='email' className='text-neutral-600 md:w-3/12'>Email*</label>
                        <input
                            name='email' id='email' type='email'
                            className='glow-input w-full h-8 py-5 px-4 rounded-lg border-2 border-neutral-300 focus:outline-none focus:border-indigo-700'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {showInputError &&
                        <p className='text-red-500'>Fill up the fisrt name, last name and email inputs</p>
                    }

                </div>

            </div>


            <div className='pt-5 border-gray-300 border-t-2 text-end mt-auto w-full'>
                <button
                    className='bg-indigo-700 px-5 py-2 text-white rounded-lg'
                    onClick={handleSaveProfile}
                >Save</button>
            </div>


        </div>
    );
};

export default ProfileDetails;