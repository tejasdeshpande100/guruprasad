import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  checkTokenValidity,
  fetchAllNotificationsHandler,
  markAllNotificationsAsReadHandler,
} from "./init.thunk";

const INIT_STATE = {
  isInitAuthCheckedDone: false,
  notifications: [],
};

export const checkForTokenValidityAsyncThunk = createAsyncThunk(
  "checkTokenValidity",
  checkTokenValidity
);

export const fetchAllNotificationsThunk = createAsyncThunk(
  "fetchAllNotifications",
  fetchAllNotificationsHandler
);
export const markAllNotificationsAsReadThunk = createAsyncThunk(
  "markAllNotificationsAsRead",
  markAllNotificationsAsReadHandler
);

const initSlice = createSlice({
  name: "init",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkForTokenValidityAsyncThunk.fulfilled, (state) => {
        state.isInitAuthCheckedDone = true;
        return state;
      })
      .addCase(checkForTokenValidityAsyncThunk.rejected, (state) => {
        state.isInitAuthCheckedDone = true;
        return state;
      })
      .addCase(fetchAllNotificationsThunk.fulfilled, (state, action) => {
        state.notifications = action.payload;
        return state;
      })
      .addCase(fetchAllNotificationsThunk.rejected, (state) => {
        state.notifications = [];
        return state;
      });
    // .addCase(markAllNotificationsAsReadThunk.fulfilled, (state, action) => {
    //   return state;
    // });
  },
});

export default initSlice.reducer;
