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
              selected={find(this.props.basket, basketItem => item.id === basketItem.id ) !== undefined}
              itemAdded={this.props.itemAdded}
              itemRemoved={this.props.itemRemoved}
            />}
        />
      </View>
    )
  }
}