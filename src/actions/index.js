export const ADD_ITEM_TO_BASKET = 'ADD_ITEM_TO_BASKET'
export const addItemToBasket = id => {
  return {
    type: ADD_ITEM_TO_BASKET,
    id: id
  }
}

export const REMOVE_ITEM_FROM_BASKET = 'REMOVE_ITEM_FROM_BASKET'
export const removeItemFromBasket = id => {  
  return {
    type: REMOVE_ITEM_FROM_BASKET,
    id: id
  }
}

export const TOGGLE_BASKET_ITEM_DONE = 'TOGGLE_BASKET_ITEM_DONE'
export const toggleBasketItemDone = id => {
  return {
    type: TOGGLE_BASKET_ITEM_DONE,
    id: id,
  }
}

export const DELETE_BASKET = 'DELETE_BASKET'
export const deleteBasket = () => {
  return {
    type: DELETE_BASKET
  }
}

export const ADD_NEW_ITEM = 'ADD_NEW_ITEM'
export const addNewItem = (name, id, groupId) => {
  return {
    type: ADD_NEW_ITEM,
    name: name,
    id: id,
    groupId: groupId
  }
}