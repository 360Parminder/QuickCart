import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Auth } from "../Context/UserAuth";
import Cookies from "js-cookie";
import { UserData } from "../Context/UserData";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated } = useContext(Auth);
  const { user } = useContext(UserData);

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  // Redirect to unauthorized if the user's role is not allowed
  if (!allowedRoles.includes(user.role)) {
    // Cookies.remove("Authtoken");
    // return <Navigate to="/unauthorized" />;
    alert("Unauthorized");
  }

  return children;
};

export default ProtectedRoute;
