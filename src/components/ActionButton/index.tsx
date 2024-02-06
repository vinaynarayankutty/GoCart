import {Text, Pressable} from 'react-native';
import React from 'react';

import {ActionBtnProps} from '@constants/types';
import styles from './Styles';

const ActionButton = ({
  type = 'Primary',
  btnLabel,
  btnContainerStyle,
  disabled = false,
  onPressBtn,
}: ActionBtnProps) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPressBtn}
      style={({pressed}) => [
        styles.btnContainer,
        type === 'Secondary' && styles.secondaryBtnContainer,
        btnContainerStyle,
        {opacity: pressed ? 0.5 : 1},
      ]}>
      <Text
        style={[
          styles.btnLabelStyle,
          type === 'Secondary' && styles.secondaryBtnLabelStyle,
        ]}>
        {btnLabel}
      </Text>
    </Pressable>
  );
};

export default ActionButton;
