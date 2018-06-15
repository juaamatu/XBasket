import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import BasketItemList from './basketItemList'

export default class BasketItemGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = { opened: true }
  }

  toggleOpened = () => {
    this.setState((prevState, props) => {
      return { opened: !prevState.opened }
    })
  }

  render() {

    let done = this.props.items.every(item => item.done)

    let itemListOpened = ( 
      <BasketItemList
        items={this.props.items}
        basket={this.props.basket}
        itemPressed={this.props.itemPressed}
      />
    )

    let childrenToggled = this.state.opened ? false : this.props.items.some(item => item.done)

    let itemListClosed = (
      <View style={childrenToggled ? this.props.toggledContainerStyle : this.props.itemContainerStyle}>
        <TouchableOpacity onPress={() => { this.toggleOpened() }}>
          <Text style={styles.closedText}>...</Text>
        </TouchableOpacity>
      </View>
    )

    return (
      <View>
        <View style={styles.groupContainer}>
          <View style={styles.groupTextContainer}>
            <TouchableOpacity onPress={() => { this.toggleOpened() }}>
              <Text style={styles.groupText}>{this.props.name}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.groupIconContainer}>
            <Ionicons 
              name={done ? 'md-done-all' : 'md-checkmark'}
              size={40} 
            />
          </View>
        </View>
        {this.state.opened ? itemListOpened : itemListClosed}
    </View>
    )
  }
}

const styles = StyleSheet.create({
  groupContainer: {
    backgroundColor: '#80aaff',
    flexDirection: 'row',
  },
  groupTextContainer: {
    flex: 5,
  },
  groupIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 30
  },
  groupText: {
    fontSize: 35,
    textAlignVertical: 'center'
  },
  closedText: {
    fontSize: 25
  },
  closedContainer: {
    padding: 5,
  },
})