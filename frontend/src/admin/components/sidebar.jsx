import Fresh_Express from "../images/express.png"
import { useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logoutStart, logoutSuccess, logoutFailure } from "../../redux/admin/adminSlice";

const Sidebar = () => {
  const allAccess = useSelector(state => state.admin.currentAdmin.allAccess);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      dispatch(logoutStart());
      const res = await fetch('http://localhost:3000/api/admin/logout');
      const data = await res.json();
      if (data.success === false) {
        dispatch(logoutFailure(data.message))
      } else {
        dispatch(logoutSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(logoutFailure(error.message))
    }
  }

  return (
    <div className="fixed w-52 bg-green-400 h-screen grid content-between">
      <div className="">
        <Link to="/admin/requests" className='flex items-center gap-2 pt-4 pb-2 px-5'>
          <img className="w-10" src={Fresh_Express} alt="logo" />
          <h1 className='text-lg font-bold'>Fresh Express</h1>
        </Link>
        <div className="grid py-4">
          {allAccess &&
            <>
              <Link to="/admin/requests" className="font-bold hover:bg-green-300 py-2.5 px-5">Requests</Link>
              <Link to="/admin/list_products" className="font-bold hover:bg-green-300 py-2.5 px-5">List Products</Link>
              <Link to="/admin/add_product" className="font-bold hover:bg-green-300 py-2.5 px-5">Add Product</Link>
            </>
          }
          {!allAccess &&
            <Link to="/admin/requests" className="font-bold hover:bg-green-300 py-2.5 px-5">Requests</Link>
          }
        </div>
      </div>
      <button className="text-start text-lg font-bold flex items-center gap-2 w-24 my-4 mx-5" onClick={handleLogout}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5">
          <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"/>
        </svg>
        Logout
      </button>
    </div>
  )
}

export default Sidebar;
