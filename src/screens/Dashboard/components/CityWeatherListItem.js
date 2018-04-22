// @flow
import type { City, Weather } from '../../../entities/types'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { loadStart as loadWeatherStart } from '../../../entities/weather/actions'
import { setSelectedId, removeCity } from '../../../entities/city/actions'

type Props = {
  city: ?City,
  weather: ?Weather,
  selectCity: (id: string) => void,
  removeCity: (id: string) => void,
  loadWeather: (city: City) => void,
  navigate: (screen: string) => void
}

export class CityWeatherListItem extends React.Component<Props> {

  static defaultProps = {
    loadWeather: () => {},
    selectCity: () => {},
    removeCity: () => {},
    navigate: () => {}
  }

  componentDidMount() {
    if (!this.props.weather && this.props.city)
      this.props.loadWeather(this.props.city)
  }

  onPressItem = () => {
    if (this.props.city) {
      this.props.selectCity(this.props.city.id)
      this.props.navigate('CityWeather')
    }
  }

  onRemoveItem = () => {
    if (this.props.city) {
      this.props.removeCity(this.props.city.id)
    }
  }

  render() {
    const { city, weather } = this.props
    if (!city || typeof city != 'object')
      return null

    return (
      <View style={styles.listItem}>
        <TouchableOpacity
          onPress={this.onPressItem}>
          <Text>
            { city.displayName } - { weather ? weather.temperature : '...loading' }
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.onRemoveItem}>
          <Icon name='delete'/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    height: 44
  },
})

export default connect(
  (state, { city }) => ({
    weather: state.weather[city.id]
  }),
  (dispatch) => ({
    selectCity: (id) => {
      dispatch(setSelectedId(id))
    },
    removeCity: (id) => {
      dispatch(removeCity(id))
    },
    loadWeather: (city) => {
      dispatch(loadWeatherStart(city))
    }
  })
)(CityWeatherListItem)
