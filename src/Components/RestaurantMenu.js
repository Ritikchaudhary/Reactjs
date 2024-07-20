import {useParams} from "react-router-dom"
import useRestaurantMenu from "../Utils/useRestaurantMenu"
import Shimmer from "./Shimmer"
import OfferCard from "./OfferCard"
import RestaurantCategory from "./RestaurantCategory"
import {useState} from "react"

const RestaurantMenu = ()=>{

    const {resId} = useParams();
    const resData = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);

    if(resData === null){
        return <Shimmer />;
    }

    console.log(resData);

    const {name, cuisines, areaName, avgRatingString, totalRatingsString, feeDetails, sla, costForTwo} = resData?.cards[2]?.card?.card?.info;

    const categories = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((category) => category.card
    ?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


    return (
        <div className="restaurant-menu mt-14">
            <div className="flex ml-56 mr-96 p-2 justify-between mb-7 border-b-2 pb-8">
                <div className="restaurant-name-info">
                    <h3 className="font-bold text-lg mb-3">{name}</h3>
                    <p className="cuisine-text">{cuisines.join(", ")}</p>
                    <p className="mb-3">{areaName}</p>
                    <div className="flex">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                        </svg>
                        <p className="ml-2">{feeDetails.message}</p>
                    </div>
                    
                </div>

                <div className="flex flex-col border border-solid rounded-2xl border-gray-300 px-2">
                    <h5 className="flex justify-evenly my-4 ml-0 px-1 mb-4 font-bold text-green-700">{
                            <svg className="h-6 w-6 fill-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                        }{avgRatingString}</h5>
                        
                        <h5 className="items-center border-t-2 py-4">{totalRatingsString}</h5>
                </div>
            </div>

            <div className="flex flex-col ml-56 mr-96 pb-12 border-b-2">
                <div className="flex p-2 mt-0 pt-0 pb-7">
                    <div className="flex mr-4">
                        <svg className="px-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                        </svg>
                        <h4 className="px-4 font-bold">{sla.deliveryTime + " MINS"}</h4>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clip-rule="evenodd" />
                        </svg>
                        <h4 className="pl-2 mx-1 font-bold">{"Rs."} {costForTwo/100 + " for two"}</h4>
                    </div>
                </div>
                <div>
                    {
                        <div className="flex">
                            <OfferCard />
                            <OfferCard />
                            <OfferCard />
                            <OfferCard />
                        </div>
                    }
                </div>
            </div>

            <div className="p-10">
                {
                    categories.map((category, index) => (
                    <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card} 
                    showItems={index === showIndex ? true : false}
                    setIndex={()=> setShowIndex(index)}
                    />
                    ))
                }
            </div>
        </div>
    );


};

export default RestaurantMenu;