import { uploadUserProfileApi, userApi } from "../../../utils/apis.utils";
// import {
//   startDashboardLoader,
//   stopDashboardLoader,
// } from "../dashboard/dashboard.slice";

// import { showFailureToast } from "../toast/toast.slice";

export const updateUserProfileHandler = async (data, thunkApi) => {
  try {
    // thunkApi.dispatch(startDashboardLoader());
    const { user } = thunkApi.extra.apiService;
    const response = await user.put(userApi, {
      data: {
        ...data,
        ...data.mobile,
        ...data.address,
        address: undefined,
        mobile: undefined,
      },
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  } finally {
    // thunkApi.dispatch(stopDashboardLoader());
  }
};

export const uploadProfileHandler = async (data, thunkApi) => {
  try {
    // thunkApi.dispatch(startDashboardLoader());
    const { user } = thunkApi.extra.apiService;
    const response = await user.post(uploadUserProfileApi, data);
    return response.data;
  } catch (err) {
    // thunkApi.dispatch(showFailureToast({ message: err }));
    return Promise.reject(err);
  } finally {
    // thunkApi.dispatch(stopDashboardLoader());
  }
};
