import _ from "lodash";
import {
  fetchAllNotificationsApi,
  markAllNotificationsAsReadApi,
  userApi,
} from "../../../utils/apis.utils";
import { strings } from "../../../utils/enum";
import { removeAccessToken } from "../../../utils/global/auth.global";
import { formatUserResponse } from "../../../utils/global/user.global";
import { setUserAsLogin } from "../auth/auth.slice";
import { setUserProfileDetails } from "../user/user.slice";
// import {
//   startDashboardLoader,
//   stopDashboardLoader,
// } from "../dashboard/dashboard.slice";

export const checkTokenValidity = async (__, thunkApi) => {
  try {
    // thunkApi.dispatch(startDashboardLoader());
    const { user } = thunkApi.extra.apiService;
    const response = await user.get(userApi);
    const responseData = response.data;
    if (_.get(responseData, strings.email_verify)) {
      const userDetails = formatUserResponse(responseData);
      thunkApi.dispatch(setUserProfileDetails(userDetails));
      thunkApi.dispatch(setUserAsLogin());
      return;
    }
    removeAccessToken();
    return Promise.reject();
  } catch (err) {
    return Promise.reject(err);
  } finally {
    // thunkApi.dispatch(stopDashboardLoader());
  }
};

export const fetchAllNotificationsHandler = async (__, thunkApi) => {
  const { user } = thunkApi.extra.apiService;
  const response = await user.get(fetchAllNotificationsApi);
  return response.data;
};

export const markAllNotificationsAsReadHandler = async (__, thunkApi) => {
  try {
    const { user } = thunkApi.extra.apiService;
    const response = await user.post(markAllNotificationsAsReadApi);
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  } finally {
    // thunkApi.dispatch(stopDashboardLoader());
  }
};
