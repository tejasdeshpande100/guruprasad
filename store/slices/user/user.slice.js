import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { updateUserProfileHandler, uploadProfileHandler } from "./user.thunk";

const INIT_STATE = {
  userData: {},
  error: null,
  clientUsers: {},
  userRoles: {},
  isApplicableForProjectCreation: false,
  isLoading: false,
  selectedTab: 0,
};

export const uploadProfileThunk = createAsyncThunk(
  "uploadProfile",
  uploadProfileHandler
);

export const uploadProfileInfoThunk = createAsyncThunk(
  "uploadProfileInfo",
  updateUserProfileHandler
);

const userSlice = createSlice({
  name: "user",
  initialState: INIT_STATE,
  reducers: {
    deleteUser: (state, action) => {
      var id = action.payload;
      var users = state.clientUsers.filter((project) => project.id !== id);
      state.clientUsers = users;
      return state;
    },
    setUserProfileDetails: (state, action) => {
      const userData = action.payload;
      if (userData.email_verify && userData.isMobileVerified) {
        state.isApplicableForProjectCreation = true;
      }
      state.userData.profile = userData;
      return state;
    },
    tabChange: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadProfileThunk.pending, (state) => {
        state.isLoading = true;
        return state;
      })
      .addCase(uploadProfileThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData.profile.imageUrl = action.payload?.url;
        return state;
      })
      .addCase(uploadProfileThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(uploadProfileInfoThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadProfileInfoThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData.profile = action.payload;
      })
      .addCase(uploadProfileInfoThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { deleteUser, setUserProfileDetails, tabChange } =
  userSlice.actions;

export default userSlice.reducer;
