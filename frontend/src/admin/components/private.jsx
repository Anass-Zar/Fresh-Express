import { useSelector  } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function Private() {
  const { currentAdmin } = useSelector((state) => state.admin);
  return currentAdmin ? <Outlet /> : <Navigate to="/" />
}