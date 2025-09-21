import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addNewProduct, fetchListOfProducts } from "./api";
import { useState } from "react";

function ReactQueryDemo() {
  const [productTitle, setProductTitle] = useState("");

  const getQueryClient = useQueryClient()

  const { data: productList, isLoading } = useQuery({
    queryKey: ["productList"], //this queryKey is use to identify that what exactly we are doing
    queryFn: () => fetchListOfProducts(), //here we are providing the function to fetch the list of the products
  });

  const { mutateAsync: handleAddNewProductMutation } = useMutation({
    mutationFn: addNewProduct,
    onSuccess : ()=>{
      getQueryClient.invalidateQueries(["productList"])
    }
  });

  async function handleAddNewProduct(){
    await handleAddNewProductMutation(productTitle)
    setProductTitle("")
  }

  if (isLoading) return <h1>Loading Prducts! Please wait.</h1>;

  // console.log(query)

  return (
    <div>
      <h1>React Query Demo</h1>
      <div>
        <input
          name="name"
          placeholder="Enter product title"
          value={productTitle}
          onChange={(e) => setProductTitle(e.target.value)}
        />
        <button
          onClick={handleAddNewProduct}
          disabled={productTitle.trim() === ""}
          className="border w-fit h-fit"
          type="button"
        >
          Add new product
        </button>
      </div>
      <ul>
        {productList?.length > 0 ? (
          productList.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        ) : (
          <h3>No Product found</h3>
        )}
      </ul>
    </div>
  );
}

export default ReactQueryDemo;
