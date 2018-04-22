import { StackNavigator } from 'react-navigation'
import {
  DashboardScreen,
  CityWeatherScreen
} from './screens'

export default StackNavigator({
  Dashboard: {
    screen: DashboardScreen,
  },
  CityWeather: {
    screen: CityWeatherScreen
  }
}, {
  initialRouteName: 'Dashboard',
})
