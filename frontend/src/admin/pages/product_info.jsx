import { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar';
import { useNavigate, useParams } from 'react-router-dom';

const Product_info = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const param = useParams();

  const back = () => {
    navigate('/admin/list_products');
  };

  useEffect(() => {
    const fetchListing = async () => {
      if (!param.product) return;
      const product = param.product;
      const res = await fetch(`http://localhost:3000/api/products/details_product/${product}`);
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setFormData(data);
    };
    fetchListing();
  }, [param.product]);


  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-52 w-full py-6 px-6">
        <h1 className="text-lg font-bold mb-8">Update Product :</h1>
        <div id="section2" className="px-14 py-8 rounded-lg shadow bg-gray-50 border border-gray-300">
          <form >
            <div className="md:flex mb-6">
              <div className="md:w-1/3 pt-1">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4 text-lg"
                  htmlFor="my-textarea"
                >
                  Product Image :
                </label>
              </div>
              <div className="md:w-2/3">
                <label
                  htmlFor="image"
                  className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-50"
                >
                  {formData.image ? (
                    <img src={formData.image} alt="Selected" className="h-full object-cover rounded-lg" />
                  ) : (
                    <>
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <p>There is no image</p>
                      </div>
                    </>
                  )}
                </label>
              </div>
            </div>

            <div className="md:flex mb-6">
              <div className="md:w-1/3 flex items-center">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4 text-lg"
                  htmlFor="title"
                >
                  Product Name :
                </label>
              </div>
              <div className="md:w-2/3">
                <h2
                  className="block w-full px-4 py-2 text-gray-700 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white"
                  id="title"
                >{formData.title || ''}</h2>
              </div>
            </div>

            <div className="md:flex mb-6">
              <div className="md:w-1/3 flex items-center">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4 text-lg"
                  htmlFor="category"
                >
                  Product Category :
                </label>
              </div>
              <div className="md:w-2/3">
              <h2
                  className="block w-full px-4 py-2 text-gray-700 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white"
                  id="category"
                >{formData.category || ''}</h2>
              </div>
            </div>

            <div className="md:flex mb-6">
              <div className="md:w-1/3 flex items-center">
                <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4 text-lg" htmlFor="category">
                  Product Stock :
                </label>
              </div>
              <div className="md:w-2/3">
                <div className='flex gap-12'>
                  <div className='flex items-center'>
                    <h2
                      id="inStock"
                      className={`${formData.stock ? "text-green-600" : "text-red-600"} block w-full px-4 py-2 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white`}
                    >{formData.stock ? "In Stock" : "Out of Stock"}</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex mb-6">
              <div className="md:w-1/3 pt-1">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4 text-lg"
                  htmlFor="description"
                >
                  Product Description :
                </label>
              </div>
              <div className="md:w-2/3">
                <p className="block w-full px-4 py-2 text-gray-700= rounded-lg focus:outline-none focus:border-green-500 focus:bg-white"
                  id="description">{formData.description || ''}</p>
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button className="cursor-pointer bg-red-600 hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg" onClick={back}>
                  Back
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Product_info;
