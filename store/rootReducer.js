import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./slices/user/user.slice";
import initReducer from "./slices/init/init.slice";
import authReducer from "./slices/auth/auth.slice";

const rootReducer = combineReducers({
  user: userReducer,
  init: initReducer,
  auth: authReducer,
});

export default rootReducer;
