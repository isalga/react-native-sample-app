import 'regenerator-runtime/runtime'
import { all } from 'redux-saga/effects'
import weatherSaga from '../entities/weather/saga.js'

export default function* rootSaga() {
  yield all([
    weatherSaga(),
  ])
}
