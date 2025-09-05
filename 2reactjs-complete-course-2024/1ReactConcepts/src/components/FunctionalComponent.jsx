// function FunctionalComponent(){
//     return (
//         <div>
//             <h4>
//                 from Functional component
//             </h4>
//         </div>
//     )
// }

import ProductList from "./products";

//creating using arrow function
const FunctionalComponent = () => {
  return <div>
    {/* from Functional component */}
    <ProductList/>
  </div>;
};

export default FunctionalComponent;
