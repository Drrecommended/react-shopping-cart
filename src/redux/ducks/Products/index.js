import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const GRAB_CLOTHES = "example/GRAB_CLOTHES";
const SORT_BY_PRICE = "example/SORT_BY_PRICE";

// 3. initial state
const clothesState = {
  clothingData: [],
};

// 4. reducer
export default (state = clothesState, action) => {
  switch (action.type) {
    case GRAB_CLOTHES:
      return {
        ...state,
        clothingData: action.payload,
        filteredData: action.payload,
      };
    case SORT_BY_PRICE:
      return {
        ...state,
        filteredData: action.payload.clothingData,
        sort: action.payload.sort,
      };
    default:
      return state;
  }
};

// 5. action creators
function clothing() {
  return (dispatch) => {
    axios.get("/products").then((resp) => {
      dispatch({
        type: GRAB_CLOTHES,
        payload: resp.data,
      });
    });
  };
}

function fliterProductBySize(products, sort) {
  if (sort != "") {
    products.sort((a, b) =>
      sort === "lowestprice"
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? 1
        : -1
    );
  } else {
    products.sort((a,b) => a.id > b.id ? 1 : -1)
  }
  return {
    type: SORT_BY_PRICE,
    payload: {
      sort: sort,
      items: products,
    },
  };
}

// 6. custom hook
export function useClothes() {
  const dispatch = useDispatch();
  const clothes = useSelector((appState) => appState.clothesState.clothingData);

  const getClothing = () => dispatch(clothing());
  const sortSize = () => dispatch(fliterProductBySize())

  // const total = cart.reduce((item, newPrice) => item + (newPrice.price * newPrice.quantity), 0);

  return { clothes, getClothing, sortSize };
}
