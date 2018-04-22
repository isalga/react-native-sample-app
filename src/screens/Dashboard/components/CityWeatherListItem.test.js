import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CityWeatherListItem } from './CityWeatherListItem'

Enzyme.configure({ adapter: new Adapter() })

const city = {
  id: '1',
  displayName: 'Abu Dhabi',
  name: 'Abu_Dhabi',
  country: 'united_arab_Emirates'
}

const weather = {}

describe('CityWeatherListItem component', () => {

  it('should call props.loadWeather', () => {
    const loadWeather = jest.fn()
    const wrapper = Enzyme.shallow(
      <CityWeatherListItem
        city={city}
        loadWeather={loadWeather}/>)
    expect(loadWeather.mock.calls.length).toEqual(1)
  })

  it('should call props.selectCity and props.navigate onPressItem', () => {
    const selectCity = jest.fn()
    const navigate = jest.fn()
    const wrapper = Enzyme.shallow(
      <CityWeatherListItem
        city={city}
        selectCity={selectCity}
        navigate={navigate}/>)

    wrapper.instance().onPressItem()

    expect(selectCity.mock.calls.length).toEqual(1)
    expect(navigate.mock.calls.length).toEqual(1)
  })

  it('should call props.removeCity onRemoveItem', () => {
    const removeCity = jest.fn()
    const wrapper = Enzyme.shallow(
      <CityWeatherListItem
        city={city}
        removeCity={removeCity}/>)

    wrapper.instance().onRemoveItem()

    expect(removeCity.mock.calls.length).toEqual(1)
  })

  it('should render correctly', () => {
    const wrapper = Enzyme.shallow(
      <CityWeatherListItem
        city={city}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
