import {IMG_URL} from "../Utils/constants"

const Card = (props)=>{
    //desructuring
    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo} = resData?.info;
    return (
        <div className="card">
            <img 
                className="image"
                alt = "image"
                src={IMG_URL + resData.info.cloudinaryImageId}
            />
            <h2 className="h2tag">{name}</h2>
            <h5 className="h5tag">{cuisines.join(", ")}</h5>
            <h5 className="h5tag" >{avgRating}</h5>
            <h5 className="h5tag">{costForTwo}</h5>
        </div>
    );
};

export default Card;