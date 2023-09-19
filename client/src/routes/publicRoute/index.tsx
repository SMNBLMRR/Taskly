import { lazy } from "react";
import { Route } from "react-router-dom";

const Home = lazy(() => import("../../pages/Home"));
const Login = lazy(() => import("../../pages/Login"));
const Register = lazy(() => import("../../pages/Register"));
const Error404 = lazy(() => import("../../pages/Error404"));

const publicRoute = [
  <Route element={<Home />} index key="home" path={"/"} />,
  <Route element={<Login />} key="login" path={"/login"} />,
  <Route element={<Register />} key="register" path={"/register"} />,
  <Route element={<Error404 />} key="error404" path="*" />
];

export default publicRoute;
