import React from 'react'
import { View, ScrollView, Text, TextInput, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native'

export default class ItemCreator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectedGroupId: 1, showAddedText: false, name: 'Item name', nameInvalid: false }
  }

  addPressed = () => {
    let name = this.state.name
    for (let i = 0; i < this.props.items.length; i++) {
      if (this.props.items[i].name.toUpperCase() === name.toUpperCase()) {
        this.setState(() => ({ nameInvalid: true }))
        return
      }
    }

    this.setState(() => ({ showAddedText: true }))
    setTimeout(() => {
      this.setState(() => ({ showAddedText: false }))
    }, 2000)

    let id = this.props.items.length > 0 ? this.props.items[this.props.items.length - 1].id + 1 : 1
    this.props.itemPressed(name, id, this.state.selectedGroupId)
  }

  textInputFocus = () => {
    this.setState(() => ({ nameInvalid: false }))
    if (this.textInput.value != 'Invalid name' && this.textInput.value != 'Item name') {
      this.textInput.clear()
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={styles.textInputContainer}>
          <TextInput 
            style={[styles.textInput, this.state.nameInvalid ? {color: 'red'} : {color: 'black'}]} 
            defaultValue={this.state.nameInvalid ? 'Invalid name' : this.state.name}
            underlineColorAndroid={'transparent'}
            ref={ ref => { this.textInput = ref } }
            onChangeText={(text) => this.setState(() => ({ name: text }))}
            onFocus={() => this.textInputFocus()}
          />
        </View>
        <ScrollView contentContainerStyle={styles.container}>
          <FlatList
            data={this.props.groups}
            extraData={this.state}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
              <View style={this.state.selectedGroupId === item.id ? styles.listItemContainerSelected : styles.listItemContainer}>
                <TouchableOpacity onPress={() => this.setState(() => ({selectedGroupId: item.id }))}>
                  <Text style={styles.listItemText}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}}
          />
        </ScrollView>
        <View style={styles.container}>
          <Button 
            title={this.state.showAddedText ? 'Item added!' : 'Add Item'}
            onPress={() => this.addPressed()}
            disabled={this.state.showAddedText}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  container: {
    paddingTop: 30
  },
  textInputContainer: {
    marginTop: 30,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
  },
  listItemContainer: {
    backgroundColor: 'gray'
  },
  listItemContainerSelected: {
    backgroundColor: '#66ffff'
  },
  listItemText: {
    fontSize: 20
  },
  text: {
    textAlign: 'center',
    fontSize: 30
  },
  textInput: {
    textAlign: 'center',
    fontSize: 20
  }
})