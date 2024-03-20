import { all } from 'redux-saga/effects';

function* authSaga() {
  console.log('Hello fresher_k2');
  console.log('Cac ban co toi thay ko');
}

export default function* rootSaga() {
  yield all([authSaga()]);
}
