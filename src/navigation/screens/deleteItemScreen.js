import React from 'react'
import ItemDeleteContainer from '../../containers/itemDeleteContainer'

export default class DeleteItemScreen extends React.Component {
  static navigationOptions = {
    title: 'Delete item',
  }

  render() {
    return (
      <ItemDeleteContainer />
    )
  }
}