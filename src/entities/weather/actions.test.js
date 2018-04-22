import * as actions from './actions'

describe('weather actions', () => {

  it('should create a LOAD_START action', () => {
    const city = {}
    const expectedAction = { type: actions.LOAD_START, city }
    expect(actions.loadStart(city)).toEqual(expectedAction)
  })

  it('should create a LOAD_SUCCESS action', () => {
    const weather = {}
    const expectedAction = { type: actions.LOAD_SUCCESS, weather }
    expect(actions.loadSuccess(weather)).toEqual(expectedAction)
  })

  it('should create a LOAD_ERROR action', () => {
    const error = {}
    const expectedAction = { type: actions.LOAD_ERROR, error }
    expect(actions.loadError(error)).toEqual(expectedAction)
  })
})
