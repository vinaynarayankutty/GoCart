import {StyleSheet} from 'react-native';
import {colors} from '@theme/colors';
import {fonts} from '@theme/fonts';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },

  topSafeContainer: {
    flex: 0,
    backgroundColor: colors.White,
  },

  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  success: {
    fontSize: 40,
    fontFamily: fonts.ManropeBold,
    color: colors.BrightYellow,
    textAlign: 'center',
  },

  btnContainer: {
    flex: 0.2,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default Styles;
