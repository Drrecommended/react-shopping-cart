import React, { useState, useEffect } from "react"
import "../styles/App.css"
import { useClothes } from '../hooks'


export default clothingBox => {
  const { clothes, getClothing } = useClothes()
  console.log(clothes)
  useEffect(() => {
    getClothing()
  }, [])
  return (
    <div className="clothes-box">
      <div class="header">
        <small className="products">
          <span>16 Product(s) found.</span>
        </small>
        <div className="sort">Order by<select>
          <option value="">Select</option>
          <option value="lowestprice">Lowest to highest</option>
          <option value="highestprice">Highest to lowest</option>
          </select>
        </div>
      </div>
      {clothes.map(item => {
        return (
          <div className="item">
            <img src={item.img.normal} />
            <h1 className="title">{item.title}</h1>
            <div>{item.currencyFormat}{item.price}</div>
            <div>or {item.installments} x${item.price / item.installments}</div>
            <button className="buy-button">Add to cart</button>
          </div>
        )
      })}
  
    </div>
  )
}
