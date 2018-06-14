import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import BasketItemGroupList from './basketItemGroupList'

export default class Basket extends React.Component {  
  clearPressed = () => {
    if (this.props.basket.length == 0) {
      return;
    }
    Alert.alert(
      'Clear basket',
      'Are you sure you want to clear your basket?',
      [
        {text: 'No!', onPress: () => {}},
        {text: 'Yes!', onPress: () => { this.props.clearPressed() }},
      ],
      { cancelable: true }
    )
  }
  
  render() {
    return(
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Your basket</Text>
          <View style={styles.iconsContainer}>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => this.props.addPressed()}>
                <Ionicons name='md-add' size={40} />
              </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={this.clearPressed}>
                <Ionicons name='md-close' size={40} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <BasketItemGroupList
            items={this.props.items}
            groups={this.props.groups}
            basket={this.props.basket}
            itemPressed={this.props.itemPressed}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 35,
  },
  headerContainer: {
    padding: 15,    
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconContainer: {
    justifyContent: 'center',
    paddingRight: 30,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  listContainer: {
    backgroundColor: 'red'
  },
  container: {
  }
})