import React from 'react'
import { View, Text } from 'react-native'
import ItemGroupList from './itemGroupList'

export default class ItemAdder extends React.Component {
  render() {
    return (
      <View>
        <ItemGroupList 
          items={this.props.items} 
          groups={this.props.groups} 
          basket={this.props.basket}
          itemAdded={this.props.itemAdded}
          itemRemoved={this.props.itemRemoved}
        />
      </View>
    )
  }
}