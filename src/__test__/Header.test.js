import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from "../Components/Header"
import appStore from "../Utils/appStore";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"

it("should render Header component successfully", ()=>{
    render(
    <Provider store={appStore}>
    <BrowserRouter>
    <Header/>
    </BrowserRouter> 
    </Provider> 
    );

    const heading = screen.getByAltText("logo-image");
    expect(heading).toBeInTheDocument();
})