import reducer, { initialState } from './selectedId'
import * as actions from '../actions'

describe('selected city ID reducer', () => {

  it('should handle SET_SELECTED_ID', () => {
    const expectedState = 'abcd'
    expect(
      reducer(initialState, actions.setSelectedId('abcd'))
    ).toEqual(expectedState)
  })
})
