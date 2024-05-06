import { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import { Link } from 'react-router-dom';

const List_Product = () => {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products/list_products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch(`/api/products/delete_product/${id}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      console.log(result);
      setProducts(products.filter(product => product._id !== id));
      closeModal('modelConfirm');
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = (modalId) => {
    document.getElementById(modalId).style.display = 'block';
    document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden');
  };

  const closeModal = (modalId) => {
    document.getElementById(modalId).style.display = 'none';
    document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden');
  };

  const handleGiveId = (productId) => {
    setId(productId);
    openModal('modelConfirm');
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-52 w-full py-6 px-6">
        <div className='flex justify-between mb-8'>
          <h1 className='text-lg font-bold'>List Products :</h1>
          <input type="text" onChange={ (e) => setSearch(e.target.value) } className="h-8 w-72 px-3 text-sm placeholder:text-gray-400 text-gray-700 bg-white border-2 border-gray-400 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white" placeholder="Search..." />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {products
            .filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
            .map((product) => (
              <div key={product._id} className='border border-gray-500 rounded-lg p-4 '>
                <img src={product.image} alt="Image" className='rounded-lg' />
                <Link to={`/admin/product_info/${product._id}`} className='mb-1 text-xl font-semibold line-clamp-1'>{product.title}</Link>
                <div className='mb-2 flex justify-between'>
                  <p className='text-lg'>{product.category}</p>
                  <p className={`text-lg font-semibold ${product.stock ? 'text-green-500' : 'text-red-500'}`}>{product.stock ? 'In stock' : 'Out of stock'}</p>
                </div>
                <div className='w-full flex justify-between gap-4'>
                  <Link to={`/admin/update_product/${product._id}`} className='w-1/2 text-center bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg'>
                    Update
                  </Link>
                  <button type="button" onClick={() => handleGiveId(product._id)} className='w-1/2 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg'>
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div id="modelConfirm" className="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4">
        <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
          <div className="flex justify-end p-2">
            <button onClick={() => closeModal('modelConfirm')} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className="p-6 pt-0 text-center">
            <svg className="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">Are you sure you want to delete this product?</h3>
            <button onClick={() => handleDeleteProduct(id)} className="text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
              Yes, I&apos;m sure
            </button>
            <button onClick={() => closeModal('modelConfirm')} className="text-gray-900 bg-gray-200 hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center" data-modal-toggle="delete-user-modal">
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List_Product;
