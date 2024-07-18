//
export function commonCasePendingProduct(state, isFetchingMore) {
    state.loading = !isFetchingMore;
    state.loadMore = isFetchingMore;
    state.error = false;
    state.errorMsg = '';
  }
  
  export function commonCaseErrorProduct(state, action) {
    state.loading = false;
    state.error = true;
    state.errorMsg = action.payload;
  }
  
  export function commonCaseFulfilledProduct(state, payload) {
    state.loading = false;
    state.error = false;
    state.errorMsg = '';
    state.content = payload.isFetchingMore
      ? [...state.content, ...payload.content]
      : payload.content;
    state.page = payload.page;
    state.totalPages = payload.totalPages;
    state.loadMore = false;
  }
  