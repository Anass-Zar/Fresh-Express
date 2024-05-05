import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import { useNavigate, useParams } from "react-router-dom";


const Request = () => {
  const { request } = useParams();
  const [formData, setFormData] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("waiting");

  const navigate = useNavigate()


  useEffect(() => {
    const fetchListing = async () => {
      if (!request) return;
      try {
        const res = await fetch(`http://localhost:3000/api/requests/request/${request}`);
        const data = await res.json();
        if (data.success === false) {
          console.log(data.message);
          return;
        }
        setFormData(data);
      } catch (error) {
        console.error("Error fetching request data:", error);
      }
    };
    fetchListing();
  }, [request]);

  console.log(formData.status);
  console.log(selectedStatus);

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/requests/requests/${request}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: selectedStatus }),
      });
      const data = await res.json();
      if (data.success) {
        console.log("Status updated successfully");
      } else {
        console.error("Failed to update status:", data.message);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
    navigate("/admin/requests")
  };





  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-52 w-full py-6 px-6">
        <h1 className="text-lg font-bold mb-8">Request:</h1>
        <div className="bg-white border border-gray-400 rounded-lg p-10 mb-6">
          <div className="flex justify-between mb-3">
            <h1><span className="font-semibold">Full Name : </span>{formData.fullName}</h1>
            <h1><span className="font-semibold">Date : </span>{new Date(formData.createdAt).toLocaleDateString("en-GB")}</h1>
          </div>
          <h1 className="mb-3"><span className="font-semibold">Phone : </span>{formData.phone}</h1>
          <h1 className="mb-3"><span className="font-semibold">Email : </span>{formData.email}</h1>
          <h1 className="mb-3"><span className="font-semibold">Country : </span>{formData.country}</h1>
          <label className="font-semibold">Message : </label>
          <p className="mb-3">{formData.message}</p>
          <label className="font-semibold">Order : </label>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 xl:gap-x-16 gap-y-4 mb-3 mt-2">
            {formData.order && formData.order.map((product) => (
              <div key={product} className="flex items-center justify-between border rounded-lg pl-2 pr-6">
                <div className="flex items-center gap-3">
                  <img src={product.image} alt="Image" className="w-16 h-16 rounded-lg" />
                  <h1>{product.title}</h1>
                </div>
                <h1>x {product.quantity}</h1>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="inline-grid justify-items-center gap-4 mt-9 w-full mx-auto">
            <div className='flex justify-center gap-10'>
              <div className='flex items-center'>
                <input type="radio" name="status" id="accepted" className="w-4 h-4 cursor-pointer" value="accepted" checked={selectedStatus === "accepted"} onChange={handleStatusChange} />
                <label htmlFor="accepted" className='text-lg ml-1 text-gray-700 cursor-pointer'>Accepted</label>
              </div>
              <div className='flex items-center'>
                <input type="radio" name="status" id="waiting" className="w-4 h-4 cursor-pointer" value="waiting" checked={selectedStatus === "waiting"} onChange={handleStatusChange} />
                <label htmlFor="waiting" className='text-lg ml-1 text-gray-700 cursor-pointer'>Waiting</label>
              </div>
              <div className='flex items-center'>
                <input type="radio" name="status" id="refused" className='w-4 h-4 cursor-pointer' value="refused" checked={selectedStatus === "refused"} onChange={handleStatusChange} />
                <label htmlFor="refused" className='text-lg ml-1 text-gray-700 cursor-pointer'>Refused</label>
              </div>
            </div>
            
            <button type="submit" className="w-20 cursor-pointer bg-green-600 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Request;
