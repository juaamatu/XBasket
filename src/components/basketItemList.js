import React from 'react'
import { View, FlatList, Text } from 'react-native'
import { find } from 'lodash'
import BasketItem from './basketItem'

export default class ItemList extends React.Component {
  render() {
    return(
      <View>
        <FlatList
          data={this.props.items}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => 
            <BasketItem 
              name={item.name} 
              id={item.id}
              done={item.done}
              itemPressed={this.props.itemPressed}
            />}
        />
      </View>
    )
  }
}