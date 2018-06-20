import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

export default class GroupList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectedId: this.props.defaultId }
  }

  groupPressed = (id, name) => {
    this.setState({ selectedId: id })
    eventData = {
      id: id,
      name: name,
      items: this.props.items.filter(item => item.groupId === id)
    }
    this.props.groupPressed(eventData)
  }

  static defaultProps = {
    selectedColor: '#80aaff',
    defaultColor: '#80aaff',
    defaultId: 1
  }
  
  render() {
    return(
      <View>
        <FlatList
          data={this.props.groups}
          extraData={this.state}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) =>
            <View style={this.state.selectedId === item.id ? 
              { backgroundColor: this.props.selectedColor } : 
              { backgroundColor: this.props.defaultColor }}>
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
  groupText: {
    fontSize: 35
  }
})