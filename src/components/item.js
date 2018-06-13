import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class Item extends React.Component {
  itemPressed = id => {    
    pressedEventData = {
      name: this.props.name,
      id: this.props.id,
      groupId: this.props.groupId,
      selected: this.props.isToggled
    }
    this.props.itemPressed(pressedEventData)
  }

  render() {
    let toggled = this.props.toggleable ? this.props.isToggled : false

    return (
      <View style={toggled ? this.props.toggledContainerStyle : this.props.itemContainerStyle}>
        <TouchableOpacity onPress={ () => this.itemPressed() }>
          <View>
            <Text style={toggled ? this.props.toggledTextStyle : this.props.itemTextStyle}>{this.props.name}</Text>
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