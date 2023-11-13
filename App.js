import React from "react"
import ReactDOM from "react-dom/client"


const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
            <img className="logo" src="https://cdn3.vectorstock.com/i/1000x1000/73/07/cooking-and-restaurant-logo-design-vector-29707307.jpg"/>
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

const Card = ()=>{
    return (
        <div className="card">
            <img 
                className="image"
                alt = "image"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf"
            />
            <h2 className="h2tag"> Meghana Foods</h2>
            <div>
            <h5 className="h5tag">Biryani, North Indian, Asian</h5>
            <h5 className="h5tag" >4.4 Stars</h5>
            <h5 className="h5tag">25 Mins</h5>
            </div>
        </div>
    );
};

const Body = ()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="card-container">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
};

const AppContainer = ()=>{
    return (
        <div className="App">
            <Header/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("head"));
root.render(<AppContainer/>);
