// @flow
import { ADD_CITY, REMOVE_CITY } from '../actions'

export const initialState: Array<string> = []

export default (state: Array<string> = initialState, action: Object) => {
  switch (action.type) {
  case ADD_CITY:
    return [...state, action.id]
  case REMOVE_CITY:
    return state.filter((id) => id != action.id)
  default:
    return state
  }
}
