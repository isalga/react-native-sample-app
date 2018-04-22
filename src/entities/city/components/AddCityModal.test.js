import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { AddCityModal } from '../components/AddCityModal'

Enzyme.configure({ adapter: new Adapter() })
jest.mock('react-native-autocomplete-input', () => () => null)

const Abu_Dhabi = {
  id: '1',
  displayName: 'Abu Dhabi',
  name: 'Abu_Dhabi',
  country: 'united_arab_Emirates'
}
const Barcelona = {
  id: '2',
  displayName: 'Barcelona',
  name: 'Barcelona',
  country: 'spain'
}

const cities = [Abu_Dhabi, Barcelona]

describe('AddCityModal component', () => {

  it('should call props.addCity onAddCityModalItemPress', () => {
    const addCity = jest.fn()
    const wrapper = Enzyme.shallow(
      <AddCityModal
        cities={cities}
        toggleVisibility={() => {}}
        addCity={addCity}
        visible={true}/>)

    wrapper.instance().onAddCityModalItemPress('1')()

    expect(addCity.mock.calls.length).toEqual(1)
  })

  it('should render correctly', () => {
    const wrapper = Enzyme.shallow(
      <AddCityModal
        cities={cities}
        toggleVisibility={() => {}}
        addCity={() => {}}
        visible={true}/>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should render hidded element', () => {
    const wrapper = Enzyme.shallow(
      <AddCityModal
        cities={cities}
        toggleVisibility={() => {}}
        addCity={() => {}}
        visible={false}/>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should not break', () => {
    const wrapper = Enzyme.shallow(
      <AddCityModal/>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
