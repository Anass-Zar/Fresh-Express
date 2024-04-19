import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import vfImage from "../images/vf.jpg";
import "./products.css";

const Product_Details = () => {
  const [product, setProduct] = useState({});
  const param = useParams();
  const [quantity, setQuantity] = useState(1);

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

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
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
      setProduct(data);
    };
    fetchListing();
  }, [param.product]);

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
              <Link to={`/products/${product.category}`} className="hover:underline">
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
          <div className="w-full md:w-1/3">
            <img src={product.image} className="w-full" alt="Product" />
          </div>
          <div className="w-full md:w-2/3 md:pl-16 mt-8 md:mt-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 font-[Dosis]">{product.title}</h2>
            <p className="text-gray-700 mb-2 font-semibold">{product.category}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <div className="flex items-center mb-6 w-32">
              <form className="max-w-xs mx-auto">
                <label htmlFor="quantity-input" className="block mb-2 text-sm font-medium text-gray-900">Choose quantity:</label>
                <div className="relative flex items-center max-w-[8rem]">
                  <button type="button" onClick={decrementQuantity} className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-l-lg px-3 py-1.5 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                    -
                  </button>
                  <input type="text" id="quantity-input" value={quantity} readOnly className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 " placeholder="999" required />
                  <button type="button" onClick={incrementQuantity} className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-r-lg px-3 py-1.5 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                    +
                  </button>
                </div>
              </form>
            </div>
            <button className="btn bg-green-500 hover:bg-green-400 text-white py-2 px-4 rounded-lg">Add to Cart</button>

          </div>
        </div>
      </div>

      <div className="container-fluid py-10">
        <h1 className="text-2xl md:text-4xl font-bold text-green-500 text-center font-[Dosis] uppercase">RELATED PRODUCTS</h1>
        <div className="fruit_container flex">
          {products.splice(0 , 4).map((product) => (
            <div key={product._id} className="box relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <img src={product.image} alt="" />
              <div className="product_name">
                <h5>{product.title}</h5>
              </div>
              <div className="link_box">
                <h5>{product.title}</h5>
                <Link to={`/product_details/${product._id}`}>
                  Buy Now
                </Link>
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