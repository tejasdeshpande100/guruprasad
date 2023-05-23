import { Formik, useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";
import {
  loginByEmailAsyncThunk,
  signupByEmailAsyncThunk,
} from "../store/slices/auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Img from "@/components/img";
import logoDark from "@/images/guruprasad-logo.png";

const registerSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  phone_number: Yup.string()
    .required("Phone number is required")
    .test(
      "len",
      "Phone number should be 10 digits long",
      (val) => val?.length === 10
    ),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password should be atleast 4 character long"),
  confirm_password: Yup.string()
    .required("Confirm password is required")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
});

const RegisterForm = (props) => {
  const dispatch = useDispatch();
  const Router = useRouter();
  const { isLoggedIn } = useSelector(({ auth }) => auth);
  console.log(isLoggedIn);
  const { values, touched, errors, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        password: "",
      },
      validationSchema: registerSchema,
      onSubmit: (values) => {
        dispatch(
          signupByEmailAsyncThunk({
            email: values.email,
            password: values.password,
            first_name: values.first_name,
            last_name: values.last_name,
            phone_number: values.phone_number,
          })
        ).then((res) => {
          Router.push("/login");
        });
      },
    });

  if (isLoggedIn) {
    Router.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="text"
        name="first_name"
        placeholder="First Name"
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {touched.first_name && errors.first_name && (
        <p className="form-error"> {errors.first_name}</p>
      )}

      <input
        className="form-control"
        type="text"
        name="last_name"
        placeholder="Last Name"
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {touched.last_name && errors.last_name && (
        <p className="form-error"> {errors.last_name}</p>
      )}

      <input
        className="form-control"
        type="number"
        name="phone_number"
        placeholder="Phone Number"
        onChange={handleChange}
        onBlur={handleBlur}
        maxLength="10"
        required
      />
      {touched.phone_number && errors.phone_number && (
        <p className="form-error"> {errors.phone_number}</p>
      )}
      <input
        className="form-control"
        type="email"
        name="email"
        placeholder="E-mail Address"
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {touched.email && errors.email && (
        <p className="form-error"> {errors.email}</p>
      )}

      <input
        className="form-control"
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {touched.password && errors.password && (
        <p className="form-error"> {errors.password}</p>
      )}

      <input
        className="form-control"
        type="password"
        name="confirm_password"
        placeholder="Confirm Password"
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {touched.confirm_password && errors.confirm_password && (
        <p className="form-error"> {errors.confirm_password}</p>
      )}

      <div className="form-button">
        <button id="submit" type="submit" className="ibtn">
          Register
        </button>
      </div>
    </form>
  );
};
const loginRegister = (props) => {
  return (
    <div className="form-body">
      <div className="website-logo">
        <Link href="/">
          <div className="logo">
            <Img className="logo-size" src={logoDark} alt="" />
          </div>
        </Link>
      </div>
      <div className="row">
        <div className="img-holder">
          <div className="bg"></div>
          <div className="info-holder"></div>
        </div>
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Get more things done with Loggin platform.</h3>
              <p>
                Access to the most powerfull tool in the entire design and web
                industry.
              </p>
              <div className="page-links">
                <a href="#" className="active">
                  Register
                </a>
              </div>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default loginRegister;
