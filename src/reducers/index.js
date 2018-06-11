import { combineReducers } from 'redux'
import groups from './groups'
import items from './items'
import basket from './basket'

export default combineReducers({
  groups,
  items,
  basket
})