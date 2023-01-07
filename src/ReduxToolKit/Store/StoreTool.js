// import { configureStore } from '@reduxjs/toolkit';
// import  myCounter  from '../ReducerTool';

// export const StoreTool = configureStore({
//   reducer: {
//     counter: myCounter,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import ReducerTool from '../ReducerTool';

export const StoreTool = configureStore({
  reducer: {
    posts : ReducerTool
  },
});

