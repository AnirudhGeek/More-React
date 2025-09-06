import { useEffect, useState } from "react";
import ProductItem from "./components/productItem";

const dummyProductData = ["Product 1", "Product 2", "Product 3"];

function ProductList(props) {
  const { name, city } = props;

  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const [changeStyle, setChangeStyle] = useState(false);

  const handleToggleText = () => {
    {
      setFlag((prev) => !prev);
    }
  };

  //useEffect is use to handle any kind of side effects
  useEffect(() => {
    console.log("Run only once on the page load");
  }, []); //this will only run on mount / on mount

  function handleIncreaseCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("Count Changes");
    if (count >= 10) {
      setChangeStyle(true);
    }

    //unmounting the component
    return () => {
      console.log("Component is unmounted  => do some side effects here also ");
    };
  }, [count]);

  return (
    <div>
      <h3>ECommerce 2025</h3>
      <h5>
        Name is {name} and city is {city}.
      </h5>

      {flag ? (
        <h4>
          {name} and {city}
        </h4>
      ) : (
        <h4>hello</h4>
      )}

      <div>
        <button
          className={`border px-3 py-1 mx-2 mb-2 rounded ${
            changeStyle ? "bg-black text-white font-medium" : "font-medium"
          }`}
          onClick={handleIncreaseCount}
        >
          Increase count
        </button>
        <span>Count is {count}</span>
      </div>

      <button className="border px-3 py-1 mx-2" onClick={handleToggleText}>
        Toggle text
      </button>
      {/* <ProductItem/> */}
      <ul>
        {dummyProductData.map((item, index) => (
          <ProductItem singleProductItem={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
