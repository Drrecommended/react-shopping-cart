import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'

const GET_CART = "example/GET_CART"

// 3. initial state
const cartState = {
  clothingState: []
}

// 4. reducer
export default (state = cartState, action) => {
  console.log(action)
  switch (action.type) {
    case GET_CART:
      return { ...state, clothingState: action.payload }
    default:
      return state
  }
}

// 5. action creators
function shoppingCart() {
  return dispatch => {
    axios.get('/products').then(resp =>{
      dispatch({
        type: GET_CART,
        payload: resp.data
      })
    })
  }
}


// 6. custom hook
export function useCart() {
  const dispatch = useDispatch()
  const cart = useSelector(appState => {
    return appState.cartState.clothingState 
  }) 

  const getCart = () => dispatch(shoppingCart())
  

  return { cart, getCart }
}
