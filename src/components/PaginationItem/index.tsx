import React from 'react';
import {View} from 'react-native';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {colors} from '@theme/colors';
import styles from './Styles';

const PaginationItem: React.FC<{
  index: number;
  currentIndex: number;
  length: number;
  animValue: SharedValue<number>;
}> = props => {
  const {animValue, index, length, currentIndex} = props;
  const width = 30;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  return (
    <View style={[styles.viewContainer, {width}]}>
      <Animated.View
        style={[
          styles.animatedContainer,
          {
            backgroundColor:
              currentIndex === index
                ? colors.BrightYellow
                : colors.ChineseSilver,
          },
          animStyle,
        ]}
      />
    </View>
  );
};

export default PaginationItem;
