function ButtonComponent(){
    return <button className="border px-3 py-1 mx-2">Click</button>
}

function ProductItem(){
    return <div>
        <p>Product 1</p>
        <ButtonComponent/>
    </div>
}

export default ProductItem