import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import { useParams } from "react-router-dom";

const Request = () => {
  const [products, setProducts] = useState([]);
  const { request } = useParams();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products/list_products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

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
    <div className="flex ">
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
            {products.map((product) => (
              <div key={product._id} className="flex items-center justify-between border rounded-lg pl-2 pr-6">
                <div className="flex items-center gap-3">
                  <img src={product.image} alt="Image" className="w-16 h-16  rounded-lg" />
                  <h1>{product.title}</h1>
                </div>
                <h1>x 1</h1>
              </div>
            ))}
          </div>

          <div className='flex justify-center gap-12 mt-12'>
            <div className='flex items-center'>
              <input type="radio" name="status" id="accepted" className="w-4 h-4" />
              <label htmlFor="accepted" className='text-lg ml-2 text-gray-700'>Accepted</label>
            </div>
            <div className='flex items-center'>
              <input type="radio" name="status" id="refused" className='w-4 h-4' />
              <label htmlFor="refused" className='text-lg ml-2 text-gray-700'>Refused</label>
            </div>
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
