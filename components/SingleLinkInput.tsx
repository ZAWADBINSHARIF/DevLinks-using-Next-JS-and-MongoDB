"use client";

import React, { useEffect, useState } from 'react';
import { CgMathEqual } from 'react-icons/cg';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { BsLink45Deg } from 'react-icons/bs';
import { FaYoutube, FaLinkedin } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { PlatformValue } from '@/interface';
import useGlobalContext from '@/hooks/useGlobalContext';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from "@dnd-kit/utilities";


interface platformSelectOption {
    platformName: string,
    icon: React.ReactNode;
}

interface Props { id: number, name: PlatformValue, link: string; index: number; }

const SingleLinkInput = ({ id, name, link, index }: Props) => {

    const { attributes, listeners, transform, transition, setNodeRef } = useSortable({ id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    };

    const platformSelectOptions: platformSelectOption[] = [
        {
            platformName: "GitHub",
            icon: <TbBrandGithubFilled size={18} className='text-gray-600' />
        },
        {
            platformName: "YouTube",
            icon: <FaYoutube size={18} className='text-gray-600' />
        },
        {
            platformName: "Linkedin",
            icon: <FaLinkedin size={18} className='text-gray-600' />
        },
    ] as const;


    const { removeLink, addLinkValue, addPlatformValue } = useGlobalContext();


    const [platformValue, setPlatformValue] = useState<PlatformValue>("");
    const [linkUrl, setLinkUrl] = useState("");


    useEffect(() => {
        if (name)
            setPlatformValue(name);
        if (link)
            setLinkUrl(link);
    }, [name, link]);


    return (
        <div
            ref={setNodeRef}
            style={style}
            className='bg-neutral-200 px-3 py-4 space-y-2 rounded-lg touch-none'>

            <div className='flex flex-row justify-between'>
                <div className='flex gap-1 items-center'>
                    <div {...listeners} {...attributes}
                        className='bg-red-0 px-1 hover:bg-white rounded-full'>
                        <CgMathEqual size={24} className='cursor-pointer text-gray-600' />
                    </div>
                    <p className='font-semibold text-gray-600'>Link #{index + 1}</p>
                </div>
                <button
                    className='font-semibold text-neutral-700 hover:text-neutral-900'
                    onClick={() => removeLink(id)}
                >Remove</button>
            </div>

            <div className='flex flex-col'>

                <div className='space-y-1'>

                    <p className='text-sm'>Platform</p>
                    <Select
                        // defaultValue="github"
                        value={platformValue}
                        onValueChange={(value: PlatformValue) => {
                            setPlatformValue(value);
                            addPlatformValue(id, value);
                        }}
                    >
                        <SelectTrigger className="w-full focus:outline-none border-2 border-neutral-300 focus:ring-0">
                            <SelectValue placeholder="Select a platform" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>

                                {
                                    platformSelectOptions.map((item) => {

                                        return (
                                            <SelectItem value={item.platformName.toLowerCase()} key={item.platformName}>

                                                <div className='flex items-center gap-2'>
                                                    {item.icon}
                                                    <span className='text-gray-600'>{item.platformName}</span>
                                                </div>

                                            </SelectItem>
                                        );
                                    })
                                }

                            </SelectGroup>
                        </SelectContent>
                    </Select>

                </div>


                <div className='space-y-1'>

                    <label htmlFor="link_input" className='text-sm'>Link</label>
                    <div className='flex items-center px-3 rounded-lg border-2 border-gray-300 bg-white'>
                        <BsLink45Deg size={18} className='text-neutral-800' />
                        <input value={linkUrl}
                            name='link'
                            id='link_input'
                            className='w-full h-8 focus:outline-none px-3 text-gray-600 rounded-lg'
                            onChange={(e) => {
                                setLinkUrl(e.target.value);
                                addLinkValue(id, e.target.value);
                            }}
                        />
                    </div>

                </div>


            </div>

        </div>
    );
};

export default SingleLinkInput;