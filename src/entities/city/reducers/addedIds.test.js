import reducer, { initialState } from './addedIds'
import * as actions from '../actions'

describe('added cities reducer', () => {

  it('should handle ADD_CITY', () => {
    const expectedState = ['abcd']
    expect(
      reducer(initialState, actions.addCity('abcd'))
    ).toEqual(expectedState)
  })

  it('should handle REMOVE_CITY', () => {
    const expectedState = ['135']
    expect(
      reducer(['abcd', '135'], actions.removeCity('abcd'))
    ).toEqual(expectedState)
  })
})
