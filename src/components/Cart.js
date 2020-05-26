import React, { useState, useEffect } from "react"
import "../styles/Cart.css"
import { useClothes, useCart } from '../hooks'
import { GiShoppingCart } from 'react-icons/gi'


export default () => {
    const { cart, addToCart, deleteCartItem } = useCart()
    const { clothes, getClothing } = useClothes()
    useEffect(() => {
        getClothing()
    }, [])
  return (
  <div className="floating-cart">
    <button className="cart-close-button">X</button>
    <div className="cart-content">
        <div className="cart-header">
            <div className="bag">
                <div className="cart-quantity">{cart.length}</div>
            </div>
        </div>
        <div className="cart-container">
            {cart.map(item => {
                return (
                    <div className="container-item">
                        <div onClick={() => deleteCartItem(item.id)} className="delete-cart-item"></div>
                        <div className="item-thumb">
                            <img src={item.img.thumb} />
                        </div>
                        <div className="item-details">
                            <p className="cart-title">{item.title}</p>
                            <div>{item.size} | {item.style}</div>
                            <div>Quantity: {cart.length}</div>
                        </div>
                        <div className="item.price">
                            <p className="cart-price">{item.currencyFormat}{(item.price).toFixed(2)}</p>
                            <div>
                                <button className="product-quantity-button">-</button>
                                <button className="product-quantity-button">+</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="cart-footer">
            <div className="subtotal">SUBTOTAL</div>
            <div className="price">
                <p className="cart-total">$0.00</p>
                <div>
                    <div>or up to ....</div>
                </div>
            </div>
            <button className="checkout-button">Checkout</button>
        </div>
    </div>
  </div>
  )

}