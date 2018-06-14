import { connect } from 'react-redux'
import { addGroup } from '../actions'
import GroupDelete from '../components/groupCreator'

const mapStateToProps = state => ({
  groups: state.groups
})

const mapDispatchToProps = dispatch => ({
  groupAdded: name => dispatch(addGroup(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupDelete)