import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Panel from './Panel'

Enzyme.configure({ adapter: new Adapter() })

const weather = {
  cityId: '1',
  temperature: 'testtemperature',
  windDirection: 'testwindDirection',
  windSpeed: 'testwindSpeed',
  humidity: 'testhumidity',
  precipitation: 'testprecipitation'
}

 const title = 'Berlin'

describe('Panel screen component', () => {

  it('should render correctly', () => {
    const wrapper = Enzyme.shallow(
      <Panel
        title={title}
        weather={weather}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
