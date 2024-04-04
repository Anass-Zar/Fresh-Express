import { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar';
import { useNavigate, useParams } from 'react-router-dom';

const Update_Product = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', category: '', description: '' });
  const param = useParams();

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/products/update_product/${param.product}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
        }),
      });
      const data = await res.json();
      console.log(data);
      navigate('/admin/list_products');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-52 w-full py-6 px-6">
        <h1 className='text-lg font-bold mb-8'>Add Product :</h1>
        <div id='section2' className="px-14 py-8 rounded-lg shadow bg-gray-50 border border-gray-300">
          <form onSubmit={handleSubmit}>
            <div className="md:flex mb-6">
              <div className="md:w-1/3 flex items-center">
                <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4 text-lg" htmlFor="title">
                  Title
                </label>
              </div>
              <div className="md:w-2/3">
                <input value={formData.title} onChange={handleChange} className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white" id="title" type="text" />
              </div>
            </div>

            <div className="md:flex mb-6">
              <div className="md:w-1/3 flex items-center">
                <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4 text-lg" htmlFor="category">
                  Category
                </label>
              </div>
              <div className="md:w-2/3">
                <select value={formData.category} onChange={handleChange} className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white" id="category">
                  <option value=""></option>
                  <option value="Fruits">Fruits</option>
                  <option value="Vegetables">Vegetables</option>
                </select>
              </div>
            </div>

            <div className="md:flex mb-6">
              <div className="md:w-1/3 pt-1">
                <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4 text-lg" htmlFor="description">
                  Description
                </label>
              </div>
              <div className="md:w-2/3">
                <textarea value={formData.description} onChange={handleChange} className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white" id="description" rows="8"></textarea>
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button className="shadow bg-green-600 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg" type="submit">
                  Update Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update_Product;
