import {
  getAddedCities,
  getNotAddedCities,
  getSelectedCity
} from './selectors'

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

let state = {
  citiesList: {
    [Abu_Dhabi.id]: Abu_Dhabi,
    [Barcelona.id]: Barcelona
  }
}

describe('city selectors', () => {

  it('should return added cities', () => {
    state.addedCitiesIds = ['2']
    expect(
      getAddedCities(state)
    ).toEqual([Barcelona])
  })

  it('should return not added cities', () => {
    state.addedCitiesIds = ['2']
    expect(
      getNotAddedCities(state)
    ).toEqual([Abu_Dhabi])
  })

  it('should return selected city', () => {
    state.selectedCityId = '1'
    expect(
      getSelectedCity(state)
    ).toEqual(Abu_Dhabi)
  })

})
