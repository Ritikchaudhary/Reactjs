import {IMG_URL} from "../Utils/constants"
import {useDispatch} from "react-redux"
import {addItem, removeItem} from "../Utils/cartSlice"
import {useSelector} from "react-redux"

const ItemList = ({items}) => {

    const cartItems = useSelector((store) => store.cart.items);

    const IsItemPresent = (item)=> cartItems.some((cartItem)=>cartItem?.card?.info?.id === item?.card?.info?.id);

    const dispatch = useDispatch();

    const handleClick = (item)=>{
        if(IsItemPresent(item)){
            dispatch(removeItem({id: item?.card?.info?.id}));
        }
        else{
            dispatch(addItem(item));
        } 
    }

    return (
        <div>
            {items.map((item)=>(
                <div key={item?.card?.info?.id} className="border-b-2 px-2 py-4 mt-2 flex justify-between">
                    <div className="w-9/12 py-3">
                        <div>
                            <span className="font-semibold">{item?.card?.info?.name}</span>
                            <span className="font-semibold"> - ₹{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                        </div>
                            <p className="py-3 text-sm text-gray-600">{item?.card?.info?.description}</p>
                    </div>

                    <div className="w-3/12 p-3">
                        <div className="absolute mx-11 mt-28">
                            <button onClick={()=>handleClick(item)} className="rounded-lg px-3 py-1 bg-black text-white">{IsItemPresent(item) ? "Remove" : "Add"}</button>
                        </div>
                        <img className="rounded-lg w-40 h-32" src={IMG_URL + item?.card?.info?.imageId}></img>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;