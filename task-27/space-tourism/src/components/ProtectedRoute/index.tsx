import type { FC } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    redirectPath: string;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ redirectPath }) => {
  return (
    <Navigate to={redirectPath}/>
  )
}

