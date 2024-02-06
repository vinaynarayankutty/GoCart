import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import ActionButton from '@components/ActionButton';
import {useAppDispatch} from '@store/hooks';
import {clearCart} from '@store/productSlice';
import styles from './Styles';

const Success = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  return (
    <>
      <SafeAreaView edges={['top']} style={styles.topSafeContainer} />
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <View style={styles.mainContainer}>
          <Text style={styles.success}>Order Placed Successfully!</Text>
        </View>
        <View style={styles.btnContainer}>
          <ActionButton
            type="Secondary"
            btnLabel="Go To Home"
            onPressBtn={() => {
              dispatch(clearCart());
              navigation.navigate('Homescreen');
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Success;
