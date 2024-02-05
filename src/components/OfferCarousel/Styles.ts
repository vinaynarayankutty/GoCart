import {colors} from '@theme/colors';
import {fonts} from '@theme/fonts';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  carouselStyle: {
    width: '100%',
    paddingLeft: 40,
    marginVertical: 25,
  },

  contentContainer: {
    flex: 1,
    marginHorizontal: '2.5%',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.Bone,
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentDetailsContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },

  getText: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.ManropeRegular,
    color: colors.White,
  },

  offerText: {
    textAlign: 'center',
    fontSize: 26,
    fontFamily: fonts.ManropeBold,
    color: colors.White,
  },

  orderCount: {
    fontSize: 13,
    fontFamily: fonts.ManropeRegular,
    color: colors.White,
  },

  count: {
    fontFamily: fonts.ManropeSemiBold,
  },
});

export default Styles;
