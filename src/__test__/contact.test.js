import Contact from "../Components/Contact";
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"

it("should test contact Us Page", ()=>{
    render(<Contact/>);
    const heading = screen.getByText("Contact US");
    expect(heading).toBeInTheDocument();
})