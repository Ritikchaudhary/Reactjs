import {useState, useEffect} from "react"
import {RestaurantData_URL} from "../Utils/constants"

const useRestaurantMenu = (resId)=>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(RestaurantData_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
    };

    return resInfo;
};

export default useRestaurantMenu;