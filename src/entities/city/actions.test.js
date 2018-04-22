import * as actions from './actions'

describe('city actions', () => {

  it('should create a ADD_CITY action', () => {
    const id = '1'
    const expectedAction = { type: actions.ADD_CITY, id }
    expect(actions.addCity(id)).toEqual(expectedAction)
  })

  it('should create a ADD_CITY action', () => {
    const id = '1'
    const expectedAction = { type: actions.REMOVE_CITY, id }
    expect(actions.removeCity(id)).toEqual(expectedAction)
  })

  it('should create a SET_SELECTED_ID action', () => {
    const id = '1'
    const expectedAction = { type: actions.SET_SELECTED_ID, id }
    expect(actions.setSelectedId(id)).toEqual(expectedAction)
  })
})
