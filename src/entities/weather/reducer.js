// @flow
import type { Weather } from '../types'
import * as actions from './actions'

const initialState: { [string]: Weather } = {}

export default (state: { [string]: Weather } = initialState, action: Object) => {
  switch (action.type) {
  case actions.LOAD_SUCCESS:
    const weather: Weather = action.weather
    state['' + weather.cityId] = weather
    return {
      ...state
    }
  default:
    return state
  }
}
