import React, { useState, useEffect } from "react";
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
  console.log(clothes)
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
            console.log(cart);
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
                    {item.currencyFormat}
                    {item.price.toFixed(2) * item.quantity}
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
                      onClick={(addToCart) => increaseCartItem(item.id)}
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
            <p className="cart-total">$ {total.toFixed(2)}</p>
            <div>or up to {total.installments}</div>
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
};
