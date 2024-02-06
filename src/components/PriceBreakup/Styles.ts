import {colors} from '@theme/colors';
import {fonts} from '@theme/fonts';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },

  title: {
    fontSize: 14,
    fontFamily: fonts.ManropeRegular,
    color: colors.DarkElectricBlue,
  },

  value: {
    fontSize: 14,
    fontFamily: fonts.ManropeMedium,
    color: colors.DarkGunmetal,
  },
});

export default Styles;
