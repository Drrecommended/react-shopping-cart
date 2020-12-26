import React, { useState, useEffect } from "react"
import "../styles/Cart.css"
import { useClothes, useCart } from '../hooks'
import { GiShoppingCart } from 'react-icons/gi'

export default () => {
    const { cart, addToCart } = useCart()
    const { clothes, getClothing } = useClothes()
    useEffect(() => {
        getClothing()
    }, [])
        return (
            <div className="container-item">
                <div className="item-thumb">
                    <img src={item.img.thumb} />
                </div>
            </div>
        )

}