import { connect } from 'react-redux'
import { addNewItem } from '../actions/index'
import ItemCreator from '../components/itemCreator'

navigateToCreateGroupScreen = navigation => {
  navigation.navigate('CreateGroup')
}

const itemPressed = (dispatch, name, id, groupId) => {
  dispatch(addNewItem(name, id, groupId))
}

const mapStateToProps = (state, ownProps) => ({
  items: state.items,
  groups: state.groups,
  createGroupPressed: () => navigateToCreateGroupScreen(ownProps.navigation)
})

const mapDispatchToProps = dispatch => ({
  itemPressed: (name, id, groupId) => itemPressed(dispatch, name, id, groupId)
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemCreator)