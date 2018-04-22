// @flow
import type { Weather } from '../../types'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../../../styles'

type Props = {
  weather: ?Weather,
  title: ?string
}

const WeatherPanel = ({ weather, title }: Props) => {
  if (!weather)
    return (
      <View style={styles.container}>
        <Text>Uuups... information was not found</Text>
      </View>
    )
  else
    return (
      <View style={styles.container}>
        <Text>{ title }</Text>
        <Text>temperature: { weather.temperature }</Text>
        <Text>wind: { weather.windDirection } / { weather.windSpeed }</Text>
        <Text>humidity: { weather.humidity }</Text>
        <Text>precipitation: { weather.precipitation }</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.widgetBackground,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.border
  }
})

export default WeatherPanel
