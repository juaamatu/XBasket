import React from 'react'
import GroupCreatorContainer from '../../containers/groupCreatorContainer'

export default class CreateGroupScreen extends React.Component {
  static navigationOptions = {
    title: 'Create group',
  }

  render() {
    return (
      <GroupCreatorContainer />
    )
  }
}