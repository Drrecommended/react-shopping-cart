import React, { useEffect } from "react";
import "../styles/App.css";
import { useClothes, useCart } from "../hooks";
import { ClothingHeader } from "./Filter";

export default (ClothingHeader) => {
  const { cart, addToCart } = useCart();
  const { clothes, getClothing } = useClothes();
  useEffect(() => {
    getClothing();
  }, []);
  return (
    <div className="clothesChest">
      {clothes.map((item) => {
        return (
          <div onClick={() => addToCart(item)} className="item">
            <div className={item.isFreeShipping ? "Free-Shipping" : "hidden"}>
              Free shipping
            </div>
            <div className="imageBox">
              <img src={item.img.normal} />
            </div>
            <p className="title">{item.title}</p>
            <div className="price-shelf">
              <div>
                {item.currencyFormat}
                {item.price.toFixed(2)}
              </div>
              <div className="install">
                or {item.installments} x$
                {(item.price / item.installments).toFixed(2)}
              </div>
            </div>
            <div className="buy-button">Add to cart</div>
          </div>
        );
      })}
    </div>
  );
};
