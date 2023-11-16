//This is how we import named export
import {LOGO_URL} from "../Utils/constants"

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;