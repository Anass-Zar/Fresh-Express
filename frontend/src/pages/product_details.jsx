import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useParams, Link } from 'react-router-dom';
import vfImage from "../images/vf.jpg";
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/cart/cartSlice"
import { toast } from 'sonner';

const Product_Details = () => {
  const [product, setProduct] = useState({});
  const param = useParams();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  const handleAddToCart = () => {
      dispatch(addToCart({
          ...product,
          quantity: 1
      }
    ))
    toast.success("Product Added To Cart Successfully")
  }

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

  useEffect(() => {
    const fetchListing = async () => {
      if (!param.product) return;
      const product = param.product;
      const res = await fetch(`/api/products/details_product/${product}`);
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setProduct(data);
    };
    fetchListing();
  }, [param.product]);

  const getRandomProducts = () => {
    const shuffledProducts = products.sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, 4);
  };

  const randomProducts = getRandomProducts();

  return (
    <div>
      <Navbar />

      <div className="w-full h-40 md:h-52 text-center grid items-center content-center font-[Dosis] uppercase" style={{ backgroundImage: `url(${vfImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="w-full h-40 md:h-52 py-16 text-center grid items-center content-center bg-[#16A34Add]">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-50 text-center">{product.title}</h1>
            <h1 className="md:text-lg font-semibold text-gray-50 mt-3 flex flex-wrap justify-center gap-2">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              &gt;
              <Link to="/products" className="hover:underline">
                Products
              </Link>
              &gt;
              <Link to={`/products?search=&category=${product.category}`} className="hover:underline">
                {product.category}
              </Link>
              &gt;
              <Link to={`/product_details/${product._id}`} className="hover:underline">
                {product.title}
              </Link>
            </h1>
          </div>
      </div>

      <div className="w-full mx-auto px-6 md:px-10 lg:px-28 py-10">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-2/5">
            <img src={product.image} className="w-full" alt="Product" />
          </div>
          <div className="w-full md:w-3/5 md:pl-16 mt-8 md:mt-0">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 font-[Dosis]">{product.title}</h2>
            <p className="text-gray-700 mb-2 font-semibold text-lg md:text-xl">{product.category}</p>
            <p className="text-gray-700 mb-6 ">{product.description}</p>
            <button className="btn bg-green-500 hover:bg-green-400 text-white py-2 px-4 rounded-lg" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>

        <div className="w-full mx-auto px-6 md:px-10 lg:px-20 py-10">
        <h1 className="text-xl md:text-3xl font-bold text-green-500 font-[Dosis] uppercase mb-5">RELATED PRODUCTS</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {randomProducts.map((product) => (
            <div key={product.id} className="overflow-hidden relative">
              <div className="border border-gray rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  className="w-full overflow-hidden h-64 object-contain transition-transform transform duration-300 hover:scale-125 z-10"
                  alt=""
                />
              </div>
              <div className="bg-amber-500 px-3 py-1 rounded-tl-lg text-white absolute" style={{ top: "0px", left: "0px" }} >
                {product.category}
              </div>
              <div className="px-2.5 py-2.5 rounded-b text-center flex items-center justify-between gap-1">
                <Link to={`/product_details/${product._id}`} className="font-semibold text-lg line-clamp-1 text-start">{product.title}</Link>
                <div className="flex justify-center">
                  <div className="btn border-2 border-gray-800 px-3 py-3 rounded-full text-white flex items-center bg-white hover:bg-gray-100" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 h-6" >
                      <path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product_Details;