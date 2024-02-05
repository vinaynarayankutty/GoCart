/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Cart, Home, ProductDetails, Success} from '@screens/index';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Homescreen" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
}
