import React, { useEffect, useState } from "react";
import "./product.css";

import NavBarUser from "../../components/navBarUser/navBarUser";
import getAllProducts from "../../services/products";

function Products () {
  const [products, setProducts] = useState();
  
  useEffect(() => {
    getAllProducts()
      .then(response => setProducts(response));
  }, []);
  console.log(products);
  return (
    <div>
      <NavBarUser />
      <div className="productList">
        {
          products?.map(product => (
            <button className="product" key={product.id}>
              <p className="name">{ product.name }</p>
              <div className="price" key={product.id}>R${ product.price}</div>
            </button>
          ))
        }
      </div>
    </div>
  );
}

export default Products;