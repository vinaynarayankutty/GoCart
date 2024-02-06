/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {store} from '@store/store';
import ApplicationNavigator from '@navigation/Application';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer>
          <ApplicationNavigator />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
