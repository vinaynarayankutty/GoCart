import {ProductItem} from '@constants/types';

export const priceSubtotal = (itemArr: Array<ProductItem>) => {
  return itemArr.reduce((total, item) => {
    const itemTotal = item.price * item.quantity;
    return total + itemTotal;
  }, 0);
};
