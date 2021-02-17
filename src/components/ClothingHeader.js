import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { useClothes } from "../hooks";

export default (ClothingHeader) => {
  const { clothes, getClothing, sortSize} = useClothes();
  useEffect(() => {
    getClothing();
  }, []);

  
  return (
    <div className="clothesBoxHeader">
      <div className="header">
        <small className="products">
          <span>{clothes.length} Product(s) found.</span>
        </small>
        <label className="sort">
          Order by
          <select onChange={(e) => sortSize()}>
            <option value="">Select</option>
            <option value="lowestprice">Lowest to highest</option>
            <option value="highestprice">Highest to lowest</option>
          </select>
        </label>
      </div>
    </div>
  );
};
