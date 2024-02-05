import {StyleSheet} from 'react-native';
import {colors} from '@theme/colors';
import {fonts} from '@theme/fonts';

const Styles = StyleSheet.create({
  btnContainer: {
    height: 60,
    width: '40%',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.CyanCobaltBlue,
    borderWidth: 0,
  },

  secondaryBtnContainer: {
    borderWidth: 1,
    borderColor: colors.CyanCobaltBlue,
    backgroundColor: colors.White,
  },

  btnLabelStyle: {
    fontSize: 14,
    fontFamily: fonts.ManropeSemiBold,
    color: colors.White,
  },

  secondaryBtnLabelStyle: {
    color: colors.CyanCobaltBlue,
  },
});

export default Styles;
