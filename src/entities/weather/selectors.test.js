import {
  getWeatherByCityId
} from './selectors'

const cityWeather = {
  cityId: '2',
  temperature: '25.0'
}

let state = {
  weather: {
    '2': cityWeather
  }
}

describe('city selectors', () => {

  it('should return correct weather given a city id', () => {
    expect(
      getWeatherByCityId(state)('2')
    ).toEqual(cityWeather)
  })
})
