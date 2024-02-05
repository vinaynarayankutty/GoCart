import {View, Image, useWindowDimensions} from 'react-native';
import React, {useRef, useState} from 'react';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';

import PaginationItem from '@components/PaginationItem';
import styles from './Styles';

const ProductCarousel = ({carouselData}: {carouselData: Array<string>}) => {
  const windowWidth = useWindowDimensions().width;
  const ref = useRef<ICarouselInstance>(null);
  const scrollOffsetValue = useSharedValue<number>(0);
  const progressValue = useSharedValue<number>(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Carousel
        width={windowWidth}
        loop
        ref={ref}
        defaultScrollOffsetValue={scrollOffsetValue}
        style={styles.carouselStyle}
        autoPlay={false}
        data={carouselData}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        pagingEnabled={true}
        onSnapToItem={index => setCurrentIndex(index)}
        renderItem={({item, index}) => (
          <View style={styles.itemContainer} key={index}>
            <Image source={{uri: item}} style={styles.carouselImage} />
          </View>
        )}
      />
      {!!progressValue && (
        <View style={styles.paginationViewContainer}>
          {carouselData.map((_, index) => {
            return (
              <PaginationItem
                currentIndex={currentIndex}
                animValue={progressValue}
                index={index}
                key={index}
                length={carouselData.length}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

export default ProductCarousel;
