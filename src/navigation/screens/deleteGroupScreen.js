import React from 'react'
import GroupDeleteContainer from '../../containers/groupDeleteContainer'

export default class DeleteGroupScreen extends React.Component {
  static navigationOptions = {
    title: 'Delete group',
  }

  render() {
    return (
      <GroupDeleteContainer />
    )
  }
}