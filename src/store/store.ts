import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import productReducer from '@store/productSlice';

const logger = createLogger();
export const store = configureStore({
  reducer: {
    products: productReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // .concat(logger), // Uncommnet this line to add redux logging
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
