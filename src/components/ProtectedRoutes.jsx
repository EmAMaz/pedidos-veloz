import { Navigate } from "react-router-dom";
import { useUserToken } from "../context/userTokenContext";

export const ProtectedRoutes = ({ children, redirectPath = "/" }) => {

  // const token = useUserToken();
  const token = localStorage.getItem("tokenUser");
  console.log(token);
  if (!token) {
    return (<Navigate to={redirectPath} replace />);
  }
  return children;
};
