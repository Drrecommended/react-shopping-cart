import React, { useState, useEffect } from "react"
import "../styles/Cart.css"
import { useClothes } from '../hooks'


export default () => {
  const { clothes, getClothing } = useClothes()
  useEffect(() => {
    getClothing()
  }, [])
  return (
  <div className="floating-cart">
    <button className="cart-button">hey</button>
    <div className="cart-content">
        <div className="cart-header">asdasdasdasfsdfsdaf</div>
        <div className="cart-container"></div>
        <div className="cart-footer"></div>
    </div>
  </div>
  )

}