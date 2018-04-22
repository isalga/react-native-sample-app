import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CityWeather } from './CityWeather'

Enzyme.configure({ adapter: new Adapter() })

const city = {
  id: '1',
  displayName: 'Abu Dhabi',
  name: 'Abu_Dhabi',
  country: 'united_arab_Emirates'
}

const weather = {
  cityId: '1',
  temperature: 'testtemperature',
  windDirection: 'testwindDirection',
  windSpeed: 'testwindSpeed',
  humidity: 'testhumidity',
  precipitation: 'testprecipitation'
}

describe('CityWeather screen component', () => {

  it('should render correctly', () => {
    const wrapper = Enzyme.shallow(
      <CityWeather
        city={city}
        weather={weather}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
