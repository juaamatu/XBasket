import React from 'react'
import { Font, AppLoading } from "expo";
import { View } from 'react-native'
import { Container, Content, Button, Form, Item, Input, Text, Toast, Icon } from 'native-base'

export default class GroupAdder extends React.Component {
  constructor(props) {
    super(props)
    this.state = { groupName: '', nameStatus: 'empty', loading: true }
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  changeText = text => {
    this.setState(() => ({ groupName: text }))
  }

  addPressed = () => {
    let name = this.state.groupName
    if (name.length === 0) {
      Toast.show({
        text: 'Please give group name!',
        buttonText: 'Okay'
      })
      return
    }
    for (let i = 0; i < this.props.groups.length; i++) {
      if (this.props.groups[i].name.toUpperCase() === name.toUpperCase()) {
        Toast.show({
          text: 'Group already exists!',
          buttonText: 'Okay'
        })
        return
      }
    }

    this.props.groupAdded(name)
    this.setState({ nameStatus: 'error' })
    Toast.show({
      text: name + ' added!',
      buttonText: 'Okay'
    })
  }

  endEditing = () => {
    let name = this.state.groupName
    let nameStatus = 'success'
    if (name.length === 0)
      nameStatus = 'empty'
    for (let i = 0; i < this.props.groups.length; i++) {
      if (this.props.groups[i].name.toUpperCase() === name.toUpperCase()) {
        nameStatus = 'error'
      }
    }
    this.setState({nameStatus: nameStatus})
  }

  render() {
    return this.state.loading ? <View><AppLoading /></View> :  
    (
      <Container>
        <Content>
          <View style={{ paddingTop: 30 }}>
            <Form>
              <Item 
                last 
                error={this.state.nameStatus === 'error'}
                success={this.state.nameStatus === 'success'}
                >
                <Input 
                  style={{fontSize: 20}}
                  placeholder='Group name'
                  onChangeText={(text) => {this.changeText(text)}}
                  onEndEditing={() => this.endEditing()}/>
                {this.state.nameStatus === 'error' && <Icon name='close-circle' /> }
                {this.state.nameStatus === 'success' && <Icon name='checkmark-circle' /> }
              </Item>
            </Form>
          </View>
          <View style={{ paddingTop: 30, alignSelf: 'center' }}>
            <Button
            onPress={() => this.addPressed()}
            danger={this.state.nameStatus === 'error' || this.state.nameStatus === 'empty'}>
              <Text>Add group!</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}