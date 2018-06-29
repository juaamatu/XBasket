import React from 'react'
import ItemAdderContainer from '../../containers/itemAdderContainer'

export default class AddItemsScreen extends React.Component {
  static navigationOptions = {
    title: 'Add items to basket'
  }

  render() {
    return (
      <ItemAdderContainer navigation={this.props.navigation}/>
    )
  }
}