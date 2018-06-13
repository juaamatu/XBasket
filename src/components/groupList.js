import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

export default class GroupList extends React.Component {
  groupPressed = (id, name) => {
    eventData = {
      id: id,
      name: name,
      items: this.props.items.filter(item => item.groupId === id)
    }
    this.props.groupPressed(eventData)
  }
  
  render() {
    return(
      <View>
        <FlatList
          data={this.props.groups}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) =>
            <View style={styles.groupContainer}>
              <TouchableOpacity onPress={() => { this.groupPressed(item.id, item.name) }}>
                <Text style={styles.groupText}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          }
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