"use client";

import React, { useState } from 'react';
import { LinkDetail, PlatformValue } from "@/interface";
import { createContext } from "react";


interface GlobalValues {
    linkDetails: LinkDetail[];
    setLinkDetails: React.Dispatch<React.SetStateAction<LinkDetail[]>>;
    linkInputFormErrorIDs: number[];
    setLinkInputFormErrorIDs: React.Dispatch<React.SetStateAction<number[]>>;
    addNewLinkHandle: () => void;
    removeLink: (id: number) => void;
    addLinkValue: (id: number, value: string) => void;
    addPlatformValue: (id: number, value: PlatformValue) => void;
}

export const GlobalContext = createContext<GlobalValues | null>(null);


const GlobalValueProvider = ({ children }: { children: React.ReactNode; }) => {

    const [linkDetails, setLinkDetails] = useState<LinkDetail[]>([]);
    const [linkInputFormErrorIDs, setLinkInputFormErrorIDs] = useState<number[]>([]);


    const addNewLinkHandle = () => {

        const id = Math.floor(Math.random() * (99999999 - 100) + 100);

        setLinkDetails(prev => {
            if (prev.length == 0) {
                return [{ id, platFormName: "", link: "" }];
            }

            return [...prev, { id, platFormName: "", link: "" }];
        });
    };

    const removeLink = (id: number) => {
        setLinkDetails(prev => {
            const newData = prev.filter(item => item.id != id);
            return newData;
        });
    };

    const addLinkValue = (id: number, value: string) => {
        setLinkDetails(prev => {
            return prev.map((item) => {
                if (item.id === id) {
                    return { ...item, link: value.trim() };
                }

                return item;
            });
        });
    };

    const addPlatformValue = (id: number, value: PlatformValue) => {
        setLinkDetails(prev => {
            return prev.map((item) => {
                if (item.id === id) {
                    return { ...item, platFormName: value };
                }

                return item;
            });
        });
    };
    console.log(linkDetails);
    return (
        <GlobalContext.Provider
            value={{
                linkDetails,
                setLinkDetails,
                linkInputFormErrorIDs,
                setLinkInputFormErrorIDs,
                addNewLinkHandle,
                removeLink,
                addLinkValue,
                addPlatformValue
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalValueProvider;