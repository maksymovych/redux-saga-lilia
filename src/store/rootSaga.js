import { all } from 'redux-saga/effects';
import { watchPosts, watchComments } from '../watchers';

export function* rootSaga() {
  yield all([watchPosts(), watchComments()]);
}
