import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Dashboard } from './index'

Enzyme.configure({ adapter: new Adapter() })
jest.mock('react-native-autocomplete-input', () => () => null)

const city = {
  id: '1',
  displayName: 'Abu Dhabi',
  name: 'Abu_Dhabi',
  country: 'united_arab_Emirates'
}

const navigation = {
  setParams: () => {},
  state: { params: {} }
}

describe('Dashboard screen component', () => {

  it('should render correctly', () => {
    const wrapper = Enzyme.shallow(
      <Dashboard
        addedCities={[city]}
        navigation={navigation}/>)
    expect(wrapper).toMatchSnapshot()
    wrapper.instance().toggleShowCityModal()
    expect(wrapper.update()).toMatchSnapshot()
  })
})
