import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'

const ADD_CART = "example/ADD_CART"
const DELETE_ITEM = 'example/DELETE_CART'

// 3. initial state
const cartState = {
  cart: []
}

// 4. reducer
export default (state = cartState, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_CART:
      const addedItem = state.cart.find(item => item.id === action.payload.id)
      return { ...state, cart: [...state.cart, action.payload]}
    case DELETE_ITEM:
      const newCart = state.cart.filter(item => item.id !== action.payload)
      return { ...state, cart: newCart}
    default:
      return state
  }
}

// 5. action creators
function addCart(item) {
  return {
      type: ADD_CART,
      payload: item
  }
}

function deleteItem(item) {
  return {
      type: DELETE_ITEM,
      payload: item
  }
}


// 6. custom hook
export function useCart() {
  const dispatch = useDispatch()
  const cart = useSelector(appState => {
    return appState.cartState.cart
  }) 

  const addToCart = (item) => dispatch(addCart(item))
  const deleteCartItem = (item) => dispatch(deleteItem(item))

  return { cart, addToCart, deleteCartItem }
}
