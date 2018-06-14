import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView, DrawerActions } from 'react-navigation'
import DrawerItem from './drawerItem'

export default class DrawerContent extends React.Component {
  navigate = route => {
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
    this.props.navigation.navigate(route)
  }

  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
          <DrawerItem name='Create item' pressed={() => { this.navigate('CreateItem') }}/>
          <DrawerItem name='Delete item' pressed={() => { this.navigate('DeleteItem') }}/>
          <DrawerItem name='Create group' pressed={() => { this.navigate('CreateGroup') }}/>
          <DrawerItem name='Delete group' pressed={() => { this.navigate('DeleteGroup') }}/>
        </SafeAreaView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})