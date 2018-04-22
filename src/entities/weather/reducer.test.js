import reducer, { initialState } from './reducer'
import * as actions from './actions'

describe('weather list reducer', () => {

  it('should handle LOAD_SUCCESS', () => {
    const weather = { cityId: '1', temperature: '18.0' }
    const expectedState = {
      ['' + weather.cityId]: weather
    }
    expect(
      reducer(initialState, actions.loadSuccess(weather))
    ).toEqual(expectedState)
  })
})
