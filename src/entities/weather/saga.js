// @flow
import type { City, Weather } from '../types'
import { takeLatest, put, call } from 'redux-saga/effects'
import { getWeatherByCity } from '../../services/weather'
import * as actions from './actions'

function* loadWeather({ city } :{ city :City }) :Generator<any,any,any> {
  try {
    const weather: Weather = yield call(getWeatherByCity, city)
    yield put(actions.loadSuccess(weather))
  } catch (error) {
    yield put(actions.loadError(error))
}
}

export default function* saga() :Generator<any,any,any> {
  yield takeLatest(actions.LOAD_START, loadWeather)
}
