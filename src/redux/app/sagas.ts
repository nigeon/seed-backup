import { all, takeLatest, select, put } from 'redux-saga/effects';
import actions from './actions';
import { AppState } from './reducer';
import { getAppState } from './selectors';

import * as sss from 'shamirs-secret-sharing';

export function* setSecret() {
  yield takeLatest(actions.SET_SECRET, function*(){
    yield put({ type: actions.GENERATE_SHARES });
  });
}

export function* setSharesNumber() {
  yield takeLatest(actions.SET_SHARES_NUMBER, function*(){
    yield put({ type: actions.GENERATE_SHARES });
  });
}

export function* setThresholdNumber() {
  yield takeLatest(actions.SET_THRESHOLD_NUMBER, function*(){
    yield put({ type: actions.GENERATE_SHARES });
  });
}

export function* generateShares() {
  yield takeLatest(actions.GENERATE_SHARES, function*(){
    const appState: AppState = yield select(getAppState);
    const secret = Buffer.from(appState.secret);

    if(!appState.secret || !appState.sharesNumber || !appState.thresholdNumber){
      return false;
    }

    const shares = sss.split(secret, { shares: appState.sharesNumber, threshold: appState.thresholdNumber })
    
    yield put({ type: actions.SET_SHARES, payload: { shares } });

    // const recovered = sss.combine(shares.slice(3, 7));
    // console.log('RECOVERED', recovered.toString());
  });
}

export default function* rootSaga() {
  yield all([
    setSecret(),
    setSharesNumber(),
    setThresholdNumber(),
    generateShares(),
  ]);
}