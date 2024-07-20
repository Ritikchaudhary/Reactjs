import {IMG_URL} from "../Utils/constants"

const Card = (props)=>{
    //desructuring
    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo} = resData?.info;
    return (
        <div className="m-4 p-4 w-[225px] bg-white rounded-lg hover:shadow-xl">
            <img
                className="w-60 h-48 mb-4 rounded-lg"
                alt = "image"
                src={IMG_URL + resData.info.cloudinaryImageId}
            />
            <div className="ml-3">
                <h2 className="mb-2 font-bold whitespace-nowrap overflow-hidden text-ellipsis">{name}</h2>
                <h5 className="mb-2 whitespace-nowrap overflow-hidden text-ellipsis">{cuisines.join(", ")}</h5>
                <h5 className="mb-2">{avgRating}⭐</h5>
                <h5 className="mb-2">{costForTwo}</h5>
            </div>
        </div>
    );
};

export default Card;