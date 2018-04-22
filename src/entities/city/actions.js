// @flow
const PREFIX = 'CITY_'
export const ADD_CITY = PREFIX + 'ADD_CITY'
export const REMOVE_CITY = PREFIX + 'REMOVE_CITY'
export const SET_SELECTED_ID = PREFIX + 'SET_SELECTED_ID'

export const addCity = (id: string) => ({ type: ADD_CITY, id })
export const removeCity = (id: string) => ({ type: REMOVE_CITY, id })
export const setSelectedId = (id: string) => ({ type: SET_SELECTED_ID, id })
