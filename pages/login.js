import { Formik, useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";
import { loginByEmailAsyncThunk } from "../store/slices/auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import logoDark from "@/images/guruprasad-logo.png";
import Img from "@/components/img";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password should be atleast 4 character long"),
});

const LoginForm = (props) => {
  const dispatch = useDispatch();
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { isLoggedIn } = useSelector(({ auth }) => auth);
  console.log(isLoggedIn);
  const Router = useRouter();

  const { values, touched, errors, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (values) => {
        dispatch(
          loginByEmailAsyncThunk({
            email: values.email,
            password: values.password,
            user_type: "exmyb",
            department_type: "sales",
          })
        ).then((res) => {});
      },
    });
  if (isLoggedIn) {
    Router.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
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

      <div className="form-button">
        <button id="submit" type="submit" className="ibtn">
          Login
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
                  Login
                </a>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default loginRegister;
