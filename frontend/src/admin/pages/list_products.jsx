import { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import { Link } from 'react-router-dom';

const List_Product = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-52 w-full py-6 px-6">
        <h1 className='text-lg font-bold mb-8'>List Products :</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
          {products.map((product) => (
            <div key={product.id} className='border border-gray-500 rounded-lg p-4 '>
              <img src={product.image} alt="Image" className='rounded-lg' />
              <h1 className='mb-2 text-lg font-semibold'>Title : {product.title}</h1>
              <p className='mb-2'>Category : {product.category}</p>
              <p className='mb-3 text-sm line-clamp-2'>{product.description}</p>
              <Link to={`/admin/update_product/${product._id}`}>
                <button type="button" className='bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg'>
                  update
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List_Product;
