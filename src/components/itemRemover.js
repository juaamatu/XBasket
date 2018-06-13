import React from 'react'
import { View } from 'react-native'
import ItemGroupList from './itemGroupList'

export default class ItemRemover extends React.Component {
  render() {
    return(
      <View>
        <ItemGroupList 
          items={this.props.items} 
          groups={this.props.groups} 
          basket={this.props.basket}
          toggleableItems={this.props.toggleableItems}
          isItemToggled={this.props.isItemToggled}
          itemPressed={this.props.itemPressed}
          itemContainerStyle={this.props.itemContainerStyle}
          toggledContainerStyle={this.props.toggledContainerStyle}
          itemTextStyle={this.props.itemTextStyle}
          toggledTextStyle={this.props.toggledTextStyle}
        />
      </View>
    )
  }
}