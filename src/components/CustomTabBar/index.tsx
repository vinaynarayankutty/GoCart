import {TabBarComponentProps} from '@constants/types';
import React, {useEffect, useRef} from 'react';
import {Platform, Pressable, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import styles from './Styles';
import {colors} from '@theme/colors';
const CustomTabBar = ({
  active,
  options,
  onLayout,
  onPress,
}: TabBarComponentProps) => {
  const ref = useRef(null);
  const textRef = useRef(null);
  const yOffset = useSharedValue(0);
  const containerOffset = useSharedValue(10);

  useEffect(() => {
    if (active && ref?.current) {
      // @ts-ignore
      yOffset.value = -10;
      containerOffset.value = -10;
    } else {
      containerOffset.value = 10;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // animations ------------------------------------------------------

  const animatedComponentCircleStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: colors.DarkGunmetal,
      transform: [
        {
          scale: withTiming(active ? 1 : 0, {duration: 250}),
        },
        {
          translateY: yOffset.value,
        },
      ],
    };
  });

  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 0.5, {duration: 250}),
      transform: [
        {
          translateY: withTiming(containerOffset.value, {duration: 250}),
        },
      ],
    };
  });

  const animatedLabelContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 0 : 1, {duration: 250}),
      transform: [
        {
          translateY: withTiming(containerOffset.value, {duration: 250}),
        },
      ],
    };
  });

  return (
    <Pressable onPress={onPress} onLayout={onLayout} style={styles.component}>
      <Animated.View
        style={[styles.componentCircle, animatedComponentCircleStyles]}
      />
      <Animated.View
        style={[
          styles.iconContainer,
          animatedIconContainerStyles,
          {top: Platform.OS === 'ios' ? (!active ? -10 : 0) : 0},
        ]}>
        {/* @ts-ignore */}
        {options.tabBarIcon ? options.tabBarIcon({ref}) : <Text>?</Text>}
      </Animated.View>
      <Animated.View
        style={[
          styles.labelContainer,
          animatedLabelContainerStyles,
          {top: Platform.OS === 'ios' ? (!active ? 30 : 40) : 40},
        ]}>
        {/* @ts-ignore */}
        {options.tabBarLabel ? options.tabBarLabel({textRef}) : <Text>?</Text>}
      </Animated.View>
    </Pressable>
  );
};

export default CustomTabBar;
