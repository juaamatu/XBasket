import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { Header, Item, Input, Icon, Button } from 'native-base';
import ItemGroupList from './itemGroupList'

export default class ItemAdder extends React.Component {
  constructor(props) {
    super(props)
    this.state = { searchString: '' }
  }

  itemFilter = item => {
    return this.props.itemFilter(item.name, this.state.searchString)
  }

  closeFilter = () => {
    this.setState({ searchString: '' }, () => {
      this.searchInput._root.clear()
    })
  }

  render() {
    return (
      <ScrollView>
        <Header searchBar>
          <Item>
            <Icon name="search" />
            <Input 
              placeholder="Search"
              ref={c => this.searchInput = c}
              onChangeText={text => this.setState({ searchString: text })} />
            <TouchableOpacity onPress={() => this.closeFilter()}>
              <Icon name="close" />
            </TouchableOpacity>
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