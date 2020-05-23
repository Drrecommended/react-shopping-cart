import React, { useState, useEffect } from "react"
import "../styles/App.css"
import { useClothes } from '../hooks'


export default ClothingHeader => {
  const { clothes, getClothing } = useClothes()
  console.log(clothes)
  useEffect(() => {
    getClothing()
  }, [])
  return (
    <div className="clothesBoxHeader">
      <div class="header">
        <small className="products">
          <span>{clothes.length} Product(s) found.</span>
        </small>
        <div className="sort">Order by<select>
          <option value="">Select</option>
          <option value="lowestprice">Lowest to highest</option>
          <option value="highestprice">Highest to lowest</option>
          </select>
        </div>
      </div>
    </div>
  )
}