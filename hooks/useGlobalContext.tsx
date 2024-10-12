import { GlobalContext } from '@/context/GlobalValueProvider';
import { useContext } from 'react';

const useGlobalContext = () => {

    const GlobalContextValues = useContext(GlobalContext);

    if (GlobalContextValues === null)
        throw new Error("Wrap the root component using GlobalContextProvider");

    return GlobalContextValues;
};

export default useGlobalContext;