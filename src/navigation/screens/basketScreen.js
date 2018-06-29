import React from 'react'
import { createDrawerNavigator, DrawerActions } from 'react-navigation'
import { View, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import DrawerContent from '../drawerContent'
import BasketContainer from '../../containers/basketContainer'

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

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: BasketScreen,
  }
  }, { 
  contentComponent: DrawerContent,
})

export default class MainDrawerNavigator extends DrawerNavigator {

  constructor(props) {
    super(props)
    this.navigation = this.props.navigation
  }

  static navigationOptions = ({ navigation, screenProps }) => ({ 
    title: 'Basket',
    headerLeft: 
    <View style={{paddingLeft: 10}}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Icon name='menu' size={40} />
        </TouchableOpacity>
    </View>
  })
}