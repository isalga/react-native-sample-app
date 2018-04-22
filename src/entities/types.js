// @flow

export type City = {
  id: string,
  displayName: string,
  name: string,
  country: string
}

export type Weather = {
  cityId: string,
  temperature: string,
  windDirection: string,
  windSpeed: string,
  humidity: string,
  precipitation: string
}
