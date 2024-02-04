/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import {store} from '@store/store';
import ApplicationNavigator from '@navigation/Application';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ApplicationNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
