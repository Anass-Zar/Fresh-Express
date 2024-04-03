import { useSelector  } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function Private() {
  const allAccess = useSelector(state => state.admin.currentAdmin.allAccess);
  return allAccess ? <Outlet /> : <Navigate to="/admin/requests" />
}