"use client";

import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        redirect("/links");
    });
    return (<></>);
};

export default Home;