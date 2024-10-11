import Navbar from '@/components/Navbar';
import React from 'react';

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar />
            {children}
        </div>
    );
};

export default layout;