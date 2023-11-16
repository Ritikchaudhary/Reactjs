import Card from "./Card"
import resList from "../Utils/hardData"

const Body = ()=>{
    return (
        <div className="body">

            <div className="search">Search</div>

            <div className="card-container">
                {   //traversing on all the objects of array of object
                    resList.map((restaurant)=> (
                        <Card key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;