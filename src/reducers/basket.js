import { ADD_ITEM_TO_BASKET, 
  REMOVE_ITEM_FROM_BASKET, 
  TOGGLE_BASKET_ITEM_DONE, 
  DELETE_BASKET } from '../actions'

/*
data struct:
{
  id: 2,
  count: 1,
  done: false
}
*/

const defaultState = []

export default basket = (state = defaultState, action) => {
  switch (action.type) {    
    case ADD_ITEM_TO_BASKET:
      return [
        ...state,
        {
          id: action.id,
          count: 1,
          done: false
        }
      ]
    case REMOVE_ITEM_FROM_BASKET:
      return state.filter(item => item.id !== action.id)
    case TOGGLE_BASKET_ITEM_DONE:
      return state.map(item => {
        return item.id === action.id
          ? { ...item, done: !item.done }
          : item
      })
    case DELETE_BASKET:
      return []
    default:
      return state
  }
}