import { connect } from 'react-redux'
import { addNewItem } from '../actions/index'
import NewItemAdder from '../components/newItemAdder'

const mapStateToProps = state => ({
  items: state.items,
  groups: state.groups,
})

const mapDispatchToProps = dispatch => ({
  addNewItem: (name, id, groupId) => dispatch(addNewItem(name, id, groupId))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewItemAdder)