import {colors} from '@theme/colors';
import {fonts} from '@theme/fonts';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
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

  bodyContainer: {
    flex: 1,
    backgroundColor: colors.White,
  },
});

export default Styles;
