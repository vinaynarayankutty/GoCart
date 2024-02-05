import {ProductItem, ProductState} from '@constants/types';
import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {listProducts} from '@service/productService';

export const fetchProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    try {
      const response = await listProducts();
      return response;
    } catch (e: any) {
      if (!e.response) {
        throw e;
      }
      return e.response;
    }
  },
);

const initialState: ProductState = {
  data: [],
  status: 'idle',
  error: null,
  bagCount: 0,
  cartData: [],
  favourites: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToFavourite: (state: any, action: PayloadAction<any>) => {
      const {data} = state;
      const index = data?.products.findIndex(
        (item: ProductItem) => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.data.products[index].liked = true;
        state.favourites.push({...action.payload, liked: true});
      }
    },
    removeFromFavourite: (state, action: PayloadAction<any>) => {
      state.favourites = state.favourites.filter(
        item => item.id !== action.payload,
      );
    },
    addToCart: (state: any, action: PayloadAction<any>) => {
      const existingItemIndex = state.cartData.findIndex(
        (item: ProductItem) => item?.id === action.payload?.id,
      );

      if (existingItemIndex === -1) {
        // New item, add it to the cart
        state.cartData.push({...action.payload, quantity: 1});
        state.bagCount += 1;
      } else {
        // Existing item, update quantity
        state.cartData[existingItemIndex].quantity += 1;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        action.payload.products.forEach(
          (item: ProductItem) => (item.liked = false),
        );
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const {addToFavourite, addToCart, removeFromFavourite} =
  productSlice.actions;

export default productSlice.reducer;
