import {colors} from '@theme/colors';
import {fonts} from '@theme/fonts';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  deliveryTitle: {
    fontSize: 11,
    fontFamily: fonts.ManropeBold,
    color: colors.GhostWhite,
    opacity: 0.5,
  },

  deliveryValueContainer: {flexDirection: 'row', alignItems: 'center'},

  deliveryValue: {
    fontSize: 14,
    fontFamily: fonts.ManropeMedium,
    color: colors.GhostWhite,
    paddingRight: 10,
  },
});

export default Styles;
