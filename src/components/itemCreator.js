import React from 'react'
import { View } from 'react-native'
import { Form, Item, Input, Button, Icon, Text, Toast, Root, Container, Content } from 'native-base'
import { Font, AppLoading } from "expo";
import GroupList from './groupList.js'


export default class ItemCreator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      selectedGroupId: props.selectedGroupId, 
      showAddedText: false, 
      itemName: '',
      nameStatus: 'empty', 
      inputTextFontSize: 30,
      loading: true
    }
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  addPressed = () => {
    let name = this.state.itemName
    if (name.length === 0) {
      Toast.show({
        text: 'Please give item name!',
        buttonText: 'Okay'
      })
      return
    }
    for (let i = 0; i < this.props.items.length; i++) {
      if (this.props.items[i].name.toUpperCase() === name.toUpperCase()) {
        Toast.show({
          text: 'Item name already exists!',
          buttonText: 'Okay'
        })
        return
      }
    }

    let id = this.props.items.length > 0 ? this.props.items[this.props.items.length - 1].id + 1 : 1
    this.props.itemPressed(name, id, this.state.selectedGroupId)
    this.setState({ nameStatus: 'error' })
    Toast.show({
      text: name + ' added!',
      buttonText: 'Okay'
    })
  }

  changeText = text => {
    this.setState(() => ({ itemName: text }))
  }

  endEditing = () => {
    let name = this.state.itemName
    let nameStatus = 'success'
    if (name.length === 0)
      nameStatus = 'empty'
    for (let i = 0; i < this.props.items.length; i++) {
      if (this.props.items[i].name.toUpperCase() === name.toUpperCase()) {
        nameStatus = 'error'
      }
    }
    this.setState({nameStatus: nameStatus})
  }

  render() {
    console.log(this.props)
    return this.state.loading ? <View><AppLoading /></View> :  
    ( 
      <Container>
        <Content contentContainerStyle={{ flex: 1, paddingBottom: 10 }}>
          <View style={{flex: -1, alignSelf: 'stretch', justifyContent: 'center'}}>
            <Form>
              <Item 
                last 
                error={this.state.nameStatus === 'error'}
                success={this.state.nameStatus === 'success'}>
                <Input 
                  style={{fontSize: 20}}
                  placeholder='Item name'
                  onChangeText={(text) => {this.changeText(text)}}
                  onEndEditing={() => this.endEditing()}/>
                {this.state.nameStatus === 'error' && <Icon name='close-circle' /> }
                {this.state.nameStatus === 'success' && <Icon name='checkmark-circle' /> }
              </Item>
            </Form>
          </View>
          <View style={{flex: 3, paddingBottom: 10, paddingTop: 10}}>
            <GroupList 
                groups={this.props.groups} 
                items={this.props.items}
                groupPressed={eventData => { this.setState({ selectedGroupId: eventData.id }) }}
                selectedColor={'#80aaff'}
                defaultColor={'#cccccc'}
                defaultId={this.state.selectedGroupId}
              />
          </View>
          <View style={{flex: -1, flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button 
              onPress={() => this.addPressed()}
              danger={this.state.nameStatus === 'error' || this.state.nameStatus === 'empty'}
              success={this.state.nameStatus === 'success'}>
              <Text>Add item!</Text>
            </Button>
            <Button onPress={() => this.props.createGroupPressed()}>
              <Text>Create group!</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}