/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Categories, Favourites, More} from '@screens/index';
import {Category, Favourite, Homee, Moree} from '@assets/icons/svgs';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

export default function ApplicationNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Group>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: () => <Text>Home</Text>,
            tabBarIcon: () => <Homee />,
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            tabBarLabel: () => <Text>Categories</Text>,
            tabBarIcon: () => <Category />,
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={Favourites}
          options={{
            tabBarLabel: () => <Text>Favourites</Text>,
            tabBarIcon: () => <Favourite />,
          }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{
            tabBarLabel: () => <Text>More</Text>,
            tabBarIcon: () => <Moree />,
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}
