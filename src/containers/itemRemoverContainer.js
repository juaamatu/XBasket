import { connect } from 'react-redux'
import { removeItem } from '../actions'
import { StyleSheet, Alert } from 'react-native'
import ItemRemover from '../components/itemRemover'

itemPressed = (dispatch, pressedEventdata) => {
  Alert.alert(
    'Remove item',
    'Are you sure you want to delete ' + pressedEventdata.name,
    [
      {text: 'Yes!', onPress: () => { dispatch(removeItem(pressedEventdata.id)) }},
      {text: 'No!', onPress: () => {}},
    ],
    { cancelable: true }
  )
}

isItemToggled = (basket, id) => {
  
}

const mapStateToProps = state => ({
  items: state.items,
  groups: state.groups,
  basket: state.basket,
  toggleableItems: false,
  isItemToggled: (basket, id) => isItemToggled(basket, id),
  itemContainerStyle: styles.defaultContainer,
  toggledContainerStyle: styles.toggledContainer,
  itemTextStyle: styles.defaultText,
  toggledTextStyle: styles.defaultText,
})

const mapDispatchToProps = dispatch => ({
  itemPressed: pressedEventdata => itemPressed(dispatch, pressedEventdata)
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemRemover)

const styles = StyleSheet.create({
  defaultContainer: {
    backgroundColor: 'white'
  },
  toggledContainer: {
    backgroundColor: '#66ffff'
  },
  defaultText: {
    fontSize: 25
  },
})