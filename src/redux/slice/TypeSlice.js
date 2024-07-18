import { createCommonSliceProduct } from './product/ProductCommonTemplate';
import { fetchBrandThunk } from '../thunk/thunk-brand';
import {
    commonCasePendingProduct,
    commonCaseErrorProduct,
    commonCaseFulfilledProduct,
} from '../thunk/products/thunk-common';

const BrandSlice = createCommonSliceProduct('BrandSlice', {}, builder => {
    builder.addCase(fetchBrandThunk.pending, (state, { meta }) =>
        commonCasePendingProduct(state, meta?.arg?.isFetchingMore),
    );
    builder.addCase(fetchBrandThunk.rejected, (state, action) =>
        commonCaseErrorProduct(state, action),
    );
    builder.addCase(fetchBrandThunk.fulfilled, (state, { payload }) =>
        commonCaseFulfilledProduct(state, payload),
    );
});

export default BrandSlice.reducer;

const {
    dispatchDisableErrorMsgCommonSliceProduct,
    dispatchInitialCommonSliceProduct,
} = BrandSlice.actions;

export const dispatchDisableErrorBrand =
    dispatchDisableErrorMsgCommonSliceProduct;
export const dispatchInitialStateBrand = dispatchInitialCommonSliceProduct;
