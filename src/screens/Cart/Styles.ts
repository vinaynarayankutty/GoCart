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

  topContainer: {
    flex: 0.1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginBottom: 20,
  },

  header: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },

  backBtn: {
    height: 35,
    width: 35,
    borderRadius: 35 / 2,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.GhostWhite,
  },

  shoppingCart: {
    fontSize: 16,
    fontFamily: fonts.ManropeRegular,
    color: colors.DarkGunmetal,
    paddingLeft: 30,
  },

  midContainer: {
    flex: 1,
  },

  emptyCartContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},

  emptyCart: {
    fontSize: 20,
    fontFamily: fonts.ManropeBold,
    color: colors.DarkGunmetal,
  },

  cartViewContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderBottomColor: colors.CoolGray,
  },

  groupContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cartItemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    aspectRatio: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.CoolGray,
  },

  cartItemDetails: {
    marginHorizontal: 20,
  },

  title: {
    fontSize: 14,
    fontFamily: fonts.ManropeMedium,
    color: colors.DarkGunmetal,
    paddingBottom: 2,
  },

  price: {
    fontSize: 14,
    fontFamily: fonts.ManropeRegular,
    color: colors.DarkGunmetal,
  },

  qtyContainer: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 12,
  },

  quantity: {
    fontSize: 14,
    fontFamily: fonts.ManropeMedium,
    color: colors.DarkGunmetal,
    paddingHorizontal: 15,
  },

  deleteBtn: {
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.CarminePink,
  },

  bottomContainer: {
    flex: 0.6,
    justifyContent: 'space-between',
  },

  editBtnContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  editBtn: {
    paddingHorizontal: 20,
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  editText: {
    fontSize: 14,
    fontFamily: fonts.ManropeMedium,
    color: colors.CyanCobaltBlue,
  },

  checkoutContainer: {
    flex: 0.8,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.GhostWhite,
    justifyContent: 'space-between',
  },

  total: {
    fontFamily: fonts.ManropeSemiBold,
  },

  checkoutBtn: {width: '100%'},
});

export default Styles;
