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
    paddingHorizontal: 20,
  },

  header: {height: 50, justifyContent: 'center'},

  favourite: {
    fontSize: 20,
    fontFamily: fonts.ManropeBold,
    color: colors.DarkGunmetal,
  },

  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 15,
    borderBottomColor: colors.CoolGray,
  },

  groupContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  serialNo: {
    fontSize: 14,
    fontFamily: fonts.ManropeBold,
    color: colors.DarkGunmetal,
    paddingRight: 10,
  },

  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    aspectRatio: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.CoolGray,
  },

  itemDetails: {
    marginHorizontal: 20,
  },

  title: {
    fontSize: 14,
    fontFamily: fonts.ManropeMedium,
    color: colors.DarkGunmetal,
    paddingBottom: 2,
  },

  description: {
    fontSize: 12,
    fontFamily: fonts.ManropeRegular,
    color: colors.DarkGunmetal,
    paddingRight: 40,
  },

  priceContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  price: {
    fontSize: 12,
    fontFamily: fonts.ManropeSemiBold,
    color: colors.DarkGunmetal,
  },
});

export default Styles;
