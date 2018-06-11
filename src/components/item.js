import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class Item extends React.Component {
  itemPressed = id => {    
    if (this.props.selected) {
      this.props.itemRemoved(id)
    } else {
      this.props.itemAdded(id)
    }
  }

  render() {
    return (
      <View style={[styles.containerSelected, this.props.selected ? styles.containerSelected : styles.containerUnselected]}>
        <TouchableOpacity onPress={ id => this.itemPressed(this.props.id) }>
          <View>
            <Text style={styles.itemText}>{this.props.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemText: {
    fontSize: 25
  },
  container: {
    margin: 5,
    padding: 10,
  },
  containerSelected: {
    backgroundColor: '#66ffff'    
  },
  containerUnselected: {    
    backgroundColor: 'gray'
  }
})