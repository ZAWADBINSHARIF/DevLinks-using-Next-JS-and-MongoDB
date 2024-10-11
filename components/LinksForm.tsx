import React from 'react';
import { CgMathEqual } from 'react-icons/cg';
import { FaEquals, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { VscGrabber } from 'react-icons/vsc';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { BsLink45Deg } from 'react-icons/bs';

const LinksForm = () => {
    return (
        <div className='w-full overflow-y-scroll no-scrollbar'>

            <div className='space-y-3'>
                <p className='text-3xl font-semibold'>Customize your links</p>
                <p className='font-thin'>Add/edit/remove links below and then share all your profiles with the world!</p>
            </div>

            <div className='w-full pt-10'>
                <button className='w-full py-2 border-2 border-indigo-700 rounded-lg text-indigo-700 text-md font-bold'>
                    +Add new link
                </button>

                <div className='pt-5 space-y-8'>

                    <div className='bg-neutral-200 px-3 py-4 space-y-2 rounded-lg'>

                        <div className='flex flex-row justify-between'>
                            <div className='flex gap-1 items-center'>
                                <CgMathEqual size={24} className='cursor-pointer text-gray-600' />
                                <p className='font-semibold text-gray-600'>Link #1</p>
                            </div>
                            <button className='font-semibold text-neutral-700'>Remove</button>
                        </div>

                        <div className='flex flex-col'>

                            <div className='space-y-1'>

                                <p className='text-sm'>Platform</p>
                                <Select>
                                    <SelectTrigger className="w-full focus:outline-none border-2 border-neutral-300 focus:ring-0">
                                        <SelectValue placeholder="Select a fruit" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="github">

                                                <div className='flex items-center gap-2'>
                                                    <TbBrandGithubFilled size={18} className='text-gray-600' />
                                                    <span className='text-gray-600'>GitHub</span>
                                                </div>

                                            </SelectItem>

                                            <SelectItem value="youtube">

                                                <div className='flex items-center gap-2'>
                                                    <FaYoutube size={18} className='text-gray-600' />
                                                    <span className='text-gray-600'>Youtube</span>
                                                </div>

                                            </SelectItem>

                                            <SelectItem value="linkedin">

                                                <div className='flex items-center gap-2'>
                                                    <FaLinkedin size={18} className='text-gray-600' />
                                                    <span className='text-gray-600'>Linkedin</span>
                                                </div>

                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                            </div>


                            <div className='space-y-1'>
                                <label htmlFor="link_input" className='text-sm'>Link</label>
                                <div className='flex items-center px-3 rounded-lg border-2 border-gray-300 bg-white'>
                                    <BsLink45Deg size={18} className='text-neutral-800' />
                                    <input name='link' id='link_input' className='w-full h-8 focus:outline-none px-3 text-gray-600 rounded-lg' />
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className='bg-neutral-300 px-3 py-4 space-y-2 rounded-lg'>

                        <div className='flex flex-row justify-between'>
                            <div className='flex gap-1 items-center'>
                                <CgMathEqual size={24} className='cursor-pointer text-gray-600' />
                                <p className='font-semibold text-gray-600'>Link #1</p>
                            </div>
                            <button className='font-semibold text-neutral-700'>Remove</button>
                        </div>

                        <div className='flex flex-col'>

                            <div className='space-y-1'>

                                <p className='text-sm'>Platform</p>
                                <Select>
                                    <SelectTrigger className="w-full focus:outline-none border-2 border-neutral-300 focus:ring-0">
                                        <SelectValue placeholder="Select a fruit" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="github">

                                                <div className='flex items-center gap-2'>
                                                    <TbBrandGithubFilled size={18} className='text-gray-600' />
                                                    <span className='text-gray-600'>GitHub</span>
                                                </div>

                                            </SelectItem>

                                            <SelectItem value="youtube">

                                                <div className='flex items-center gap-2'>
                                                    <FaYoutube size={18} className='text-gray-600' />
                                                    <span className='text-gray-600'>Youtube</span>
                                                </div>

                                            </SelectItem>

                                            <SelectItem value="linkedin">

                                                <div className='flex items-center gap-2'>
                                                    <FaLinkedin size={18} className='text-gray-600' />
                                                    <span className='text-gray-600'>Linkedin</span>
                                                </div>

                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                            </div>


                            <div className='space-y-1'>
                                <label htmlFor="link_input" className='text-sm'>Link</label>
                                <div className='flex items-center px-3 rounded-lg border-2 border-gray-300 bg-white'>
                                    <BsLink45Deg size={18} className='text-neutral-800' />
                                    <input name='link' id='link_input' className='w-full h-8 focus:outline-none px-3 text-gray-600 rounded-lg' />
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className='bg-neutral-300 px-3 py-4 space-y-2 rounded-lg'>

                        <div className='flex flex-row justify-between'>
                            <div className='flex gap-1 items-center'>
                                <CgMathEqual size={24} className='cursor-pointer text-gray-600' />
                                <p className='font-semibold text-gray-600'>Link #1</p>
                            </div>
                            <button className='font-semibold text-neutral-700'>Remove</button>
                        </div>

                        <div className='flex flex-col'>

                            <div className='space-y-1'>

                                <p className='text-sm'>Platform</p>
                                <Select>
                                    <SelectTrigger className="w-full focus:outline-none border-2 border-neutral-300 focus:ring-0">
                                        <SelectValue placeholder="Select a fruit" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="github">

                                                <div className='flex items-center gap-2'>
                                                    <TbBrandGithubFilled size={18} className='text-gray-600' />
                                                    <span className='text-gray-600'>GitHub</span>
                                                </div>

                                            </SelectItem>

                                            <SelectItem value="youtube">

                                                <div className='flex items-center gap-2'>
                                                    <FaYoutube size={18} className='text-gray-600' />
                                                    <span className='text-gray-600'>Youtube</span>
                                                </div>

                                            </SelectItem>

                                            <SelectItem value="linkedin">

                                                <div className='flex items-center gap-2'>
                                                    <FaLinkedin size={18} className='text-gray-600' />
                                                    <span className='text-gray-600'>Linkedin</span>
                                                </div>

                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                            </div>


                            <div className='space-y-1'>
                                <label htmlFor="link_input" className='text-sm'>Link</label>
                                <div className='flex items-center px-3 rounded-lg border-2 border-gray-300 bg-white'>
                                    <BsLink45Deg size={18} className='text-neutral-800' />
                                    <input name='link' id='link_input' className='w-full h-8 focus:outline-none px-3 text-gray-600 rounded-lg' />
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className='bg-neutral-300 px-3 py-4 space-y-2 rounded-lg'>

                        <div className='flex flex-row justify-between'>
                            <div className='flex gap-1 items-center'>
                                <CgMathEqual size={24} className='cursor-pointer text-gray-600' />
                                <p className='font-semibold text-gray-600'>Link #1</p>
                            </div>
                            <button className='font-semibold text-neutral-700'>Remove</button>
                        </div>

                        <div className='flex flex-col'>

                            <div className='space-y-1'>

                                <p className='text-sm'>Platform</p>
                                <Select>
                                    <SelectTrigger className="w-full focus:outline-none border-2 border-neutral-300 focus:ring-0">
                                        <SelectValue placeholder="Select a fruit" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="github">

                                                <div className='flex items-center gap-2'>
                                                    <TbBrandGithubFilled size={18} className='text-gray-600' />
                                                    <span className='text-gray-600'>GitHub</span>
                                                </div>

                                            </SelectItem>

                                            <SelectItem value="youtube">

                                                <div className='flex items-center gap-2'>
                                                    <FaYoutube size={18} className='text-gray-600' />
                                                    <span className='text-gray-600'>Youtube</span>
                                                </div>

                                            </SelectItem>

                                            <SelectItem value="linkedin">

                                                <div className='flex items-center gap-2'>
                                                    <FaLinkedin size={18} className='text-gray-600' />
                                                    <span className='text-gray-600'>Linkedin</span>
                                                </div>

                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                            </div>


                            <div className='space-y-1'>
                                <label htmlFor="link_input" className='text-sm'>Link</label>
                                <div className='flex items-center px-3 rounded-lg border-2 border-gray-300 bg-white'>
                                    <BsLink45Deg size={18} className='text-neutral-800' />
                                    <input name='link' id='link_input' className='w-full h-8 focus:outline-none px-3 text-gray-600 rounded-lg' />
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className='bg-neutral-300 px-3 py-4 space-y-2 rounded-lg'>

                        <div className='flex flex-row justify-between'>
                            <div className='flex gap-1 items-center'>
                                <CgMathEqual size={24} className='cursor-pointer text-gray-600' />
                                <p className='font-semibold text-gray-600'>Link #1</p>
                            </div>
                            <button className='font-semibold text-neutral-700'>Remove</button>
                        </div>

                        <div className='flex flex-col'>

                            <div className='space-y-1'>

                                <p className='text-sm'>Platform</p>
                                <Select>
                                    <SelectTrigger className="w-full focus:outline-none border-2 border-neutral-300 focus:ring-0">
                                        <SelectValue placeholder="Select a fruit" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="github">

                                                <div className='flex items-center gap-2'>
                                                    <TbBrandGithubFilled size={18} className='text-gray-600' />
                                                    <span className='text-gray-600'>GitHub</span>
                                                </div>

                                            </SelectItem>

                                            <SelectItem value="youtube">

                                                <div className='flex items-center gap-2'>
                                                    <FaYoutube size={18} className='text-gray-600' />
                                                    <span className='text-gray-600'>Youtube</span>
                                                </div>

                                            </SelectItem>

                                            <SelectItem value="linkedin">

                                                <div className='flex items-center gap-2'>
                                                    <FaLinkedin size={18} className='text-gray-600' />
                                                    <span className='text-gray-600'>Linkedin</span>
                                                </div>

                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                            </div>


                            <div className='space-y-1'>
                                <label htmlFor="link_input" className='text-sm'>Link</label>
                                <div className='flex items-center px-3 rounded-lg border-2 border-gray-300 bg-white'>
                                    <BsLink45Deg size={18} className='text-neutral-800' />
                                    <input name='link' id='link_input' className='w-full h-8 focus:outline-none px-3 text-gray-600 rounded-lg' />
                                </div>
                            </div>


                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default LinksForm;

// const data = [
//     { number: 2, name: 'sharif' },
//     { number: 1, name: 'zawad' },
//     { number: 3, name: 'jasmin' }
// ];

// data.sort((a, b) => a.number - b.number);

// data.forEach(item => {
//     console.log('number: ' + item.number + ', name: ' + item.name);
// });
