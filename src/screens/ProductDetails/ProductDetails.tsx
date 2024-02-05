import {View, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import {useNavigation} from '@react-navigation/native';

import ProductCarousel from '@components/ProductCarousel';
import ActionButton from '@components/ActionButton';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import {
  addToCart,
  addToFavourite,
  removeFromFavourite,
} from '@store/productSlice';
import {BackArrow, Bag, HeartBlack, HeartRed} from '@assets/icons/svgs';
import {ProductDetailsProps} from '@constants/types';
import {colors} from '@theme/colors';
import styles from './Styles';

const ProductDetails: React.FC<ProductDetailsProps> = ({route}) => {
  const dispatch = useAppDispatch();
  const {productData} = route.params;
  const bagCount = useAppSelector(state => state.products.bagCount);
  const navigation = useNavigation<any>();

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (route.params) {
      setLiked(productData?.liked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params]);

  const renderHeader = () => (
    <View style={styles.header}>
      <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
        <BackArrow width={15} height={15} />
      </Pressable>

      <Pressable
        style={styles.cartBtn}
        onPress={() => console.warn('Go to cart')}>
        <Bag width={25} height={25} color={colors.DarkGunmetal} />
      </Pressable>

      <View style={styles.bagCountContainer}>
        <Text style={styles.countText}>{bagCount}</Text>
      </View>
    </View>
  );

  const renderTitle = () => (
    <>
      <Text
        style={[
          styles.brand,
          productData.brand.length >= 10 && styles.titleFont,
        ]}
        numberOfLines={1}>
        {productData.brand}
      </Text>
      <Text
        style={[
          styles.title,
          productData.title.length >= 10 && styles.titleFont,
        ]}
        numberOfLines={1}>
        {productData.title}
      </Text>
    </>
  );

  const renderRatings = () => (
    <View style={styles.ratingContainer}>
      <StarRatingDisplay
        rating={productData.rating}
        starSize={20}
        color={colors.BrightYellow}
        emptyColor={colors.DarkGunmetal}
      />
      <Text style={styles.reviewText}>110 Reviews</Text>
    </View>
  );

  const renderProductImages = () => (
    <View style={styles.productImagesContainer}>
      <ProductCarousel carouselData={productData.images} />
      <View style={styles.favouriteContainer}>
        <Pressable
          style={styles.favBtn}
          onPress={() => {
            setLiked(prevState => !prevState);
            productData?.liked
              ? dispatch(removeFromFavourite(productData))
              : dispatch(addToFavourite(productData));
          }}>
          {liked ? (
            <HeartRed height={20} width={20} />
          ) : (
            <HeartBlack height={20} width={20} />
          )}
        </Pressable>
      </View>
    </View>
  );

  const renderPrice = () => (
    <View style={styles.priceContainer}>
      <Text style={styles.price}>${productData?.price}</Text>
      <View style={styles.discountContainer}>
        <Text style={styles.discount}>
          {productData?.discountPercentage}% OFF
        </Text>
      </View>
    </View>
  );

  const onPressAddCart = () => {
    dispatch(addToCart(productData));
  };

  const onPressBuyNow = () => {
    onPressAddCart();
    navigation.navigate('Cart');
  };

  const renderActionBtns = () => (
    <View style={styles.actionBtnContainer}>
      <ActionButton
        type="Secondary"
        btnLabel="Add To Cart"
        onPressBtn={onPressAddCart}
      />
      <ActionButton btnLabel="Buy Now" onPressBtn={onPressBuyNow} />
    </View>
  );

  const renderDescription = () => (
    <View style={styles.descriptionContainer}>
      <Text style={styles.details}>Details</Text>
      <Text style={styles.description}>{productData.description}</Text>
    </View>
  );

  return (
    <>
      <SafeAreaView edges={['top']} style={styles.topSafeContainer} />
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <View style={styles.topContainer}>
          {renderHeader()}
          {renderTitle()}
          {renderRatings()}
        </View>
        <View style={styles.midContainer}>{renderProductImages()}</View>
        <View style={styles.bottomContainer}>
          {renderPrice()}
          {renderActionBtns()}
          {renderDescription()}
        </View>
      </SafeAreaView>
    </>
  );
};

export default ProductDetails;
