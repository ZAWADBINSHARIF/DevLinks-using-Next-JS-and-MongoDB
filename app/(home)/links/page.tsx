import LinksForm from '@/components/LinksForm';
import MobilePreview from '@/components/MobilePreview';
import React from 'react';

const page = () => {
    return (
        <div className='flex flex-row gap-3'>

            <div className='lg:flex w-2/5 bg-white rounded-lg px-5 py-8 justify-center items-center hidden'>
                <MobilePreview />
            </div>
            <div className='flex flex-1 bg-white rounded-lg px-5 py-8 h-[730px] flex-col'>
                <LinksForm />
                <hr color='gray' />
                <div className='self-end pt-5'>
                    <button className='bg-indigo-700 px-5 py-2 text-white rounded-lg'>Save</button>
                </div>
            </div>

        </div>
    );
};

export default page;