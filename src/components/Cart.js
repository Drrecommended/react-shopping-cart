import React, { useEffect } from "react";
import "../styles/Cart.css";
import { useClothes, useCart } from "../hooks";
import { GiShoppingCart } from "react-icons/gi/";
import { FaTimes } from "react-icons/fa/";

export default () => {
  const {
    cart,
    cartVisible,
    addToCart,
    deleteCartItem,
    increaseCartItem,
    decreaseCartItem,
    total,
  } = useCart();

  const { clothes, getClothing } = useClothes();
  
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  useEffect(() => {
    getClothing();
  }, []);
  return (
    <div className="floating-cart ">
      <button className={cartVisible ? "" : "hidden"}>X</button>
      <div className="cart-content">
        <div className="cart-header">
          <div className="bag">
            <GiShoppingCart size={50} />
            <div className="cart-quantity">{cart.length}</div>
          </div>
        </div>
        <div className="cart-container">
          {cart.map((item) => {
            return (
              <div className="container-item">
                <div
                  onClick={() => deleteCartItem(item.id)}
                  className="delete-cart-item"
                >
                  <FaTimes />
                </div>
                <div className="item-thumb">
                  <img src={item.img.thumb} />
                </div>
                <div className="item-details">
                  <p className="cart-title">{item.title}</p>
                  <div>
                    {item.size} | {item.style}
                  </div>
                  <div>Quantity: {item.quantity}</div>
                </div>
                <div className="item.price">
                  <p className="cart-price">
                    {formatter.format(item.price * item.quantity)}
                  </p>
                  <div>
                    <button
                      disabled={item.quantity <= 1}
                      className="product-quantity-button"
                      onClick={() => decreaseCartItem(item.id)}
                    >
                      -
                    </button>
                    <button
                      className="product-quantity-button"
                      onClick={() => {
                        increaseCartItem(item.id);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-footer">
          <div className="subtotal">SUBTOTAL</div>
          <div className="price">
            <p className="cart-total">{formatter.format(total)}</p>
            <div>or up to {total.installments}</div>
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
};
