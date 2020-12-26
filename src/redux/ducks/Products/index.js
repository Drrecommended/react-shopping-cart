import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'

const GRAB_CLOTHES = "example/GRAB_CLOTHES"

// 3. initial state
const clothesState = {
  clothingData: []
}

// 4. reducer
export default (state = clothesState, action) => {
  switch (action.type) {
    case GRAB_CLOTHES:
      return { ...state, clothingData: action.payload }
    default:
      return state
  }
}

// 5. action creators
function clothing() {
  return dispatch => {
    axios.get('/products').then(resp =>{
      dispatch({
        type: GRAB_CLOTHES,
        payload: resp.data
      })
    })
  }
}


// 6. custom hook
export function useClothes() {
  const dispatch = useDispatch()
  const clothes = useSelector(appState => appState.clothesState.clothingData)
  

  const getClothing = () => dispatch(clothing())
  

  return { clothes, getClothing }
}
