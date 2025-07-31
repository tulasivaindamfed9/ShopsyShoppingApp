// Cart.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  applyTempUpdate,
  removeItem,
  updateTempIitem,
} from "../../Redux_toolkit/Reducers/CartSLice";
import "./Cart.css";

function Cart() {
  const { items: cartItems, temporaryItems, totalPrice } = useSelector(
    (state) => state.cart
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleBacktoproducts() {
    navigate("/productsReduxThunk");
  }

  function handleRemoveItem(id) {
    dispatch(removeItem(id));
  }

  function handleQuantityChange(id, quantity) {
    dispatch(updateTempIitem({ id, quantity }));
  }

  function handleUpdateQuantity() {
    temporaryItems.forEach((item) => {
      dispatch(applyTempUpdate(item.id));
    });
  }

  function handleClick() {
    navigate("/productsReduxThunk");
  }

  return (
    <div className="cart-page">
      <h1 className="cart-heading">Cart Products</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <button className="back-btn" onClick={handleClick}>
            Back to Products
          </button>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-row">
            {cartItems.map((each) => {
              const { images, title, price } = each;
              const quantity =
                temporaryItems.find((item) => item.id === each.id)?.quantity ??
                each.quantity;

              return (
                <div className="cart-card" key={each.id}>
                  <img src={images} alt="product" className="cart-img" />
                  <div className="cart-details">
                    <h5>{title}</h5>
                    <p>Price: ${price}</p> 
                    {/* need to change this "  * quantity" */}

                    <label>Quantity</label>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) =>
                        handleQuantityChange(each.id, parseInt(e.target.value))
                      }
                    />

                    <div className="btn-group">
                      <button onClick={handleUpdateQuantity}>Update</button>
                      <button onClick={() => handleRemoveItem(each.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <h3 className="total-price">Total Price: ${totalPrice}</h3>
          <button className="back-btn" onClick={handleBacktoproducts}>
            Back To Products
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
