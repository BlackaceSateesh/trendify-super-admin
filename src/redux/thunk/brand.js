import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllBrands as getBrandBySubCategoryApi } from '../../api/product-api';

/**
 * Helper function to fetch brands based on the product type ID.
 * @param {Object} params - The parameters for fetching brands.
 * @param {number} params.productTypeId - The ID of the product type.
 * @param {boolean} [params.isFetchingMore=false] - Flag to indicate if more items are being fetched.
 * @param {Function} params.rejectWithValue - Function to handle rejection.
 * @param {Function} params.fulfillWithValue - Function to handle fulfillment.
 * @param {number} params.page - The current page number.
 * @param {number} params.size - The size of items per page.
 * @returns {Promise<Object>} The response object from the API.
 */
async function fetchBrandHelper({
    productTypeId,
    isFetchingMore = false,
    rejectWithValue,
    fulfillWithValue,
    page,
    size,
}) {
    try {
        let payload = { productTypeId, page, size };
        const brandResp = await getBrandBySubCategoryApi(payload);
        brandResp.isFetchingMore = isFetchingMore;
        return fulfillWithValue(brandResp);
    } catch (error) {
        return rejectWithValue(
            error?.response?.data?.message || 'Something Went Wrong',
        );
    }
}

/**
 * Creates an async thunk for fetching brands.
 * @param {Object} params - The parameters for the thunk.
 * @param {number} params.productTypeId - The ID of the product type.
 * @param {boolean} [params.isFetchingMore=false] - Flag to indicate if more items are being fetched.
 * @returns {Function} The async thunk function.
 */
export const fetchBrandThunk = createAsyncThunk(
    'BrandSlice/fetchBrand',
    async (
        { productTypeId, isFetchingMore = false },
        { rejectWithValue, fulfillWithValue, getState },
    ) => {
        const { BrandSlice } = getState();
        const page = isFetchingMore ? BrandSlice.page + 1 : 1;
        return fetchBrandHelper({
            productTypeId,
            isFetchingMore,
            rejectWithValue,
            fulfillWithValue,
            page,
            size: BrandSlice.size,
        });
    },
);