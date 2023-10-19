//getting from node-modules
import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "hiiiii from react");
console.log("heading",heading)//returning object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
