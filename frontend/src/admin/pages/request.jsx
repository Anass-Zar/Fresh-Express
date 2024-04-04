import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import { useParams } from "react-router-dom";

const Request = () => {
  const { request } = useParams();
  const [formData, setFormData] = useState({});

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


  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-52 w-full py-6 px-6">
        <h1 className="text-lg font-bold mb-8">Request:</h1>
        <div className="bg-white border border-gray-400 rounded-lg p-10">
          <div className="flex justify-between mb-3">
            <h1>{formData.fullName}</h1>
            <h1>{new Date(formData.createdAt).toLocaleDateString("en-GB")}</h1>
          </div>
          <h1 className="mb-3">{formData.phone}</h1>
          <h1 className="mb-3">{formData.email}</h1>
          <h1 className="mb-3">{formData.country}</h1>
          <p className="mb-3">{formData.message}</p>
          <div className="inline-flex space-x-1 border-[2px] border-gray-400 rounded-xl select-none">

            <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
              <input type="radio" name="status" value="Accepted" className="peer hidden" />
              <span className="peer-checked:bg-green-500 peer-checked:text-gray-50 text-gray-700 px-2 py-1 rounded-lg transition duration-150 ease-in-out">
                Accepted
              </span>
            </label>
          
            <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
              <input type="radio" name="status" value="Refused" className="peer hidden" />
              <span className="peer-checked:bg-red-500 peer-checked:text-gray-50 text-gray-700 px-2 py-1 rounded-lg transition duration-150 ease-in-out">
                Refused
              </span>
            </label>

          </div>
        </div>
        {/* <div className="bg-white border border-gray-400 rounded-lg p-10 flex">

          <div className="w-1/3">
            <h1 className="mb-2">{formData.fullName}</h1>
            <h1 className="mb-2">{new Date(formData.createdAt).toLocaleDateString("en-GB")}</h1>
            <h1 className="mb-2">{formData.phone}</h1>
            <h1 className="mb-2">{formData.email}</h1>
            <h1 className="mb-2">{formData.country}</h1>
          </div>

          <div className="w-2/3">
            <p className="mb-3">{formData.message}</p>
            <div className="inline-flex space-x-1 border-[2px] border-gray-400 rounded-xl select-none">

              <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
                <input type="radio" name="status" value="Accepted" className="peer hidden" />
                <span className="peer-checked:bg-green-500 peer-checked:text-gray-50 text-gray-700 px-2 py-1 rounded-lg transition duration-150 ease-in-out">
                  Accepted
                </span>
              </label>
            
              <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
                <input type="radio" name="status" value="Refused" className="peer hidden" />
                <span className="peer-checked:bg-red-500 peer-checked:text-gray-50 text-gray-700 px-2 py-1 rounded-lg transition duration-150 ease-in-out">
                  Refused
                </span>
              </label>
              
            </div>
          </div>

        </div> */}
      </div>
    </div>
  );
};

export default Request;
