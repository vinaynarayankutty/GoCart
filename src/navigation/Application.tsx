import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Categories, Favourites, Home, More} from '@screens/index';

const Tab = createBottomTabNavigator();

export default function ApplicationNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Group>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="Favourites" component={Favourites} />
        <Tab.Screen name="More" component={More} />
      </Tab.Group>
    </Tab.Navigator>
  );
}
