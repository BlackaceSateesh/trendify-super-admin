import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllTypes } from '../../api/product-api';

async function fetchTypeHelper({
    productCategoryId,
    isFetchingMore = false,
    rejectWithValue,
    fulfillWithValue,
    page,
    size,
}) {
    try {
        let payload = { productCategoryId, page, size };
        const typeResp = await getAllTypes(payload);
        typeResp.isFetchingMore = isFetchingMore;
        return fulfillWithValue(typeResp);
    } catch (error) {
        return rejectWithValue(
            error?.response?.data?.message || 'Something Went Wrong',
        );
    }
}

export const fetchTypeThunk = createAsyncThunk(
    'TypeSlice/fetchType',
    async (
        { productCategoryId, isFetchingMore = false },
        { rejectWithValue, fulfillWithValue, getState },
    ) => {
        const { TypeSlice } = getState();
        const page = isFetchingMore ? TypeSlice.page + 1 : 1;
        return fetchTypeHelper({
            productCategoryId,
            isFetchingMore,
            rejectWithValue,
            fulfillWithValue,
            page,
            size: TypeSlice.size,
        });
    },
);