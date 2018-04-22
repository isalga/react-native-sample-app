import SagaTester from 'redux-saga-tester'
import { combineReducers } from 'redux'
import reducer, { initialState } from './reducer'
import * as actions from './actions'

import saga from './saga'

jest.mock('../../services/weather', () => ({
  getWeatherByCity: () => new Promise((resolve) => {
    resolve({ cityId: '1', temperature: '20.0' });
  })
}));

describe('weather saga', () => {

  let sagaTester = null

  beforeEach(() => {
    if (sagaTester)
      sagaTester.reset(true)

    sagaTester = new SagaTester({
      initialState,
      reducers: combineReducers({
        weather: reducer
      })
    })
    sagaTester.start(saga)
  })

  it('should dispatch actions when load weather succeed', async () => {
    const expectedActions = [
      actions.loadStart(),
      actions.loadSuccess({ cityId: '1', temperature: '20.0' })
    ]

    sagaTester.dispatch(actions.loadStart())
    await sagaTester.waitFor(actions.LOAD_SUCCESS)

    expect(sagaTester.getCalledActions()).toEqual(expectedActions)
  })
})
