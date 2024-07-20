import {useState, useEffect} from "react"

const useBodyData = ()=>{

    const [listOfRest, setListOfRest] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);
    
    const fetchData = async ()=>{
    
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8909046&lng=77.62354130000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
    
            setListOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
    };

    return {listOfRest, filteredRestaurant, setFilteredRestaurant};
};

export default useBodyData;