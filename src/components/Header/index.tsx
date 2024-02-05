import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';

import styles from './Styles';

type HeaderProps = {
  leftComponent?: ReactNode;
  middleComponent?: ReactNode;
  rightComponent?: ReactNode;
};

const Header = ({}: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.welcomeText}>Hey, Vinay</Text>
      <Pressable
        style={styles.cartBtn}
        onPress={() => console.warn('Go to cart')}>
        <Bag width={25} height={25} />
      </Pressable>

      <View style={styles.bagCountContainer}>
        <Text>5</Text>
      </View>
    </View>
  );
};

export default Header;
