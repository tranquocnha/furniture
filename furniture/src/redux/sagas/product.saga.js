import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getProductListSaga(action) {
  try {
    const { 
      // page, limit, more, 
      categoryId, itemCategoryId, searchKey, sort, order } = action.payload;
    const result = yield axios({
      method: 'GET',
      url: 'http://localhost:3002/products?_embed=colors',
      params: {
        // ...page && { _page: page },
        // ...limit && { _limit: limit },
        ...categoryId && { categoryId },
        ...itemCategoryId && { itemCategoryId },
        ...searchKey && { q: searchKey },
        ...sort && { _sort: sort },
        ...order && { _order: order },
        _embed: "sizes",
      }
    });
    yield put({
      type: "GET_PRODUCT_LIST_SUCCESS",
      payload: {
        data: result.data,
        // page,
        // more,
      },
    });
  } catch (e) {
    yield put({
      type: "GET_PRODUCT_LIST_FAIL",
      payload: {
        error: e.error
      },
    });
  }
}

function* getProductDetailSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios({
      method: 'GET',
      url: `http://localhost:3002/products/${id}?_embed=colors`,
      params: {
        _embed: 'sizes',
        _expand: 'itemCategory',
      }
    });
    yield put({
      type: "GET_PRODUCT_DETAIL_SUCCESS",
      payload: {
        data: result.data
      }
    });
  } catch (e) {
    yield put({
      type: "GET_PRODUCT_DETAIL_FAIL",
      payload: {
        error: e.error
      },
    });
  }
}

export default function* productSaga() {
  yield takeEvery('GET_PRODUCT_LIST_REQUEST', getProductListSaga);
  yield takeEvery('GET_PRODUCT_DETAIL_REQUEST', getProductDetailSaga);
}
