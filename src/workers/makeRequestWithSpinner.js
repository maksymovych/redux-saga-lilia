import { put, call } from 'redux-saga/effects';

export function* makeRequestWithSpinner(options) {
  const {
    fetcher,
    fetcherParam,
    startFetching,
    stopFetching,
    fill,
    setErrorAction,
  } = options;

  try {
    yield put(startFetching());

    const result = yield call(fetcher, fetcherParam);
    yield put(fill(result));
  } catch (error) {
    yield put(setErrorAction(error.message));
  } finally {
    yield put(stopFetching());
  }
}
