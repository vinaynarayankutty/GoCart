import {View, Text, Pressable, TextInput, FlatList, Image} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './Styles';
import {Add, Bag, HeartBlack, HeartRed, Search} from '@assets/icons/svgs';
import {colors} from '@theme/colors';
import DeliveryDetails from '@components/DeliveryDetails';
import OfferCarousel from '@components/OfferCarousel';
import {addToCart, addToFavourite, fetchProducts} from '@store/productSlice';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import {ProductItem} from '@constants/types';

const Home = () => {
  const dispatch = useAppDispatch();
  const productStatus = useAppSelector(state => state.products.status);
  const productList: any = useAppSelector(state => state.products.data);
  const bagCount = useAppSelector(state => state.products.bagCount);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.welcomeText}>Hey, Vinay</Text>
      <Pressable
        style={styles.cartBtn}
        onPress={() => console.warn('Go to cart')}>
        <Bag width={25} height={25} />
      </Pressable>

      <View style={styles.bagCountContainer}>
        <Text style={styles.countText}>{bagCount}</Text>
      </View>
    </View>
  );

  const renderTextInput = () => (
    <View style={styles.inputViewContainer}>
      <Search height={20} width={20} />
      <TextInput
        placeholder="Search Products or Store"
        onChangeText={text => console.warn(text)}
        style={styles.inputContainer}
        placeholderTextColor={colors.CoolGray}
      />
    </View>
  );

  const renderDeliveryAddress = () => (
    <DeliveryDetails title="DELIVERY TO" value="Green Way 3000, Sylhet" />
  );

  const renderDeliveryTime = () => (
    <DeliveryDetails title="WITHIN" value="1 hour" />
  );

  const renderListHeader = () => {
    return (
      <View>
        <OfferCarousel />
        <Text style={styles.listTitle}>Recommended</Text>
      </View>
    );
  };

  const renderListItem = ({item}: {item: ProductItem}) => (
    <View style={styles.listContainer}>
      <View style={styles.likeContainer}>
        <Pressable
          style={styles.like}
          onPress={() => dispatch(addToFavourite(item))}>
          {item.liked ? (
            <HeartRed height={20} width={20} />
          ) : (
            <HeartBlack height={20} width={20} />
          )}
        </Pressable>
      </View>

      <View style={styles.productImageContainer}>
        <Image source={{uri: item?.thumbnail}} style={styles.productImage} />
      </View>

      <View style={styles.productDetailsContainer}>
        <View style={styles.productImageContainer}>
          <Text style={styles.itemPrice}>${item.price}</Text>
          <Text style={styles.itemTitle} numberOfLines={1}>
            {item.title}
          </Text>
        </View>
        <Pressable
          style={styles.addCart}
          onPress={() => dispatch(addToCart(item))}>
          <Add height={12} width={12} />
        </Pressable>
      </View>
    </View>
  );

  return (
    <>
      <SafeAreaView edges={['top']} style={styles.topSafeContainer} />
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <View style={styles.topContainer}>
          {renderHeader()}
          {renderTextInput()}
          <View style={styles.dropDownContainer}>
            {renderDeliveryAddress()}
            {renderDeliveryTime()}
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <FlatList
            numColumns={2}
            ListHeaderComponent={renderListHeader}
            data={productList?.products}
            renderItem={renderListItem}
            keyExtractor={item => item?.id.toString()}
            removeClippedSubviews={true}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
