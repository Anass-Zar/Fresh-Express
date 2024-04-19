import { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar';
import { getStorage, uploadBytesResumable, ref, getDownloadURL } from 'firebase/storage';
import { app } from '../../firebase';
import { useNavigate, useParams } from 'react-router-dom';
import { Toaster, toast } from 'sonner';

const Update_Product = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

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

  const storeImage = async (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleChange = (e) => {
    if (e.target.id === 'image') {
      const file = e.target.files[0];
      setLoading(true);
      storeImage(file).then((url) => {
        setFormData({ ...formData, image: url });
        setLoading(false);
      }).catch((error) => {
        console.error(error);
        toast.error('Image upload failed (2 MB max per image)');
        setLoading(false);
      });
    } else {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/api/products/update_product/${formData._id}`, {
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
      setLoading(false);
      navigate('/admin/list_products');
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <Toaster position="top-right" expand={false} richColors closeButton />
      <div className="ml-52 w-full py-6 px-6">
        <h1 className="text-lg font-bold mb-8">Update Product :</h1>
        <div id="section2" className="px-14 py-8 rounded-lg shadow bg-gray-50 border border-gray-300">
          <form onSubmit={handleSubmit}>
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
                  className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-50"
                >
                  {formData.image ? (
                    <img src={formData.image} alt="Selected" className="h-full object-cover rounded-lg" />
                  ) : (
                    <>
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, JPEG ( MAX : 2MB )</p>
                      </div>
                    </>
                  )}
                  <input id="image" name="image" type="file" className="hidden" onChange={handleChange} />
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
                <input
                  value={formData.title || ''}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white"
                  id="title"
                  type="text"
                />
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
                <select
                  value={formData.category || ''}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white"
                  id="category"
                >
                  <option value=""></option>
                  <option value="Fruits">Fruits</option>
                  <option value="Vegetables">Vegetables</option>
                </select>
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
                    <input
                      type="checkbox"
                      checked={formData.stock || false}
                      onChange={(e) => setFormData({ ...formData, stock: e.target.checked })}
                      id="inStock"
                      className="w-4 h-4"
                    />
                    <label htmlFor="inStock" className='text-lg ml-2 text-gray-700'>In Stock</label>
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
                <textarea
                  value={formData.description || ''}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white"
                  id="description"
                  rows="8"
                ></textarea>
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className={`${loading ? 'cursor-not-allowed shadow' : 'cursor-pointer' } bg-green-600 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg`}
                  type="submit"
                  disabled={loading}
                >
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
