import { takeEvery, all, call } from 'redux-saga/effects';
import { fetchComments as fetchCommentsApi } from '../apis';
import {
  startCommentsFetching,
  stopCommentsFetching,
  fetchCommentsSuccess,
  setfetchingError,
  commentsAction,
} from '../actions';

import { makeRequestWithSpinner } from '../workers';

function* fetchComments(action) {
  const options = {
    fetcher: fetchCommentsApi,
    startFetching: startCommentsFetching,
    stopFetching: stopCommentsFetching,
    fill: fetchCommentsSuccess,
    setErrorAction: setfetchingError,
    fetcherParam: action.payload.id,
  };

  yield makeRequestWithSpinner(options);
}

function* watchFetchComments() {
  yield takeEvery(commentsAction.FETCH_COMMENTS, fetchComments);
}

export function* watchComments() {
  yield all([call(watchFetchComments)]);
}
