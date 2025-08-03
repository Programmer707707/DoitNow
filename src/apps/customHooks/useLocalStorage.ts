import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue: T){

    const getStoredValue = () => {
        const stored = localStorage.getItem(key);
        if(stored !== null){
            try{
                return JSON.parse(stored) as T;
            }
            catch(e){
                console.error("Failed to parse localStorage value", e);
            }
        }
        return initialValue;
    }

    const [value, setValue] = useState<T>(getStoredValue);

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value));
    }, [value,key]);

    return [value, setValue] as const;
}

export default useLocalStorage;