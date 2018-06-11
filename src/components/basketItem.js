import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class Item extends React.Component {

  itemPressed = id => {
    this.props.itemPressed(id)
  }

  render() {
    return (
      <View style={styles.containerSelected}>
        <TouchableOpacity onPress={ id => this.itemPressed(this.props.id) }>
          <View>
            <Text 
              style={[styles.itemText, this.props.done 
                ? styles.itemTextDone : styles.itemTextNotDone]}
            >{this.props.name}     </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemText: {
    fontSize: 25,    
  },
  itemTextDone: {
    textDecorationLine: 'line-through'
  },
  itemTextNotDone: {

  },
  container: {
    margin: 5,
    padding: 10,
  },
})