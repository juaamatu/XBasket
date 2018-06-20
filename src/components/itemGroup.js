import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ItemList from './itemList'

export default class ItemGroup extends React.Component {
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

    let done = this.props.items.every(item => {
      this.props.basket.find(basketItem => item.id === basketItem.id) !== undefined
    })

    let itemListOpened = ( 
      <ItemList 
        items={this.props.items}
        groupId={this.props.id}
        basket={this.props.basket}
        itemPressed={this.props.itemPressed}
        toggleableItems={this.props.toggleableItems}
        isItemToggled={this.props.isItemToggled}
        itemContainerStyle={this.props.itemContainerStyle}
        toggledContainerStyle={this.props.toggledContainerStyle}
        itemTextStyle={this.props.itemTextStyle}
        toggledTextStyle={this.props.toggledTextStyle}
      />
    )

    let childrenToggled = this.state.opened ? false : this.props.items.some(item => {
      return this.props.basket.find(basketItem => item.id === basketItem.id) !== undefined
    })

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
          {
          this.props.canCreateItems &&
          <View style={styles.groupIconContainer}>
            <TouchableOpacity onPress={() => this.props.createItemPressed(this.props.groupId)}>
              <Ionicons name='md-add' size={40} />
            </TouchableOpacity>
          </View>
          }
        </View>
        {this.state.opened ? itemListOpened : itemListClosed}
    </View>
    )
  }
}

const styles = StyleSheet.create({
  groupContainer: {
    backgroundColor: '#80aaff',
    flexDirection: 'row'
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