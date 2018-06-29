import React from 'react'
import ItemCreatorContainer from '../../containers/itemCreatorContainer'

export default class CreateItemScreen extends React.Component {
  static navigationOptions = {
    title: 'Create item',
  }

  render() {

    const { navigation } = this.props;
    const selectedGroupId = navigation.getParam('selectedGroupId', 1);

    return (
      <ItemCreatorContainer 
        selectedGroupId={selectedGroupId} 
        navigation={this.props.navigation}/>
    )
  }
}