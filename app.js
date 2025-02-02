// const heading = React.createElement("h1", { id: "heading" }, "hello dojo!"); //heading -> react element & react element is nothing but a javascript object
// console.log(heading);//we find javascript object in the console
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);//this functions takes the react elememt (javascript object) and renders it to the dom(as an html tag that the browser understands)
//this render method converts the object to html tag and renders it to the dom

//nested html (parent-child relationship)

/* 
// nested html



<div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>i'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>i'm h1 tag</h1>
        <h2>i'm h2 tag</h2>
    </div>
</div> 
*/


// nested react


const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "child" }, [
    React.createElement("h1", {}, "i am an h1 tag"),
    React.createElement("h2", {}, "i am an h2 element"),
  ]),
  React.createElement("h1", { id: "child2" }, [
    React.createElement("h1", {}, "i am an h1 tag"),
    React.createElement("h2", {}, "i am an h2 element"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//but this is so difficult to write
//so we use jsx
//jsx is a syntax extension for javascript and it looks like html but it is not html
//jsx is a syntactic sugar for react.createElement method
//but react.createElement is more powerful than jsx and is the core of react 
//jsx is easier to write and understand 
//jsx is compiled to react.createElement method by babel (a javascript compiler) 
//jsx is not a 