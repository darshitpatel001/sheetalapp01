import { put, takeEvery, takeLatest, delay, all, call } from 'redux-saga/effects';
import axios from 'axios';

export function* watchFetchPost() {
    yield takeEvery('FATCH_REQUEST_POST', workFetchPosts);
  }

  export function* workFetchPosts() {
    try {
      const uri = "https://api.punkapi.com/v2/beers";
      const response = yield call(axios.get, uri);

      yield put({
        type: "FETCH_POSTS_SUCCESS",
        payload: response.data
      });
    } catch (error) {
      yield put({
        type: "FETCH_POSTS_FAILD",
        payload: error
      })
    }
  }