import {colors} from '@theme/colors';
import {fonts} from '@theme/fonts';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topSafeContainer: {
    flex: 0,
    backgroundColor: colors.CyanCobaltBlue,
  },

  topContainer: {
    flex: 0.5,
    backgroundColor: colors.CyanCobaltBlue,
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  welcomeText: {
    fontSize: 22,
    fontFamily: fonts.ManropeSemiBold,
    color: colors.GhostWhite,
  },

  cartBtn: {
    padding: 5,
  },

  bagCountContainer: {
    position: 'absolute',
    top: -10,
    right: -10,
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

  inputViewContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: colors.CatalinaBlue,
    borderRadius: 50,
    alignItems: 'center',
  },

  inputContainer: {
    width: '100%',
    paddingHorizontal: 10,
    color: colors.GhostWhite,
    fontSize: 18,
    fontFamily: fonts.ManropeMedium,
  },

  dropDownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bodyContainer: {
    flex: 1,
    backgroundColor: colors.White,
  },

  listTitle: {
    fontSize: 30,
    fontFamily: fonts.ManropeRegular,
    color: colors.DarkGunmetal,
    paddingHorizontal: 20,
  },

  listContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 16,
    backgroundColor: colors.GhostWhite,
    height: 200,
    borderRadius: 20,
    padding: 10,
  },

  likeContainer: {flex: 0.2},

  like: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  productImageContainer: {flex: 1},

  productImage: {
    resizeMode: 'stretch',
    width: 80,
    height: 80,
    borderRadius: 10,
    alignSelf: 'center',
  },

  productDetailsContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  itemPrice: {
    fontSize: 14,
    fontFamily: fonts.ManropeSemiBold,
    color: colors.DarkGunmetal,
  },

  itemTitle: {
    fontSize: 12,
    fontFamily: fonts.ManropeRegular,
    color: colors.DarkElectricBlue,
  },

  addCart: {
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.CyanCobaltBlue,
  },
});

export default Styles;
