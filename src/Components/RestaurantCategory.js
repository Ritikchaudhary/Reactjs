import ItemList from "./ItemList"

const RestaurantCategory = ({data, showItems, setIndex})=>{

    const handleClick = ()=>{
        setIndex();
    }
    return (
        <div>
            <div className="border border-gray w-full md:w-6/12 p-5 mb-4 shadow-lg rounded-md ml-72 mr-96 cursor-pointer" onClick={handleClick}>
                <div className="flex justify-between" >
                    <span className="font-bold">{data?.title} ({data?.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                    {showItems && <ItemList items={data?.itemCards}/>}
            </div>
        </div>
    );

};

export default RestaurantCategory;