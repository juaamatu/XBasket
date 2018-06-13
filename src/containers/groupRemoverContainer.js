import { connect } from 'react-redux'
import { deleteGroup } from '../actions'
import { Alert } from 'react-native'
import GroupList from '../components/groupList'

const groupDeleted = (dispatch, groupPressedEventData) => {
  Alert.alert(
    'Delete group',
    `Are you sure you want to delete ${groupPressedEventData.name} and it's ${groupPressedEventData.items.length} items?`,
    [
      {text: 'Yes!', onPress: () => { dispatch(deleteGroup(groupPressedEventData.id)) }},
      {text: 'No!', onPress: () => {}},
    ],
    { cancelable: true }
  )
}

const mapStateToProps = state => ({
  items: state.items,
  groups: state.groups
})

const mapDispatchToProps = dispatch => ({
  groupPressed: groupPressedEventData => groupDeleted(dispatch, groupPressedEventData)
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)