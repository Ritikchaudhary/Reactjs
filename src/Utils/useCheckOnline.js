import {useState, useEffect} from "react"

const useCheckOnline = ()=>{

    const[status, setStatus] = useState(true);

    useEffect(()=>{

        window.addEventListener("online",()=>{
            setStatus(true);
        });
    
        window.addEventListener("offline", ()=>{
            setStatus(false);
        });
    
    }, []);

    return status;
};

export default useCheckOnline;