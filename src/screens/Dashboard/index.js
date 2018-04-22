// @flow
import type { City } from '../../entities/types'
import React from 'react'
import { View, Text, FlatList, Button, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import CityWeatherListItem from './components/CityWeatherListItem'
import AddCityModal from '../../entities/city/components/AddCityModal'
import { getAddedCities } from '../../entities/city/selectors'
import { colors } from '../../styles'

type Props = {
  addedCities: Array<City>,
  navigation: Object
}

type State = {
  showAddCityModal: boolean
}

export class Dashboard extends React.Component<Props, State> {

  static navigationOptions = ({ navigation }: { navigation: Object}) => ({
    title: 'Cities',
    headerRight: (
      <Button
        onPress={navigation.state.params ? navigation.state.params.toggleShowCityModal : () => {}}
        title='Add'
        accessibilityLabel='Add a city to your weather list'/>
      )
  })

  static defaultProps = {
    addedCities: [],
  }

  state = {
    showAddCityModal: false
  }

  componentWillMount() {
    this.props.navigation.setParams({ toggleShowCityModal: this.toggleShowCityModal })
  }

  toggleShowCityModal = () => {
    this.setState({ showAddCityModal: !this.state.showAddCityModal })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.props.addedCities}
          keyExtractor={(city: City) => 'cities-list-' + city.name}
          renderItem={(item: Object) => this.renderCityListItem(item)}
        />
        <AddCityModal
          visible={this.state.showAddCityModal}
          toggleVisibility={this.toggleShowCityModal}/>
      </View>
    )
  }

  renderCityListItem = ({ item }: { item: City }) =>
    <CityWeatherListItem
      navigate={this.props.navigation.navigate}
      city={item} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background
  },
  list: {
    backgroundColor: colors.widgetBackground,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.border
  },
  listItem: {
    padding: 10,
    height: 44
  },
})

export default connect(
  (state) => ({
    addedCities: getAddedCities(state)
  })
)(Dashboard)
