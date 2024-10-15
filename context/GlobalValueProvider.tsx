"use client";

import React, { useEffect, useState } from 'react';
import { DevLinkType, PlatformValue } from "@/interface";
import { createContext } from "react";
import axios from 'axios';


interface GlobalValues {
    profileDatabaseID: string | null,
    setProfileDatabaseID: React.Dispatch<React.SetStateAction<string | null>>;
    devLinksDatabaseID: string | null,
    setDevLinksDatabaseID: React.Dispatch<React.SetStateAction<string | null>>;
    devLinks: DevLinkType[];
    setDevLinks: React.Dispatch<React.SetStateAction<DevLinkType[]>>;
    linkInputFormErrorIDs: number[];
    setLinkInputFormErrorIDs: React.Dispatch<React.SetStateAction<number[]>>;
    addNewLinkHandle: () => void;
    removeLink: (id: number) => void;
    addLinkValue: (id: number, value: string) => void;
    addPlatformValue: (id: number, value: PlatformValue) => void;
}

export const GlobalContext = createContext<GlobalValues | null>(null);


const GlobalValueProvider = ({ children }: { children: React.ReactNode; }) => {

    const [devLinks, setDevLinks] = useState<DevLinkType[]>([]);
    const [linkInputFormErrorIDs, setLinkInputFormErrorIDs] = useState<number[]>([]);
    const [devLinksDatabaseID, setDevLinksDatabaseID] = useState<string | null>(null);
    const [profileDatabaseID, setProfileDatabaseID] = useState<string | null>(null);


    const addNewLinkHandle = () => {

        const id = Math.floor(Math.random() * (99999999 - 100) + 100);

        setDevLinks(prev => {
            if (prev.length == 0) {
                return [{ id, platFormName: "", link: "" }];
            }

            return [...prev, { id, platFormName: "", link: "" }];
        });
    };

    const removeLink = (id: number) => {
        setDevLinks(prev => {
            const newData = prev.filter(item => item.id != id);
            return newData;
        });
    };

    const addLinkValue = (id: number, value: string) => {
        setDevLinks(prev => {
            return prev.map((item) => {
                if (item.id === id) {
                    return { ...item, link: value.trim() };
                }

                return item;
            });
        });
    };

    const addPlatformValue = (id: number, value: PlatformValue) => {
        setDevLinks(prev => {
            return prev.map((item) => {
                if (item.id === id) {
                    return { ...item, platFormName: value };
                }

                return item;
            });
        });
    };



    useEffect(() => {

        const fetchDevLinks = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/devlink");
                console.log(response.data.devLinks);

                setDevLinks(response.data.devLinks || []);
                setDevLinksDatabaseID(response.data._id);
                console.log(response.data._id);

            } catch (error) {
                console.log(error);
            }
        };

        fetchDevLinks();

    }, []);


    return (
        <GlobalContext.Provider
            value={{
                profileDatabaseID,
                setProfileDatabaseID,
                devLinks,
                setDevLinks,
                linkInputFormErrorIDs,
                setLinkInputFormErrorIDs,
                addNewLinkHandle,
                removeLink,
                addLinkValue,
                addPlatformValue,
                devLinksDatabaseID,
                setDevLinksDatabaseID
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalValueProvider;