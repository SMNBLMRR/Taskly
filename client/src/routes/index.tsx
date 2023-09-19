import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import userStore from "../store/user";
import Loader from "../ui/atoms/Loader";

const ProtectedRoute: React.FC = () => {
  const { user, hasLoaded } = userStore();
  if (hasLoaded) {
    return <Loader />;
  }
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
