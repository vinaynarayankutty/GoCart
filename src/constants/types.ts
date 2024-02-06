import {RouteProp} from '@react-navigation/native';
import {TextStyle, ViewStyle} from 'react-native';

export type ProductItem = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: Array<string>;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
  quantity: number;
  liked: boolean;
};

export type DeliveryDetailsProps = {
  title: string;
  value: string;
};

export type ProductsArr = {
  products: Array<any>;
  limit: number;
  skip: number;
  total: number;
};

export type ProductState = {
  data: ProductsArr | [];
  status: string;
  error: any;
  bagCount: number;
  cartData: Array<ProductItem> | [];
  favourites: Array<ProductItem> | [];
};

type HomeStackParamList = {
  ProductDetails: {productData: ProductItem};
  // Add other screens if needed
};

type ProductDetailsScreenRouteProp = RouteProp<
  HomeStackParamList,
  'ProductDetails'
>;

export type ProductDetailsProps = {
  route: ProductDetailsScreenRouteProp;
};

export type ActionBtnProps = {
  type?: 'Primary' | 'Secondary';
  btnLabel: string;
  btnContainerStyle?: ViewStyle | Array<ViewStyle>;
  disabled?: boolean;
  onPressBtn: () => void;
};

export type StepperBtnProps = {
  type: 'minus' | 'plus';
  onPressBtn: () => void;
};

export type PriceBreakupProps = {
  title: string;
  value: number;
  textStyle?: TextStyle;
};
