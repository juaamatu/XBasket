import React from 'react'
import { View, FlatList, Text } from 'react-native'
import { find } from 'lodash'
import Item from './item'

export default class ItemList extends React.Component {
  render() {
    return(
      <View>
        <FlatList
          data={this.props.items}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) =>
            <Item 
              name={item.name} 
              id={item.id} 
              groupId={this.props.groupId}
              toggleable={this.props.toggleableItems}
              isToggled={this.props.isItemToggled(this.props.basket, item.id)}
              itemPressed={this.props.itemPressed}
              itemContainerStyle={this.props.itemContainerStyle}
              toggledContainerStyle={this.props.toggledContainerStyle}
              itemTextStyle={this.props.itemTextStyle}
              toggledTextStyle={this.props.toggledTextStyle}
            />}
        />
      </View>
    )
  }
}