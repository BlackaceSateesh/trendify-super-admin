import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCategoryThunk,
  fetchMoreCategoryThunk,
  handleCategory,
} from '../thunk/category';

const initialState = {
  page: 1,
  content: [],
  totalPages: 1,
  size: 10,
  loading: false,
  loadMore: false,
  isError: false,
  errorMsg: '',
};

export const CategorySlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {
    dispatchDisableErrorCategory: state => {
      state.isError = false;
      state.errorMsg = '';
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchCategoryThunk.pending, state => {
      state.loading = true;
      state.errorMsg = '';
      state.isError = false;
    });
    builder.addCase(fetchCategoryThunk.rejected, (state, { payload }) => {
      state.loading = false;
      state.isError = true;
      state.errorMsg = payload;
    });
    builder.addCase(fetchCategoryThunk.fulfilled, (state, { payload }) => {
      handleCategory(state, payload, false);
    });
    builder.addCase(fetchMoreCategoryThunk.pending, state => {
      state.loadMore = true;
      state.errorMsg = '';
      state.isError = false;
    });
    builder.addCase(fetchMoreCategoryThunk.rejected, (state, { payload }) => {
      state.loadMore = false;
      state.isError = true;
      state.errorMsg = payload;
    });
    builder.addCase(fetchMoreCategoryThunk.fulfilled, (state, { payload }) => {
      handleCategory(state, payload, true);
    });
  },
});

export const { dispatchDisableErrorCategory } = CategorySlice.actions;

export default CategorySlice.reducer;