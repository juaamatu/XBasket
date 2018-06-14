import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

export default class GroupAdder extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: 'Group name', nameInvalid: false, showAddedText: false }
  }

  changeText = text => {
    this.setState(() => ({ name: text, nameInvalid: false }))
  }

  textInputFocus = () => {
    this.setState(() => ({ nameInvalid: false }))
    if (this.textInput.value != 'Invalid name' && this.textInput.value != 'Group name') {
      this.textInput.clear()
    }
  }

  addPressed = () => {
    let name = this.state.name
    for (let i = 0; i < this.props.groups.length; i++) {
      if (this.props.groups[i].name.toUpperCase() === name.toUpperCase()) {
        this.setState(() => ({ nameInvalid: true }))
        return
      }
    }

    this.setState(() => ({ showAddedText: true }))
    setTimeout(() => {
      this.setState(() => ({ showAddedText: false }))
    }, 2000)

    this.props.groupAdded(name)
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.textInputContainer}>
          <TextInput 
          style={[styles.textInput, this.state.nameInvalid ? {color: 'red'} : {color: 'black'}]}
          underlineColorAndroid={'transparent'}
          ref={ ref => { this.textInput = ref } }
          defaultValue={this.state.nameInvalid ? 'Invalid name' : this.state.name}
          onChangeText={(text) => {this.changeText(text)}}
          onFocus={() => this.textInputFocus()}
          />
        </View>
        <View style={styles.container}>
          <Button 
            title={this.state.showAddedText ? 'Group added!' : 'Add group'}
            onPress={() => this.addPressed()}
            disabled={this.state.showAddedText}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textInputContainer: {
    marginTop: 30,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
  },
  container: {
    paddingTop: 30
  },
  textInput: {
    textAlign: 'center',
    fontSize: 20
  }
})