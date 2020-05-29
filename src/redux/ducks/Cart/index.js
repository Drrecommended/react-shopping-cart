import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'

const ADD_CART = "example/ADD_CART"
const DELETE_ITEM = "example/DELETE_CART"
const INCREASE_QUANTITY = "example/INCREASE_QUANTITY"
const DECREASE_QUANTITY = "example/DECREASE_QUANTITY"

// 3. initial state
const cartState = {
  cart: [],
  cartVisible: false,
}

// 4. reducer
export default (state = cartState, action) => {
  switch (action.type) {
    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item
        })
      }
    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity - 1
            }
          }
          return item
        })
      }
    case ADD_CART:
      const productId = action.payload.id
      const addedItem = state.cart.find(item => item.id === action.payload.id)
      if (addedItem) {
        return {
          ...state,
          cartVisible: true, 
          cart: state.cart.map(item => {
            if (item.id === productId) {
              return {
                ...item,
                quantity: item.quantity + 1
              }
            }
            return item
          })
        }
      } else {
        const newProduct = action.payload
        newProduct.quantity = 1
        return {...state, cartVisible: true, cart: [...state.cart, newProduct] }
      }
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

function increaseItem(item) {
  return {
    type: INCREASE_QUANTITY,
    payload: item

  }
}

function decreaseItem(item) {
  return {
    type: DECREASE_QUANTITY,
    payload: item

  }
}


// 6. custom hook
export function useCart() {
  const dispatch = useDispatch()
  const cart = useSelector(appState => appState.cartState.cart)
  const cartVisible = useSelector(appState => appState.cartState.cartVisible)

  const addToCart = (item) => dispatch(addCart(item))
  const deleteCartItem = (item) => dispatch(deleteItem(item))
  const increaseCartItem = (item) => dispatch(increaseItem(item))
  const decreaseCartItem = (item) => dispatch(decreaseItem(item))

  const total = cart.reduce((item, newPrice) => item + newPrice.price, 0)


  return { 
    cart, 
    total,
    addToCart, 
    deleteCartItem,
    increaseCartItem,
    decreaseCartItem,
    }
}
