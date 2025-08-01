// ProductsReduxThunk.jsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux_toolkit/Reducers/ProductsReduxThunkSlice";
import { addToCart } from "../../Redux_toolkit/Reducers/CartSLice";
import "./ProductsReduxThunk.css";

function ProductsReduxThunk() {
  const dispatch = useDispatch();


  const products = useSelector(
    (globalState) => globalState.beauty.beautyProducts
  );
  console.log(products)
  const user = useSelector((state) => state.login.userName);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="products-page">
      <h1 className="welcome-msg">
        Hello {user}, shop your favourite products on a budget!
      </h1>
      <div className="products-container">
        {products.map((each) => (
          <div className="product-card" key={each.id}>
            <img src={each.images} alt="product" className="product-img" />
            <div className="product-details">
              <h5>{each.title}</h5>
              <p>Category: {each.category}</p>
              <h4>Price: ${each.price}</h4>
              <button
                className="add-to-cart-btn"
                onClick={() => dispatch(addToCart(each))}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsReduxThunk;
