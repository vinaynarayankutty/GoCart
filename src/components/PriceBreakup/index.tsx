import {View, Text} from 'react-native';
import React from 'react';

import {PriceBreakupProps} from '@constants/types';
import styles from './Styles';

const PriceBreakup = ({title, value, textStyle}: PriceBreakupProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.value, textStyle]}>${value}</Text>
    </View>
  );
};

export default PriceBreakup;
