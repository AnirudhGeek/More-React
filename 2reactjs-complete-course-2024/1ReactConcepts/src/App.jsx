import React from "react";
import ClassBasedComponent from "./components/ClassBasedComponets";
import FunctionalComponent from "./components/FunctionalComponent";
import ProductList from "./components/products";
import { Users } from "./components/users";
import ContextButtonComponent from "./components/context-concept/button";
import ContextTextComponent from "./components/context-concept/text";
import ToggleFromFunction from "./components/context-concept/button2";
import UseReducerExample from "./components/useReducer-Example";
import FormComponent from "./components/form";

const App = () => {
  return (
    <div>
      <h1>React Js Concepts</h1>
      {/* <ClassBasedComponent /> */}
      {/* <FunctionalComponent/> */}
      {/* <ProductList name="Anirudh" city="ABC"/> */}
      {/* <Users/> */}
      {/* <ContextButtonComponent/>
      <ContextTextComponent/>  
      <ToggleFromFunction/> */}

      {/* <UseReducerExample/>   */}

      <FormComponent/>

    </div>
  );
};

export default App;
