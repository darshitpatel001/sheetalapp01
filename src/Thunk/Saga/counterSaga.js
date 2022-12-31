import { put, takeEvery, takeLatest, delay, all } from 'redux-saga/effects';

export function* incWorker() {
    yield delay(1000);
    yield put({ type: 'PLUS' });
  }

  export function* incrementWatcher() {
    yield takeEvery('INCREMENT', incWorker);
  }


  export function* multiplication() {
    yield delay(1000);
    yield put({ type: 'MULTI' });
  }
  
 
  export function* multiplicationWatcher() {
    yield takeEvery('MULTIPLECATION', multiplication);
  }

  export function* devision() {
    yield delay(1000);
    yield put({ type: 'DEV' });
  }

  export function* devisionWatcher() {
    yield takeEvery('DEVISION', devision);
  }
