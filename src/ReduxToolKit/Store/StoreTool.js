import { configureStore } from '@reduxjs/toolkit';
import { myCounter } from '../CounterTool';
export const store = configureStore({
  reducer: {
    counter: myCounter,
  },
});

