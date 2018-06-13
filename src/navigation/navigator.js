import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import ItemAdderContainer from '../containers/itemAdderContainer'
import BasketContainer from '../containers/basketContainer'
import NewItemAdderContainer from '../containers/newItemAdderContainer'
import ItemRemoverContainer from '../containers/itemRemoverContainer'
import GroupRemoverContainer from '../containers/groupRemoverContainer'
import GroupAddContainer from '../containers/groupAddContainer'

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
  }

  render() {
    return (
      <NewItemAdderContainer />
    )
  }
}

class RemoveItemsScreen extends React.Component {
  static navigationOptions = {
    title: 'Remove item',
  }

  render() {
    return (
      <ItemRemoverContainer />
    )
  }
}

class AddGroupsScreen extends React.Component {
  static navigationOptions = {
    title: 'Add group',
  }

  render() {
    return (
      <GroupAddContainer />
    )
  }
}

class RemoveGroupsScreen extends React.Component {
  static navigationOptions = {
    title: 'Remove group',
  }

  render() {
    return (
      <GroupRemoverContainer />
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

const addItemStackNavigator = createStackNavigator({
  AddScreen: {
    screen: AddItemScreen
  },
})

const removeItemStackNavigator = createStackNavigator({
  RemoveScreen: {
    screen: RemoveItemsScreen
  },
})

const addGroupStackNavigator = createStackNavigator({
  AddGroup: {
    screen: AddGroupsScreen
  }
})

const removeGroupStackNavigator = createStackNavigator({
  RemoveGroup: {
    screen: RemoveGroupsScreen
  }
})

export default createDrawerNavigator({
  Home: {
    screen: homeStackNavigator,
  },
  AddItem: {
    screen: addItemStackNavigator,
    navigationOptions: {
      title: 'Add item',
    }
  },
  RemoveItem: {
    screen: removeItemStackNavigator,
    navigationOptions: {
      title: 'Remove item',
    }
  },
  AddGroup: {
    screen: addGroupStackNavigator,
    navigationOptions: {
      title: 'Add group',
    }
  },
  RemoveGroup: {
    screen: removeGroupStackNavigator,
    navigationOptions: {
      title: 'Remove group',
    }
  }
})