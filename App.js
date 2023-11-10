const heading = React.createElement("div", {id: "heading"}, React.createElement("div", {id: "child 1"},
[React.createElement("h1", {},"Heading 1"), React.createElement("h2", {}, "Heading 2")]));

const root = ReactDOM.createRoot(document.getElementById("head"));

root.render(heading);