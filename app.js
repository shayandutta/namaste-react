import React from "react";
import ReactDOM from "react-dom/client";


/*
*Header
  - Logo
  - Nav items
*Body
  - Search
  - RestaurantContainer
    - RestaurantCard
*Footer
  - CopyRight
  - Links
  - Address
  - Contact
*/

const Title = () => (
    <h1 className="heading">Namaste reaact functional ccomponent</h1>
);




const HeaadingComponents = () => {
  return (
    <div id="container">
      <h1>{console.log("hello")}</h1>
      {Title()} {/*can call functions also inside functional components*/}
      {/* <Title/> */}
      <h1 className="heading">Namaste react functional component</h1>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeaadingComponents/>)