import ItemList from "./ItemList";
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import {clearCart} from "../Utils/cartSlice"

const Cart = ()=>{
    const cartItems = useSelector((store)=> store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart =()=>{
        dispatch(clearCart());
    }

    return (
        <div>
            <h1 className="text-center text-2xl font-bold m-4 p-4">Cart</h1>
            <div className="w-6/12 m-auto">
                {cartItems.length === 0 && <h1 className="text-center"> Your Cart is Empty! </h1>}
                <ItemList items={cartItems}/>
            </div>
            <div className="text-center w-6/12 m-auto p-8">
            {
               cartItems.length!==0 && <button onClick={handleClearCart} className="text-white bg-black rounded-lg p-1 px-2">
                Clear Cart
                </button>
            }
            </div>
        </div>
    );
};

export default Cart;