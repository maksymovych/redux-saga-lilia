import { takeEvery, all, call } from 'redux-saga/effects';
import { fetchPosts as fetchPostsApi } from '../apis';
import {
  startPostsFetching,
  stopPostsFetching,
  fetchPostsSuccess,
  setfetchingError,
  postsAction,
} from '../actions';

import { makeRequestWithSpinner } from '../workers';

function* fetchPosts() {
  const options = {
    fetcher: fetchPostsApi,
    startFetching: startPostsFetching,
    stopFetching: stopPostsFetching,
    fill: fetchPostsSuccess,
    setErrorAction: setfetchingError,
  };

  yield makeRequestWithSpinner(options);
}

function* watchFetchPosts() {
  yield takeEvery(postsAction.FETCH_POSTS, fetchPosts);
}

export function* watchPosts() {
  yield all([call(watchFetchPosts)]);
}
