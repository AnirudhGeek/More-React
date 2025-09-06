import React from "react";
import ClassBasedComponent from "./components/ClassBasedComponets";
import FunctionalComponent from "./components/FunctionalComponent";
import ProductList from "./components/products";

const App = () => {
  return (
    <div>
      <h1>React Js Concepts</h1>
      {/* <ClassBasedComponent /> */}
      {/* <FunctionalComponent/> */}
      <ProductList name="Anirudh" city="ABC"/>
    </div>
  );
};

export default App;
