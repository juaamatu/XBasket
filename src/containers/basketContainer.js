import { connect } from 'react-redux'
import { deleteBasket, toggleBasketItemDone } from '../actions'
import Basket from '../components/basket'

const mapStateToProps = (state, ownProps) => ({
  items: state.items,
  groups: state.groups,
  basket: state.basket,
  addPressed: ownProps.addPressed
})

const mapDispatchToProps = dispatch => ({
  clearPressed: () => dispatch(deleteBasket()),
  itemPressed: id => dispatch(toggleBasketItemDone(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Basket)