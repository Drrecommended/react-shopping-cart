import React, { useState, useEffect } from "react"
import "../styles/App.css"
import ClothingHeader from './ClothingHeader'
import ClothingItem from './ClothingItem'
import Cart from './Cart.js'


export default () => {
  return (
    <div className="app">
      <div>
        <ClothingHeader />
        <ClothingItem />
      </div>
      <Cart />
    </div>
    
  )
}
