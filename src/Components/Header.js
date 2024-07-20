//This is how we import named export
import {LOGO_URL} from "../Utils/constants"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

const Header = ()=>{

    const cartItems = useSelector((store)=> store.cart.items);

    return (
        <div className="flex h-24 justify-between shadow-lg mb-5 bg-white">
            <div className="ml-28">
            <Link to="/"><img alt = "logo-image" className="h-24" src={LOGO_URL}/></Link>
            </div>

            <div className="flex items-center mr-24">
                <ul className="flex items-center mr-7">
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/cart">Cart - ({cartItems.length} Items)</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;