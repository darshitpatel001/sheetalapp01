// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   value: 0,
// };

// export const myCounter = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       if (state.value > 0) {
//         state.value -= 1;
//       }
//     },
//     incrementByAmount: (state, action) => {
//       state.value += parseInt(action.payload);
//     },
//   },
// });

// export const { increment, decrement, incrementdecrement } = myCounter.actions;

// export default myCounter.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (argument, { dispatch, getState }) => {
  
    return fetch(`https://date.nager.at/api/v2/publicholidays/2020/US`).then(y => y.json());
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    status: null
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getPosts.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = 'success';
    },
    [getPosts.rejected]: (state, action) => {
      state.status = 'failed';
    }
  }
});

export default postsSlice.reducer;
