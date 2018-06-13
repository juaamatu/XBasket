import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import { filter } from 'lodash'
import ItemList from './itemList'

export default class ItemGroupList extends React.Component {
  render() {
    let data = this.props.groups.map(group => {
      return {name: group.name, id: group.id, items: filter(this.props.items, item => { 
        return item.groupId === group.id
      }).sort((a, b) => {
        return isNaN(a.name) === isNaN(b.name) ? a.name.localeCompare(b.name) : (isNaN(a.name) ? -1 : 1);
      })}
    }).sort((a, b) => {
      return isNaN(a.name) === isNaN(b.name) ? a.name.localeCompare(b.name) : (isNaN(a.name) ? -1 : 1);
    })
    //console.log(isItemToggled)
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
              <ItemList 
                items={item.items}
                groupId={item.id}
                basket={this.props.basket}
                itemPressed={this.props.itemPressed}
                toggleableItems={this.props.toggleableItems}
                isItemToggled={this.props.isItemToggled}
                itemContainerStyle={this.props.itemContainerStyle}
                toggledContainerStyle={this.props.toggledContainerStyle}
                itemTextStyle={this.props.itemTextStyle}
                toggledTextStyle={this.props.toggledTextStyle}
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