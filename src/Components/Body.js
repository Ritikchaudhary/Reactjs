import Card from "./Card"
import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import Shimmer from "./Shimmer"
import useBodyData from "../Utils/useBodyData"
import useCheckOnline from "../Utils/useCheckOnline"

const Body = ()=>{

const [searchText, setSearchText] = useState("");
const {listOfRest, filteredRestaurant, setFilteredRestaurant} = useBodyData();

const status = useCheckOnline();

if(status === false)
{
    return <h2>You are Offline!!!</h2>;
}


    if(listOfRest.length === 0)
    {
        return <Shimmer/>;
    }

    return (

        <div className="body">
            <div className="lg:flex lg:items-center lg:ml-28">
                <div className="m-4 p-4">
                    <input className="border border-solid border-black mr-6 pl-1 rounded-lg" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}>
                    </input>
                    <button className="px-3 py-1 bg-black text-white rounded-lg"
                        onClick={()=>{
                            const filteredRestaurant = listOfRest.filter((res)=>{return res.info.name.toLowerCase().includes(searchText.toLowerCase())});
                            setFilteredRestaurant(filteredRestaurant);
                        }}
                        >Search
                    </button>
                </div>

                <div className="p-3 m-4">
                    <button className="border border-solid border-black bg-gray-200 hover:bg-gray-300 p-1 px-3 rounded-lg" onClick={()=>{
                        const filteredList = listOfRest.filter((res)=> res.info.avgRating > 4.2);
                        setFilteredRestaurant(filteredList);
                    }} 
                    >Top Rated Restaurant
                    </button>
                </div>
            </div>
            
            <div className="flex flex-wrap ml-28">
                {   //traversing on all the objects of array of object
                    filteredRestaurant.map((restaurant)=> (
                        <Link style={{textDecoration: "none"}} to={/restaurants/ + restaurant.info.id} key={restaurant.info.id}><Card resData={restaurant} /></Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;