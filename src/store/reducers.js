import { combineReducers } from 'redux'
import citiesList from '../entities/city/reducers/list'
import addedCitiesIds from '../entities/city/reducers/addedIds'
import selectedCityId from '../entities/city/reducers/selectedId'
import weather from '../entities/weather/reducer'

export default combineReducers({
  citiesList,
  addedCitiesIds,
  selectedCityId,
  weather
})
