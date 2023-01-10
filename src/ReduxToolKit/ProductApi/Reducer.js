import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (argument, { dispatch, getState }) => {
  
    return fetch(`https://fakestoreapi.com/products`).then(y => y.json());
  }
);

const Reducer= createSlice({
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

export default Reducer.reducer;
