"use client";

import React from 'react';
import useGlobalContext from '@/hooks/useGlobalContext';
import LinksListForm from './LinksListForm';


const LinksForm = () => {

    const { devLinks, addNewLinkHandle } = useGlobalContext();

    return (
        <div className={`w-full overflow-y-scroll h-full no-scrollbar ${devLinks.length > 2 ? "shadow-lg" : ""}`}>

            <div className='space-y-3'>
                <p className='text-3xl font-semibold'>Customize your links</p>
                <p className='font-thin'>Add/edit/remove links below and then share all your profiles with the world!</p>
            </div>

            <div className='w-full pt-10'>
                <button
                    className='w-full py-2 border-2 border-indigo-700 rounded-lg text-indigo-700 text-md font-bold hover:bg-indigo-100'
                    onClick={addNewLinkHandle}
                >
                    +Add new link
                </button>

                <LinksListForm />

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
