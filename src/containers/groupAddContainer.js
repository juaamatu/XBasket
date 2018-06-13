import { connect } from 'react-redux'
import { addGroup } from '../actions'
import GroupAdder from '../components/groupAdder'

const mapStateToProps = state => ({
  groups: state.groups
})

const mapDispatchToProps = dispatch => ({
  groupAdded: name => dispatch(addGroup(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupAdder)