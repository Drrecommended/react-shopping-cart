import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const GRAB_CLOTHES = "example/GRAB_CLOTHES";
const SORT_BY_PRICE = "example/SORT_PRICE";

// 3. initial state
const clothesState = {
  clothingData: [],
};

// 4. reducer
export default (state = clothesState, action) => {
  switch (action.type) {
    case GRAB_CLOTHES:
      return { ...state, clothingData: action.payload };
    case SORT_BY_PRICE:
      return {
        ...state,
        item: action.payload,
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

function sortClothingBySize(items) {
  return {
    type: SORT_BY_PRICE,
    payload: items,
  };
}

// 6. custom hook
export function useClothes() {
  const dispatch = useDispatch();
  const clothes = useSelector((appState) => appState.clothesState.clothingData);

  const getClothing = () => dispatch(clothing());
  // const sortSize = 

  return { clothes, getClothing };
}
