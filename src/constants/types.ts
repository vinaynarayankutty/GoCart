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
