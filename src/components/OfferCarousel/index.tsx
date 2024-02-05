import {View, Text, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Carousel from 'react-native-reanimated-carousel';

import styles from './Styles';
import {ImageHolder} from '@assets/icons/svgs';
import {colors} from '@theme/colors';

const CAROUSEL_DATA = [
  {id: 1, offerPercentage: 50, noOfOrders: '03'},
  {id: 2, offerPercentage: 25, noOfOrders: '05'},
  {id: 3, offerPercentage: 10, noOfOrders: '07'},
];

const OfferCarousel = () => {
  const width = Dimensions.get('window').width;

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Carousel
      loop={true}
      width={width * 0.85}
      height={width / 2.5}
      style={styles.carouselStyle}
      data={CAROUSEL_DATA}
      pagingEnabled={true}
      onSnapToItem={index => setCurrentIndex(index)}
      renderItem={({item, index}) => (
        <View
          style={[
            styles.contentContainer,
            currentIndex === index && {backgroundColor: colors.BrightYellow},
          ]}>
          <View style={styles.imageContainer}>
            <ImageHolder height={80} width={80} />
          </View>
          <View style={styles.contentDetailsContainer}>
            <Text style={styles.getText}>Get</Text>
            <Text style={styles.offerText}>{item.offerPercentage}% OFF</Text>
            <Text style={styles.orderCount}>
              On first <Text style={styles.count}>{item.noOfOrders}</Text>{' '}
              orders
            </Text>
          </View>
        </View>
      )}
    />
  );
};

export default OfferCarousel;
