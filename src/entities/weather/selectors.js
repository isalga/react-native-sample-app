// @flow
import type { Weather } from '../types'
import { createSelector } from 'reselect'

const getWeatherMap = (state: Object) => state.weather

export const getWeatherByCityId = createSelector(
  getWeatherMap,
  (weatherMap: { [string]: Weather }) => (id: string): ?Weather => {
    const weather: ?Weather = weatherMap[id]
    if (weather)
      return weather
    else
      return null
  }
)
