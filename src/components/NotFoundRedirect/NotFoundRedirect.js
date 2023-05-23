import React from "react";
import { Navigate } from "react-router-dom";

const NotFoundRedirect = () => {
  return <Navigate to="/" />;
};

export default NotFoundRedirect;
