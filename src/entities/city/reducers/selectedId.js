// @flow
import { SET_SELECTED_ID } from '../actions'

const initialState: ?string = null

export default (state: ?string = initialState, action: Object) => {
  switch (action.type) {
  case SET_SELECTED_ID:
    return action.id
  default:
    return state
  }
}
