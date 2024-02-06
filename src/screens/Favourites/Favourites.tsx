import {View, Text, StatusBar, Image, FlatList, Pressable} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {useAppSelector} from '@store/hooks';
import {colors} from '@theme/colors';
import styles from './Styles';
import {ProductItem} from '@constants/types';

const Favourites = () => {
  const navigation = useNavigation<any>();

  const favouritesData = useAppSelector(state => state.products.favourites);

  const renderFavouritesData = ({
    item,
    index,
  }: {
    item: ProductItem;
    index: number;
  }) => (
    <Pressable
      style={styles.viewContainer}
      onPress={() =>
        navigation.navigate('ProductDetails', {productData: item})
      }>
      <View style={styles.groupContainer}>
        <Text style={styles.serialNo}>{index + 1}.</Text>
        <Image source={{uri: item.thumbnail}} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            ${item.description}
          </Text>
        </View>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </Pressable>
  );

  const renderEmptyList = () => (
    <View style={styles.emptyFavouritesContainer}>
      <Text style={styles.emptyFavourites}>No favourites added.</Text>
    </View>
  );

  const renderFavouriteList = () => (
    <FlatList
      data={favouritesData}
      keyExtractor={item => item.id.toString()}
      renderItem={renderFavouritesData}
    />
  );

  return (
    <>
      <SafeAreaView edges={['top']} style={styles.topSafeContainer} />
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <StatusBar backgroundColor={colors.White} />
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Text style={styles.favourite}>Favourites</Text>
          </View>

          {favouritesData.length > 0
            ? renderFavouriteList()
            : renderEmptyList()}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Favourites;
