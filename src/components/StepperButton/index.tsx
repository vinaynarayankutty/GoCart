import {Pressable} from 'react-native';
import React from 'react';

import {StepperBtnProps} from '@constants/types';
import {Add, Minus} from '@assets/icons/svgs';
import styles from './Styles';

const StepperButton = ({type, onPressBtn}: StepperBtnProps) => {
  return (
    <Pressable
      onPress={onPressBtn}
      style={({pressed}) => [
        styles.btnContainer,
        {opacity: pressed ? 0.5 : 1},
      ]}>
      {type === 'minus' ? <Minus /> : <Add color="#130F26" />}
    </Pressable>
  );
};

export default StepperButton;
