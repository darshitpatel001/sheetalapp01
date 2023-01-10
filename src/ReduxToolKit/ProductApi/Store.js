import { configureStore } from '@reduxjs/toolkit';
import Reducer from './Reducer';

export const StoreProduct = configureStore({
  reducer: {
    posts : Reducer
  },
});
 