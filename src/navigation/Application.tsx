/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {Cart, ProductDetails, Success} from '@screens/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabs from './HomeTabs';

const Stack = createNativeStackNavigator();

export default function ApplicationNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
}
