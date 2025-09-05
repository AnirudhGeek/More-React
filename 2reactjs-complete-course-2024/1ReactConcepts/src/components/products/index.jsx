import ProductItem from "./components/productItem";

const dummyProductData = ["Product 1", "Product 2", "Product 3"];

function ProductList(props) {
  const { name, city } = props;
  return (
    <div>
      <h3>ECommerce 2025</h3>
      <h5>
        Name is {name} and city is {city}.
      </h5>
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
