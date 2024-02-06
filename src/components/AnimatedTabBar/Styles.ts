import {colors} from '@theme/colors';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.White,
    height: 70,
  },
  activeBackground: {
    position: 'absolute',
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default Styles;
