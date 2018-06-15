import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class Item extends React.Component {

  itemPressed = id => {
    this.props.itemPressed(id)
  }

  render() {
    return (
      <View style={[styles.container, this.props.done 
        ? styles.containerDone : styles.containerNotDone]}>
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
    paddingLeft: 10
  },
  containerDone: {
    backgroundColor: '#cccccc'
  },
  containerNotDone: {
  }
})