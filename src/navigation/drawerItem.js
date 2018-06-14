import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'

export default class DrawerItem extends React.Component { 
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => { this.props.pressed() }}>
          <Text style={styles.text}>{this.props.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  text: {
    fontSize: 18
  }
})