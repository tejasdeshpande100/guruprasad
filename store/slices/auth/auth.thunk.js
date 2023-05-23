import {
  emailLogin,
  emailSignup,
  fetchAllForgotPasswordsApi,
} from "../../../utils/apis.utils";
import { formatUserResponse } from "../../../utils/global/user.global";
import { setUserProfileDetails } from "../user/user.slice";

export const signInWithEmail = async (data, thunkApi) => {
  try {
    debugger;
    const { default: defaultAxios } = thunkApi.extra.apiService;
    const response = await defaultAxios.post(emailLogin, {
      ...data,
      user_type: "exmyb",
      department_type: "kam",
    });

    const responseData = response.data;
    const userDetails = formatUserResponse(responseData);
    thunkApi.dispatch(setUserProfileDetails(userDetails));
    // thunkApi.dispatch(
    //   showSuccessToast({
    //     message: response?.message,
    //     vertical: "top",
    //     horizontal: "right",
    //   })
    // );
    return responseData;
  } catch (err) {
    // thunkApi.dispatch(showFailureToast({ message: err }));
    return Promise.reject();
  }
};

// export const forgotPassword = async (email, thunkApi) => {
//   try {
//     const { default: defaultAxios } = thunkApi.extra.apiService;
//     const response = await defaultAxios.post(fetchAllForgotPasswordsApi, {
//       email,
//     });
//     const responseData = response.data;
//     thunkApi.dispatch(
//       showSuccessToast({
//         message: response?.message,
//         vertical: "top",
//         horizontal: "right",
//       })
//     );
//     return responseData;
//   } catch (err) {
//     thunkApi.dispatch(showFailureToast({ message: err }));
//     return Promise.reject();
//   }
// };
export const forgotPassword = async (email, thunkApi) => {
  try {
    const { default: defaultAxios } = thunkApi.extra.apiService;
    const response = await defaultAxios.post(fetchAllForgotPasswordsApi, {
      email,
    });
    const responseData = response.data;
    // thunkApi.dispatch(
    //   showSuccessToast({
    //     message: response?.message,
    //     vertical: "top",
    //     horizontal: "right",
    //   })
    // );
    return responseData;
  } catch (err) {
    // thunkApi.dispatch(showFailureToast({ message: err }));
    return Promise.reject();
  }
};

export const signUpWithEmail = async (data, thunkApi) => {
  try {
    const { default: defaultAxios } = thunkApi.extra.apiService;
    const response = await defaultAxios.post(emailSignup, {
      ...data,
      user_type: "exmyb",
      department_type: "kam",
    });
    console.log(response);
    return response.data;
  } catch (err) {
    return Promise.reject();
  }
};
