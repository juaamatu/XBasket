import { connect } from 'react-redux'
import { addItemToBasket, removeItemFromBasket } from '../actions'
import { StyleSheet } from 'react-native'
import ItemAdder from '../components/itemAdder'

itemAdded = (dispatch, pressedEventdata) => {
  if (pressedEventdata.selected) {
    dispatch(removeItemFromBasket(pressedEventdata.id))
  } else {
    dispatch(addItemToBasket(pressedEventdata.id))
  }
}

addedItemToggled = (basket, id) => {
  return basket.find(item => item.id === id) !== undefined
}

const mapStateToProps = state => ({
  items: state.items,
  groups: state.groups,
  basket: state.basket,
  toggleableItems: true,
  isItemToggled: (basket, id) => addedItemToggled(basket, id),
  itemContainerStyle: styles.defaultContainer,
  toggledContainerStyle: styles.toggledContainer,
  itemTextStyle: styles.defaultText,
  toggledTextStyle: styles.defaultText,
})

const mapDispatchToProps = dispatch => ({
  itemPressed: pressedEventdata => itemAdded(dispatch, pressedEventdata)
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemAdder)

const styles = StyleSheet.create({
  defaultContainer: {
    backgroundColor: 'gray'
  },
  toggledContainer: {
    backgroundColor: '#66ffff'
  },
  defaultText: {
    fontSize: 25
  },
})