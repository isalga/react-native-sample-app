// @flow
import type { City } from '../types'
import { createSelector } from 'reselect'

const getCities = (state) => state.citiesList
const getAddedIds = (state) => state.addedCitiesIds
const getSelectedId = (state) => state.selectedCityId

export const getAddedCities = createSelector(
  getCities,
  getAddedIds,
  (cities: { [string]: City }, ids: Array<string>) => {
    return ids.map((id) => cities[id])
  }
)

export const getNotAddedCities = createSelector(
  getCities,
  getAddedIds,
  (cities: { [string]: City }, ids: Array<string>) => {
    const citiesArray: Array<mixed> = Object.values(cities)
    return citiesArray
      .filter((city) =>
        !ids.some((id: string) => {
          if (city && typeof city == 'object')
            return id == city.id
          else
            return false
        }))
  }
)

export const getSelectedCity = createSelector(
  getCities,
  getSelectedId,
  (cities: { [string]: City }, id: ?string) => {
    if (id)
      return cities[id]
    else
      return null
  }
)
