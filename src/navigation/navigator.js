import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import ItemAdderContainer from '../containers/itemAdderContainer'
import BasketContainer from '../containers/basketContainer'
import NewItemAdderContainer from '../containers/newItemAdderContainer'

class BasketScreen extends React.Component {
  static navigationOptions = {
      title: "Basket"
  }

  render() {
    return (
      <View>
        <BasketContainer addPressed={() => { this.props.navigation.navigate('AddItems') }}/>
      </View>
    )
  }
}

class AddItemsToBasketScreen extends React.Component {
  static navigationOptions = {
    title: 'Add items to basket'
  }

  render() {
    return (
      <ItemAdderContainer />
    )
  }
}

class AddItemScreen extends React.Component {
  static navigationOptions = {
    title: 'Add item',
    drawerLabel: 'Add item'
  }

  render() {
    return (
      <NewItemAdderContainer />
    )
  }
}

const homeStackNavigator = createStackNavigator({
  BasketScreen: {
    screen: BasketScreen
  },
  AddItems: {
    screen: AddItemsToBasketScreen
  },
})

export default createDrawerNavigator({
  Home: {
    screen: homeStackNavigator,
  },
  Add: {
    screen: AddItemScreen,
  },
})