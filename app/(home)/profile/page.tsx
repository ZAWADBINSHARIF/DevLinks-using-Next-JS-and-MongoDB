import MobilePreview from '@/components/MobilePreview';
import ProfileDetails from '@/components/ProfileDetails';
import React from 'react';

const profile = () => {
    return (
        <div className='flex flex-row gap-3'>

            <div className='lg:flex w-2/5 bg-white rounded-lg px-5 py-8 justify-center items-center hidden'>
                <MobilePreview />
            </div>
            <div className='flex flex-1 bg-white rounded-lg px-5 py-8'>
                <ProfileDetails />
            </div>

        </div>
    );
};

export default profile;