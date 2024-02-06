/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
import AnimatedTabBar from '@components/AnimatedTabBar';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <AnimatedTabBar {...props} />}>
      <Tab.Group>
        <Tab.Screen
          name="Homescreen"
          component={Home}
          options={{
            tabBarLabel: ({textRef}: any) => (
              <Text ref={textRef} style={styles.tabLabel}>
                Home
              </Text>
            ),
            tabBarIcon: ({ref}: any) => (
              <View ref={ref}>
                <HomeActive width={25} height={25} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            tabBarLabel: ({textRef}: any) => (
              <Text ref={textRef} style={styles.tabLabel}>
                Categories
              </Text>
            ),
            tabBarIcon: ({ref}: any) => (
              <View ref={ref}>
                <Category color={colors.BrightYellow} width={25} height={25} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={Favourites}
          options={{
            tabBarLabel: ({textRef}: any) => (
              <Text ref={textRef} style={styles.tabLabel}>
                Favourites
              </Text>
            ),
            tabBarIcon: ({ref}: any) => (
              <View ref={ref}>
                <Favourite color={colors.BrightYellow} width={25} height={25} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{
            tabBarLabel: ({textRef}: any) => (
              <Text ref={textRef} style={styles.tabLabel}>
                More
              </Text>
            ),
            tabBarIcon: ({ref}: any) => (
              <View ref={ref}>
                <Moree color={colors.BrightYellow} width={25} height={25} />
              </View>
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 10,
    fontFamily: fonts.ManropeMedium,
    color: colors.CoolGray,
  },
});
