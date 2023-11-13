import React from "react"
import ReactDOM from "react-dom/client"

//React Element
const heading = <h1>Namastey React using JSX</h1>;

//React Components
const HeadingComponent = ()=>(
    <h3>Namastey React from Functional component 1</h3>
);

const HeadingComponent2 = ()=>{
    return <h2>Namastey React from Functional component 2</h2>;
};

// using this '{}' brackets we can execute any javascript code inside the React component.
// diffrent ways to render react components inside the other components or React Element.
const NestedElements = ()=>(
    <div id="container">
        {heading}
        {HeadingComponent()}
        <HeadingComponent/>
        <HeadingComponent2></HeadingComponent2>
        <h1>Namastey React from container</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("head"));

//Rendering a component
root.render(<NestedElements/>);
