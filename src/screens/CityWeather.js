// @flow
import type { City, Weather } from '../entities/types'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { getSelectedCity } from '../entities/city/selectors'
import { getWeatherByCityId } from '../entities/weather/selectors'
import WeatherPanel from '../entities/weather/components/Panel'
import { colors } from '../styles'

type Props = {
  city: ?City,
  weather: ?Weather
}

export const CityWeather = ({ weather, city }: Props) =>
  <View style={styles.container}>
    <WeatherPanel weather={weather} title={city && city.name}/>
  </View>

CityWeather.navigationOptions = {
  title: 'Weather Info'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  }
})

export default connect(
  (state) => ({
    city: getSelectedCity(state),
    weather: getWeatherByCityId(state)(state.selectedCityId)
  }),
  (dispatch) => ({})
)(CityWeather)
