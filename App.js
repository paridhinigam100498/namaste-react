//getting from node-modules
import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "hiiiii from react");
// console.log("heading",heading)//returning object


const Title = () => (
  <h1 className="heading" tabIndex="5">
    Namaste React Using JSX
  </h1>
);

const HeadingComponent = () => (
  <>
    <div id="container">
      <Title />
      <h1 className="heading">Namaste React Functional componenet</h1>
    </div>
    <div id="container-2"></div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
