import React from 'react'
import { ScrollView, View } from 'react-native'
import ItemGroupList from './itemGroupList'
import { Header, Item, Input, Icon, Button } from 'native-base';

export default class ItemAdder extends React.Component {
  constructor(props) {
    super(props)
    this.state = { searchString: '' }
  }

  itemFilter = item => {
    return this.props.itemFilter(item.name, this.state.searchString)
  }

  render() {
    return (
      <ScrollView>
        <Header searchBar>
          <Item>
            <Icon name="search" />
            <Input 
              placeholder="Search" 
              onChangeText={text => this.setState({ searchString: text })} />
          </Item>
          <Button transparent>
          </Button>
        </Header>        
        <ItemGroupList 
          items={this.props.items} 
          groups={this.props.groups} 
          basket={this.props.basket}
          toggleableItems={this.props.toggleableItems}
          isItemToggled={this.props.isItemToggled}
          itemPressed={this.props.itemPressed}
          itemContainerStyle={this.props.itemContainerStyle}
          toggledContainerStyle={this.props.toggledContainerStyle}
          itemTextStyle={this.props.itemTextStyle}
          toggledTextStyle={this.props.toggledTextStyle}
          itemFilter={this.itemFilter}
          canCreateItems={true}
          createItemPressed={this.props.createItemPressed}
        />
      </ScrollView>
    )
  }
}