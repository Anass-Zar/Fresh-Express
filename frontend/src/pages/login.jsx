import { Toaster, toast } from 'sonner'; // Update this import to the correct package
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/admin/adminSlice";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Admin_Login = () => {

  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const {loading} = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alreadyLogin = useSelector((state) => state.admin.currentAdmin);
  if (alreadyLogin) {
    return <Navigate to="/admin/requests" />;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginStart());
      const res = await fetch('http://localhost:3000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    
      const data = await res.json();
      if (res.status === 400) {
        dispatch(loginFailure(data.message))
        if (data.error === "All fields are required") {
          toast.error('All fields are required');
        } else if (data.error === "Email not found") {
          toast.error('Email not found');
        } else if (data.error === "Password not correct") {
          toast.error('Password not correct');
        } else {
          console.log("An error occurred:", data.error);
        }
      } else {
        toast.success("Login successfully");
        console.log(data);
        dispatch(loginSuccess(data));
        navigate("/admin/requests");
      }
    } catch (error) {
      dispatch(loginFailure(error.message))
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center sm:py-12">
      <Toaster position="top-right" expand={false} richColors closeButton/>
      <div className="p-4 w-[360px] mx-auto ">
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <form onSubmit={handleSubmit} className="px-5 py-7">
            <label className="font-semibold text-sm text-gray-700 pb-1 block">E-mail</label>
            <input type="text" id='email' onChange={handleChange} className="bg-gray-50 border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-gray-800 outline-colorBlueTwo" />
            <label className="font-semibold text-sm text-gray-700 pb-1 block">Password</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} id='password' onChange={handleChange} className="bg-gray-50 border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-gray-800 outline-colorBlueTwo" />
                <span onClick={handleTogglePassword} className="cursor-pointer absolute inset-y-0 -right-1 -top-3 grid place-content-center px-4">
                  <svg  xmlns="http://www.w3.org/2000/svg"  className="h-4 w-4 text-gray-400"  fill="none"  viewBox="0 0 24 24"  stroke="currentColor">
                    <path  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="2"  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"  />
                  </svg>
                </span>
            </div>
            <button type="submit" className="bg-green-500 hover:bg-green-400 text-white w-full py-2.5 rounded-lg text-sm shadow-sm font-semibold text-center inline-block">
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Admin_Login
