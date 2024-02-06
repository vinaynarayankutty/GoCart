import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {flex: 1},

  carouselStyle: {
    width: '100%',
  },

  itemContainer: {flex: 1},

  carouselImage: {height: '100%', width: '100%', resizeMode: 'stretch'},

  paginationViewContainer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
    paddingHorizontal: 20,
  },
});

export default Styles;
