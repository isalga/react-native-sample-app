// @flow
import type { City, Weather } from '../types'

const PREFIX = 'WEATHER_'
export const LOAD_START = PREFIX + 'LOAD_START'
export const LOAD_SUCCESS = PREFIX + 'LOAD_SUCCESS'
export const LOAD_ERROR = PREFIX + 'LOAD_ERROR'

export const loadStart = (city: City) => ({ type: LOAD_START, city })
export const loadSuccess = (weather: Weather) => ({ type: LOAD_SUCCESS, weather})
export const loadError = (error: Error) => ({ type: LOAD_ERROR, error })
