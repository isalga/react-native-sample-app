// @flow
import type { City } from '../../types'
import React from 'react'
import { View, Text, Button, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import Autocomplete from 'react-native-autocomplete-input'
import { connect } from 'react-redux'
import { addCity } from '../actions'
import { getAddedCities, getNotAddedCities } from '../selectors'

type Props = {
  addCity: (id: string) => void,
  toggleVisibility: () => void,
  cities: Object,
  visible: boolean
}

type State = {
  query: string
}

export class AddCityModal extends React.Component<Props, State> {

  static defaultProps = {
    addCity: () => {},
    toggleVisibility: () => {},
    cities: [],
    visible: false
  }

  state = {
    query: ''
  }

  onAddCityModalItemPress = (id: string) => () => {
    this.props.addCity(id)
    this.props.toggleVisibility()
  }

  findCities(query: string) {
    if (query === '') {
      return []
    }
    const regex = new RegExp(`${query.trim()}`, 'i')
    return this.props.cities.filter(city => city.displayName.search(regex) >= 0)
  }

  render() {
    const { query } = this.state
    const data = this.findCities(query)

    return (
        <Modal
          animationType='slide'
          transparent={false}
          visible={this.props.visible}
          onRequestClose={this.props.toggleVisibility}>
            <View style={styles.container}>
              <Button
                onPress={this.props.toggleVisibility}
                title='Close'
                accessibilityLabel='Close modal'/>
              <Autocomplete
                data={data}
                defaultValue={query}
                onChangeText={text => this.setState({ query: text })}
                renderItem={city => (
                  <TouchableOpacity onPress={this.onAddCityModalItemPress(city.id)}>
                    <Text>{city.displayName}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
        </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  }
})

export default connect(
  (state) => ({
    cities: getNotAddedCities(state),
  }),
  (dispatch) => ({
    addCity: (id) => {
      dispatch(addCity(id))
    }
  })
)(AddCityModal)
