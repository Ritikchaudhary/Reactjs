import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header"
import Body from "./Components/Body"

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