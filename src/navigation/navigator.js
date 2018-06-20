import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { createStackNavigator, createDrawerNavigator, DrawerActions } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import DrawerContent from './drawerContent'
import ItemAdderContainer from '../containers/itemAdderContainer'
import BasketContainer from '../containers/basketContainer'
import ItemCreatorContainer from '../containers/itemCreatorContainer'
import ItemDeleteContainer from '../containers/itemDeleteContainer'
import GroupDeleteContainer from '../containers/groupDeleteContainer'
import GroupCreatorContainer from '../containers/groupCreatorContainer'

class BasketScreen extends React.Component {
  static navigationOptions = {
      title: "Basket",
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
      <ItemAdderContainer navigation={this.props.navigation}/>
    )
  }
}

class CreateItemScreen extends React.Component {
  static navigationOptions = {
    title: 'Create item',
  }

  render() {

    const { navigation } = this.props;
    const selectedGroupId = navigation.getParam('selectedGroupId', 1);

    return (
      <ItemCreatorContainer 
        selectedGroupId={selectedGroupId} 
        navigation={this.props.navigation}/>
    )
  }
}

class DeleteItemScreen extends React.Component {
  static navigationOptions = {
    title: 'Delete item',
  }

  render() {
    return (
      <ItemDeleteContainer />
    )
  }
}

class CreateGroupScreen extends React.Component {
  static navigationOptions = {
    title: 'Create group',
  }

  render() {
    return (
      <GroupCreatorContainer />
    )
  }
}

class DeleteGroupScreen extends React.Component {
  static navigationOptions = {
    title: 'Delete group',
  }

  render() {
    return (
      <GroupDeleteContainer />
    )
  }
}

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: BasketScreen,
  }
  }, { 
  contentComponent: DrawerContent,
})

class MainDrawerNavigator extends DrawerNavigator {

  constructor(props) {
    super(props)
    this.navigation = this.props.navigation
  }

  static navigationOptions = ({ navigation, screenProps }) => ({ 
    title: 'Basket',
    headerLeft: 
    <View style={{paddingLeft: 10}}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Ionicons name='md-menu' size={40} />
        </TouchableOpacity>
    </View>
  })
}

export default createStackNavigator({
  Home: {
    screen: MainDrawerNavigator
  },
  CreateItem: {
    screen: CreateItemScreen,
  },
  AddItems: {
    screen: AddItemsToBasketScreen
  },
  CreateItem: {
    screen: CreateItemScreen,
  },
  DeleteItem: {
    screen: DeleteItemScreen
  },
  CreateGroup: {
    screen: CreateGroupScreen
  },
  DeleteGroup: {
    screen: DeleteGroupScreen
  }
},
{
  initialRouteName: 'Home',
  headerMode: 'screen',
})