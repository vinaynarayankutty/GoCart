import {
  View,
  Text,
  Pressable,
  FlatList,
  Image,
  Platform,
  UIManager,
  LayoutAnimation,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import StepperButton from '@components/StepperButton';
import ActionButton from '@components/ActionButton';
import PriceBreakup from '@components/PriceBreakup';
import {addToCart, deleteFromCart, subtractQty} from '@store/productSlice';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import {priceSubtotal} from '@utils/sum';
import {BackArrow, Delete} from '@assets/icons/svgs';
import {colors} from '@theme/colors';
import {ProductItem} from '@constants/types';
import styles from './Styles';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Cart = () => {
  const navigation = useNavigation<any>();
  const dipatch = useAppDispatch();
  const bagCount = useAppSelector(state => state.products.bagCount);
  const cartData = useAppSelector(state => state.products.cartData);

  const [editEnabled, setEditEnabled] = useState(false);
  const [deliveryPrice, setDeliveryPrice] = useState(0);

  useEffect(() => {
    if (cartData.length > 0) {
      setDeliveryPrice(2);
    } else {
      setDeliveryPrice(0);
    }
  }, [cartData]);

  const renderHeader = () => (
    <View style={styles.header}>
      <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
        <BackArrow width={15} height={15} />
      </Pressable>
      <Text style={styles.shoppingCart}>Shopping Cart ({bagCount})</Text>
    </View>
  );

  const onPressPlus = (item: ProductItem) => {
    dipatch(addToCart(item));
  };

  const setAnimation = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const onPressMinus = (item: ProductItem) => {
    if (item.quantity === 1) {
      setAnimation();
      dipatch(deleteFromCart(item));
    } else {
      dipatch(subtractQty(item));
    }
  };

  const renderCartItems = ({item}: {item: ProductItem}) => (
    <View style={styles.cartViewContainer}>
      <View style={styles.groupContainer}>
        <Image source={{uri: item.thumbnail}} style={styles.cartItemImage} />
        <View style={styles.cartItemDetails}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>

      <View style={styles.qtyContainer}>
        <StepperButton type="minus" onPressBtn={() => onPressMinus(item)} />
        <Text style={styles.quantity}>{item.quantity}</Text>
        <StepperButton type="plus" onPressBtn={() => onPressPlus(item)} />
      </View>

      {editEnabled && (
        <Pressable
          onPress={() => {
            setAnimation();
            dipatch(deleteFromCart(item));
          }}
          style={({pressed}) => [
            styles.deleteBtn,
            {opacity: pressed ? 0.5 : 1},
          ]}>
          <Delete height={18} width={18} />
        </Pressable>
      )}
    </View>
  );

  const renderEmptyCart = () => (
    <View style={styles.emptyCartContainer}>
      <Text style={styles.emptyCart}>Cart Empty!!</Text>
    </View>
  );

  const renderCartList = () => (
    <View>
      <FlatList
        data={cartData}
        renderItem={renderCartItems}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );

  const renderEditBtn = () => (
    <View style={styles.editBtnContainer}>
      {cartData.length > 0 && (
        <Pressable
          style={styles.editBtn}
          onPress={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            setEditEnabled(prevState => !prevState);
          }}>
          <Text style={styles.editText}>Edit</Text>
        </Pressable>
      )}
    </View>
  );

  const renderCheckoutDetails = () => (
    <View style={styles.checkoutContainer}>
      <View>
        <PriceBreakup title="Subtotal" value={priceSubtotal(cartData)} />
        <PriceBreakup title="Delivery" value={deliveryPrice} />
        <PriceBreakup
          title="Total"
          value={priceSubtotal(cartData) - deliveryPrice}
          textStyle={styles.total}
        />
      </View>

      <ActionButton
        disabled={cartData.length === 0}
        btnContainerStyle={[styles.checkoutBtn]}
        btnLabel="Proceed To Checkout"
        onPressBtn={() => navigation.navigate('Success')}
      />
    </View>
  );

  return (
    <>
      <SafeAreaView edges={['top']} style={styles.topSafeContainer} />
      <SafeAreaView
        style={styles.container}
        edges={['left', 'right', 'bottom']}>
        <StatusBar backgroundColor={colors.White} />
        <View style={styles.topContainer}>{renderHeader()}</View>
        <View style={styles.midContainer}>
          {cartData.length > 0 ? renderCartList() : renderEmptyCart()}
        </View>
        <View style={styles.bottomContainer}>
          {renderEditBtn()}
          {renderCheckoutDetails()}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Cart;
