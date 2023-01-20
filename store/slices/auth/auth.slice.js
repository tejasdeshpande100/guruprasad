import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ACCESS_TOKEN } from "utils/constant";
import {
  getAccessToken,
  removeAccessToken,
  storeAccessToken,
} from "../../../utils/global/auth.global";
import { signInWithEmail, forgotPassword, signUpWithEmail } from "./auth.thunk";

function local() {
  if (typeof window !== "undefined") {
    return localStorage.getItem(ACCESS_TOKEN);
  }
}
const INIT_STATE = {
  isLoggedIn: local() != undefined ? true : false,
  isLoading: false,
  isRegistered: false,
};

export const loginByEmailAsyncThunk = createAsyncThunk(
  "emailLogin",
  signInWithEmail
);
export const forgotPasswordAsycnThunk = createAsyncThunk(
  "forgotPassword",
  forgotPassword
);
export const signupByEmailAsyncThunk = createAsyncThunk(
  "emailSignup",
  signUpWithEmail
);

const initSlice = createSlice({
  name: "auth",
  initialState: INIT_STATE,
  reducers: {
    logout: (state) => {
      removeAccessToken();
      state.isLoggedIn = false;
      return state;
    },
    setUserAsLogin: (state) => {
      state.isLoggedIn = true;
      return state;
    },
    startLoader: (state) => {
      state.isLoading = true;
      return state;
    },
    stopLoader: (state) => {
      state.isLoading = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByEmailAsyncThunk.pending, (state) => {
        state.isLoading = true;
        return state;
      })
      .addCase(loginByEmailAsyncThunk.fulfilled, (state, action) => {
        const token = action.payload?.access_token;
        storeAccessToken(token);
        state.isLoading = false;
        state.isLoggedIn = true;
        return state;
      })
      .addCase(loginByEmailAsyncThunk.rejected, (state) => {
        state.isLoading = false;
        return state;
      })
      .addCase(forgotPasswordAsycnThunk.fulfilled, (state) => {
        state.isLoading = false;
        return state;
      })
      .addCase(forgotPasswordAsycnThunk.pending, (state) => {
        state.isLoading = true;
        return state;
      })
      .addCase(forgotPasswordAsycnThunk.rejected, (state) => {
        state.isLoading = false;
        return state;
      })
      .addCase(signupByEmailAsyncThunk.pending, (state) => {
        state.isRegistered = false;
        return state;
      })
      .addCase(signupByEmailAsyncThunk.rejected, (state) => {
        state.isRegistered = true;
        return state;
      })
      .addCase(signupByEmailAsyncThunk.fulfilled, (state) => {
        state.isRegistered = true;
        return state;
      });
  },
});

export const { logout, setUserAsLogin, startLoader, stopLoader } =
  initSlice.actions;

export default initSlice.reducer;
