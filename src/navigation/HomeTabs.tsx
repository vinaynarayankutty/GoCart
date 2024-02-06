/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Categories, Favourites, Home, More} from '@screens/index';
import {
  Category,
  Favourite,
  Homee,
  Moree,
  HomeActive,
} from '@assets/icons/svgs';
import {fonts} from '@theme/fonts';
import {colors} from '@theme/colors';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Group>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: ({focused}) =>
              !focused && <Text style={styles.tabLabel}>Home</Text>,
            tabBarIcon: ({focused}) =>
              focused ? <HomeActive width={25} height={25} /> : <Homee />,
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            tabBarLabel: ({focused}) =>
              !focused && <Text style={styles.tabLabel}>Categories</Text>,
            tabBarIcon: ({focused}) => (
              <Category
                color={focused ? colors.BrightYellow : colors.White}
                width={25}
                height={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={Favourites}
          options={{
            tabBarLabel: ({focused}) =>
              !focused && <Text style={styles.tabLabel}>Favourites</Text>,
            tabBarIcon: ({focused}) => (
              <Favourite
                color={focused ? colors.BrightYellow : colors.White}
                width={25}
                height={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{
            tabBarLabel: ({focused}) =>
              !focused && <Text style={styles.tabLabel}>More</Text>,
            tabBarIcon: ({focused}) => (
              <Moree
                color={focused ? colors.BrightYellow : '#3E4554'}
                width={25}
                height={25}
              />
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 12,
    fontFamily: fonts.ManropeMedium,
    color: colors.CoolGray,
  },
});
