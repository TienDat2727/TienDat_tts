import authApi from 'api/authApi';
import { authAction } from './authSlice';
import { call, put, delay, fork, take } from 'redux-saga/effects';
import { TypeLoginForm, TypeRegisterForm, User } from 'models';
import Cookies from 'js-cookie';
import { PayloadAction } from '@reduxjs/toolkit';

function* handleLogin(payload: TypeLoginForm) {
  try {
    const response: User = yield call(authApi.login, payload);

    yield put(authAction.loginSuccess(response));
  } catch (error: any) {
    yield put(authAction.loginFailed(error.message));
  }
}

function* handleRegister(payload: TypeRegisterForm) {
  try {
    const response: User = yield call(authApi.register, payload);

    yield put(authAction.loginSuccess(response));
  } catch (error: any) {
    yield put(authAction.loginFailed(error.message));
  }
}

function* handleLogout() {
  yield delay(500);

  Cookies.remove('access_token');
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    if (!isLoggedIn) {
      const action: PayloadAction<TypeLoginForm> = yield take(
        authAction.login.type
      );
      yield fork(handleLogin, action.payload);
    }

    yield take(authAction.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
