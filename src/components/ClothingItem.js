import React, { useState, useEffect } from "react"
import "../styles/App.css"
import { useClothes } from '../hooks'


export default () => {
  const { clothes, getClothing } = useClothes()
  useEffect(() => {
    getClothing()
  }, [])
  return (
    <div className="clothesChest">
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