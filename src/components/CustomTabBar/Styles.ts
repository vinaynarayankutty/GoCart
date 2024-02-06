import {StyleSheet} from 'react-native';
import {colors} from '@theme/colors';

const Styles = StyleSheet.create({
  component: {
    height: 60,
    width: 60,
    marginTop: -5,
  },

  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: colors.White,
  },

  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  labelContainer: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Styles;
