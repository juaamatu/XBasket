import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import ItemAdderContainer from '../containers/itemAdderContainer'
import BasketContainer from '../containers/basketContainer'
import Basket from '../components/basket'

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

class AddItemsScreen extends React.Component {
  static navigationOptions = {
    title: 'Add items'
  }

  render() {
    return (
      <View>
        <ItemAdderContainer />
      </View>
    )
  }
}

export default createStackNavigator({
  BasketScreen: {
    screen: BasketScreen
  },
  AddItems: {
    screen: AddItemsScreen
  },
})