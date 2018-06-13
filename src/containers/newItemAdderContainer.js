import { connect } from 'react-redux'
import { addNewItem } from '../actions/index'
import NewItemAdder from '../components/newItemAdder'

const itemPressed = (dispatch, name, id, groupId) => {
  dispatch(addNewItem(name, id, groupId))
}

const mapStateToProps = state => ({
  items: state.items,
  groups: state.groups,
})

const mapDispatchToProps = dispatch => ({
  itemPressed: (name, id, groupId) => itemPressed(dispatch, name, id, groupId)
})

export default connect(mapStateToProps, mapDispatchToProps)(NewItemAdder)