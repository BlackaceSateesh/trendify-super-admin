import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts as getProductByProductTypeIdApi } from '../../api/product-api';

export async function fetchProductHelper({
    size,
    page,
    state,
    rejectWithValue,
    fulfillWithValue,
    productTypeId,
    isFetchingMore = false,
}) {
    try {
        const payload = {
            size: size,
            page,
            userId: state.UserInfo?.id || null,
            productTypeId,
        };

        const productResp = await getProductByProductTypeIdApi(payload);
        productResp.isFetchingMore = isFetchingMore;
        return fulfillWithValue(productResp);
    } catch (error) {
        console.log(error);
        return rejectWithValue(
            error?.response?.data?.message || 'Something Went Wrong',
        );
    }
}

export const fetchProductThunk = createAsyncThunk(
    'ProductSlice/fetchProduct',
    async (
        { productTypeId, isFetchingMore = false },
        { getState, rejectWithValue, fulfillWithValue },
    ) => {
        const state = getState();
        const { ProductSlice } = state;
        const page = isFetchingMore ? ProductSlice.page + 1 : 1;
        return fetchProductHelper({
            size: ProductSlice.size,
            page,
            state,
            rejectWithValue,
            fulfillWithValue,
            productTypeId,
            isFetchingMore,
        });
    },
);