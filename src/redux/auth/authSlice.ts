import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TypeLoginForm, TypeRegisterForm, User } from 'models';

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  isRegister: boolean;
  register: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  isRegister: false,
  register: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<TypeLoginForm>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
    },

    register(state, action: PayloadAction<TypeRegisterForm>) {
      state.register = true;
    },

    registerSuccess(state, action: PayloadAction<User>) {
      state.isRegister = true;
      state.register = false;
      state.currentUser = action.payload;
    },

    registerFailed(state, action: PayloadAction<string>) {
      state.register = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

export const authAction = authSlice.actions;

export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.logging;

const authReducer = authSlice.reducer;
export default authReducer;
