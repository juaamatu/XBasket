import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import { filter, find } from 'lodash'
import BasketItemList from './basketItemList'

export default class ItemGroupList extends React.Component {
  render() {
    let basketItems = this.props.basket.map(basketItem => {
      return {...find(this.props.items, item => item.id === basketItem.id), done: basketItem.done}})
    
    let data = this.props.groups.map(group => {
      return {name: group.name, id: group.id, items: filter(basketItems, item => { 
        return item.groupId === group.id
      }).sort((a, b) => {
        return isNaN(a.name) === isNaN(b.name) ? a.name.localeCompare(b.name) : (isNaN(a.name) ? -1 : 1);
      })}
    }).sort((a, b) => {
      return isNaN(a.name) === isNaN(b.name) ? a.name.localeCompare(b.name) : (isNaN(a.name) ? -1 : 1);
    })

    data = filter(data, group => group.items.length > 0)

    return(
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View>
              <View style={styles.groupContainer}>
                <Text style={styles.groupText}>{item.name}</Text>
              </View>
              <BasketItemList 
                items={item.items}
                basket={this.props.basket}
                itemPressed={this.props.itemPressed}
              />
            </View>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  groupContainer: {
    backgroundColor: '#80aaff'
  },
  groupText: {
    fontSize: 35
  }
})