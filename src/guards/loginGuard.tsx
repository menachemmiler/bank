import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export default function ({ children }: PropsWithChildren) {
  const isLogin = localStorage.getItem("isLogin");
  if (!isLogin) {
    console.log("לא מורשה !");
    return <Navigate to="/auth" />;
  } else {
    return children;
  }
};

