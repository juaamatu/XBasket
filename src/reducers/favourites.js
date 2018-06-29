import { ADD_FAVOURITE } from '../actions'

const defaultState = []

export default favourites = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return [...state, { 
          id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
          name: action.name,
          items: action.items
        }
      ]
    default:
      return state
  }
}