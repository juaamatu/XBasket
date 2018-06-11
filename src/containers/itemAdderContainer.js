import { connect } from 'react-redux'
import { addItemToBasket, removeItemFromBasket } from '../actions'
import ItemAdder from '../components/itemAdder'

const mapStateToProps = state => ({
  items: state.items,
  groups: state.groups,
  basket: state.basket
})

const mapDispatchToProps = dispatch => ({
  itemAdded: id => dispatch(addItemToBasket(id)),
  itemRemoved: id => dispatch(removeItemFromBasket(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemAdder)