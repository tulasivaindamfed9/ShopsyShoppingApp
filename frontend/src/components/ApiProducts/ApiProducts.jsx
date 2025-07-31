import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ApiProducts.css";
// importing userName from LoginFormSlice.js reducer(username which is dispatched from LoginRedux.jsx to slice)
import { useSelector } from 'react-redux';

function ApiProducts() {
  // reducer value
  const userFromReducer=useSelector((globalData)=>globalData.login)
  debugger
  console.log(userFromReducer.userName)

  const [data, setData] = useState([]);
  const [optionValue, setOptionValue] = useState();
  // defining new product to add in products data
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    brand: "",
    category: "",
    image: "",
  });
  // updating newly added product(obj) data
  function handleChange(e) {
    const { name, value } = e.target;
    setNewProduct((pre) => ({
      ...pre,
      [name]: value,
    }));
  }

  // function to add new product
  async function handleAddProduct() {
    try {
      const product = await axios.post(
        "https://fakestoreapi.in/api/products",
        newProduct
      );
      console.log(newProduct);
      // appending newly added product to already existing data
      setData((pre) => [...pre, newProduct]);
    } catch (err) {
      console.log("error adding the product");
    }
  }

  // function to get products from api call
  async function handleProducts() {
    try {
      const url = await axios.get("https://fakestoreapi.in/api/products");
      debugger;
      const response = url.data.products;
      console.log(response);
      setData(response);
      setOriginalData(response);

      // display unique category in the response
      // const uniqueCategory = [
      //   ...new Set(response.map((item) => item.category)),
      // ];
      // console.log(uniqueCategory);
    } catch (err) {
      console.log("error fetching the products", err);
    }
  }

  // useeffect to display filtered data if option is selected
  const [originalData, setOriginalData] = useState([]);
  useEffect(() => {
    if (optionValue) {
      const filteredData = originalData.filter((each) => {
        return each.category === optionValue;
      });
      setData(filteredData);
    } else {
      setData(originalData);
    }
  }, [optionValue, originalData]);

  // function to update handleFilterData
  function handleFilterData(e) {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  }

  return (
    <>
    <h1>Hello {userFromReducer.userName}, it's great to have you here. Happy shopping</h1>
      {/* botton to add a new product */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <input
              type="text"
              name="title"
              placeholder="Product Title"
              value={newProduct.title}
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newProduct.price}
              onChange={handleChange}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={newProduct.category}
              onChange={handleChange}
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={handleChange}
            />
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              value={newProduct.brand}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <button
        style={{ backgroundColor: "lightgreen" }}
        type="submit"
        onClick={handleAddProduct}
      >
        Add Product
      </button>

      <button
        style={{ backgroundColor: "lightcoral", margin: "10px" }}
        onClick={handleProducts}
      >
        Show Products List
      </button>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <select onChange={handleFilterData}>
              <option value="audio">Audio</option>
              <option value="gaming">Gaming</option>
              <option value="mobile">Mobile</option>
              <option value="tv">TV</option>
            </select>
          </div>
          {data.map((each, index) => {
            return (
              <div className="col-3" key={index}>
                <div
                  className="card"
                  style={{
                    width: "18rem",
                    display: "flex",
                    gap: "20px",
                    justifyContent: "space-between",
                  }}
                >
                  <img src={each.image} className="card-img-top" alt="img" />
                  <div className="card-body">
                    <h5 className="card-title">{each.title}</h5>
                    <p className="card-text">Category: {each.category}</p>
                    <h6>Brand: {each.brand}</h6>
                    <h4>Price: ${each.price}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ApiProducts;
