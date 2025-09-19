import React, { useMemo, useState } from "react";
import useFetch from "../../hooks/useFetch";

const UseMemoExample = () => {
  const { data, loading } = useFetch("https://dummyjson.com/products");
  const [flag, setFlag] = useState(false);

  function filterProductByPrice(getProducts) {
    console.log("this function is getting rendered ");
    return getProducts?.length > 0
      ? getProducts.filter((singleProductItem) => singleProductItem.price > 10)
      : [];
  }

  //here it will render the whole component of the text which are coming from the useFetch everytime when we clicks the button . it shouldn't re-render as its just the same as before only the color of the above text color should change

  //useMemo will memorize the value and useCallback will memorize the function

  const memorizedVersion = useMemo(
    () => filterProductByPrice(data?.products),
    [data?.products]
  );
  //here we are telling that don't render this function everytime , only render it when the dependancy arrays data i.e data?.products value changes

  if (loading) return <h1>Loading data! Please wait</h1>;
  console.log(data);
  return (
    <div>
      <h1
        className={
          flag
            ? "text-red-400 font-bold text-2xl"
            : "text-black font-bold text-2xl"
        }
      >
        Use Memo
      </h1>
      <button className="border px-2 py-1" onClick={() => setFlag(!flag)}>
        Toggle Flag
      </button>
      <ul>
        {/* {filterProductByPrice(data?.products).map((item) => (
          <li>{item.title}</li>
        ))} */}
        <br /><br /><br /><br />
        {memorizedVersion.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemoExample;
