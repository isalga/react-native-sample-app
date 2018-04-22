import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './src/Navigator';
import store from './src/store';

const App = () =>
  (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );

AppRegistry.registerComponent('WeatherApp', () => App);
