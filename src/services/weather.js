// @flow
import type { City, Weather } from '../entities/types'
import config from '../config'

export const getWeatherByCity = async (city: City): Promise<Weather> => {
  try {
    const url = `https://api.wunderground.com/api/${config.wunderground_key}/conditions/q/${city.country}/${city.name}.json`
    const response = await fetch(url)
    const responseJson = await response.json()
    const weather: ?Weather = parseAPIobject(responseJson, city.id)

    if (!weather)
      throw new Error('could not parse API response')
    else
      return weather
  } catch (error) {
    throw new Error(error)
  }
}

const parseAPIobject = (obj: ?Object, cityId: string) :?Weather => {
  if (obj !== null && typeof obj === 'object' && !(obj instanceof Array))
    return {
      cityId,
      description: obj.current_observation.weather || '',
      temperature: obj.current_observation.temp_c || '',
      windDirection: obj.current_observation.wind_dir || '',
      windSpeed: obj.current_observation.wind_kph || '',
      humidity: obj.current_observation.relative_humidity || '',
      precipitation: obj.current_observation.precip_1hr_string || ''
    }
  else
    return null
}
