import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCategories as getAllProductCategory } from '../../api/product-api';

const fetchCategoryHelper = async (CategorySlice, page, rejectWithValue) => {
  try {
   
    const categoryResp = await getAllProductCategory({
      page,
      size: CategorySlice.size,
    });
    return categoryResp;
  } catch (error) {
    return rejectWithValue(
      error?.response?.data?.message || 'Something Went Wrong',
    );
  }
};

export const fetchCategoryThunk = createAsyncThunk(
  'category/fetchCategory',
  async (_, { getState, rejectWithValue }) => {
    const { CategorySlice } = getState();
    return await fetchCategoryHelper(CategorySlice, 1, rejectWithValue);
  },
);

export const fetchMoreCategoryThunk = createAsyncThunk(

  'category/fetchMoreCategory',
  async (_, { getState, rejectWithValue }) => {
    const { CategorySlice } = getState();
    return await fetchCategoryHelper(CategorySlice, CategorySlice.page + 1, rejectWithValue);
  },
);

export const handleCategory = (state, payload, isPaginated) => {
  state.content = isPaginated
    ? [...state.content, ...payload.content]
    : payload.content;
  state.page = payload.page;
  state.totalPages = payload.totalPages;
  state.loading = false;
  state.isError = false;
  state.errorMsg = '';
  state.loadMore = false;
};