import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header"
import Body from "./Components/Body"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Error from "./Components/Error"
import RestaurantMenu from "./Components/RestaurantMenu"
import appStore from "./Utils/appStore"
import {Provider} from "react-redux"
import Cart from "./Components/Cart"


const AppContainer = ()=>{
    return (
        <Provider store={appStore}>
        <div className="App">
            <Header/>
            <Outlet />
        </div>
        </Provider>
    );
};



const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppContainer/>,
            children: [
                {
                    path: "/",
                    element: <Body />,
                },
                {
                    path: "/restaurants/:resId",
                    element: <RestaurantMenu />,
                },
                {
                    path: "/cart",
                    element: <Cart/>
                }
            ],
            errorElement: <Error />,
        },
    ],
);

const root = ReactDOM.createRoot(document.getElementById("head"));
root.render(<RouterProvider router={appRouter} />);