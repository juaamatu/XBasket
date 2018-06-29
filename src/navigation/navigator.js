import { createStackNavigator, createDrawerNavigator, DrawerActions } from 'react-navigation'
import BasketScreen from './screens/basketScreen'
import AddItemsScreen from './screens/addItemsScreen'
import CreateItemScreen from './screens/createItemScreen'
import DeleteItemScreen from './screens/deleteItemScreen'
import DeleteGroupScreen from './screens/deleteGroupScreen'
import CreateGroupScreen from './screens/createGroupScreen'

export default createStackNavigator({
  Home: {
    screen: BasketScreen
  },
  AddItems: {
    screen: AddItemsScreen
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