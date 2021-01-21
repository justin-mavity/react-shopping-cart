import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContexts";

const { products, addItem } = useContext(ProductContext);

const Product = () => {
  return (
    <div className="product">
      <img src={products.image} alt={`${products.title} book`} />

      <h1 className="title">{products.title}</h1>

      <p className="price">${products.price}</p>

      <button onClick={() => addItem(products)}>Add to cart</button>
    </div>
  );
};

export default Product;
