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
    flex: 0.7,
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  cartBtn: {
    padding: 5,
  },

  bagCountContainer: {
    position: 'absolute',
    top: -6,
    right: -6,
    height: 25,
    width: 25,
    borderRadius: 25 / 2,
    backgroundColor: colors.BrightYellow,
    justifyContent: 'center',
    alignItems: 'center',
  },

  countText: {
    fontSize: 14,
    fontFamily: fonts.ManropeSemiBold,
    color: colors.White,
  },

  brand: {
    fontSize: 40,
    fontFamily: fonts.ManropeRegular,
    color: colors.DarkGunmetal,
  },

  titleFont: {fontSize: 35},

  title: {
    fontSize: 40,
    fontFamily: fonts.ManropeBold,
    color: colors.DarkGunmetal,
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  reviewText: {
    fontSize: 14,
    fontFamily: fonts.ManropeRegular,
    color: colors.ChineseSilver,
  },

  midContainer: {
    flex: 1,
  },

  productImagesContainer: {flex: 1},

  favouriteContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.White,
  },

  favBtn: {
    padding: 5,
  },

  bottomContainer: {flex: 1},

  priceContainer: {
    flex: 0.2,

    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },

  price: {
    fontSize: 16,
    fontFamily: fonts.ManropeBold,
    color: colors.CyanCobaltBlue,
  },

  discountContainer: {
    height: 28,
    borderRadius: 15,
    paddingHorizontal: 12,
    backgroundColor: colors.CyanCobaltBlue,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },

  discount: {
    fontSize: 12,
    fontFamily: fonts.ManropeBold,
    color: colors.GhostWhite,
  },

  actionBtnContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  descriptionContainer: {flex: 0.35, paddingHorizontal: 20},

  details: {
    fontSize: 16,
    fontFamily: fonts.ManropeRegular,
    color: colors.DarkGunmetal,
  },

  description: {
    fontSize: 16,
    fontFamily: fonts.ManropeRegular,
    color: colors.CoolGray,
  },
});

export default Styles;
