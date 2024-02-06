import {View, Text} from 'react-native';
import React from 'react';

import {DownArrow} from '@assets/icons/svgs';
import styles from './Styles';
import {DeliveryDetailsProps} from '@constants/types';

const DeliveryDetails = ({title, value}: DeliveryDetailsProps) => {
  return (
    <View>
      <Text style={styles.deliveryTitle}>{title}</Text>
      <View style={styles.deliveryValueContainer}>
        <Text style={styles.deliveryValue}>{value}</Text>
        <DownArrow height={12} width={12} />
      </View>
    </View>
  );
};

export default DeliveryDetails;
