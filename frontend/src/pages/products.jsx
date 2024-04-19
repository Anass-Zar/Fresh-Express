import { useEffect, useState } from "react";
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import "./products.css";
import { Link } from "react-router-dom";
import vfImage from "../images/vf.jpg";

const Product = () => {


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
    <div>
      <Navbar />
      
      <div className="w-full h-40 md:h-52 text-center grid items-center content-center font-[Dosis] uppercase" style={{ backgroundImage: `url(${vfImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="w-full h-40 md:h-52 py-16 text-center grid items-center content-center bg-[#16A34Add]">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-50 text-center">List Products</h1>
          <h1 className="md:text-lg font-semibold text-gray-50 mt-3 flex justify-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            &gt;
            <Link to="/products" className="hover:underline">
              Products
            </Link>
          </h1>
        </div>
      </div>

      <section className="w-full md:w-[85%] container mx-auto px-6 pb-10 pt-8 md:pb-20 md:py-16 grid md:flex gap-10">

        <div className="w-full md:w-[70%] container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <div key={product._id} className="bg-white py-4 shadow-md rounded-lg">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
                <div className="text-center">
                  <h5 className="text-lg font-semibold">{product.title}</h5>
                  <div className="mt-2">
                    <Link to={`/product_details/${product._id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[30%]">
          <div className="pb-8">
            <h1 className="font-[Dosis] uppercase text-xl font-semibold text-green-500 pb-2">SEARCH PRODUCTS</h1>

            <form className="flex items-center max-w-sm mx-auto">   
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-4">
                      <svg className="w-4 h-4 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                    </div>
                    <input type="text" id="simple-search" className="bg-white border border-gray-400 text-gray-700 rounded-3xl focus:ring-green-500 focus:border-green-500 block w-full ps-10 p-2" placeholder="Search..." />
                </div>
            </form>

          </div>
          <div className="">
            <h1 className="font-[Dosis] uppercase text-xl font-semibold text-green-500 pb-2.5">ALL CATEGORIES</h1>
            <div className="grid gap-2.5">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6">
                  <path d="M224 112c-8.8 0-16-7.2-16-16V80c0-44.2 35.8-80 80-80h16c8.8 0 16 7.2 16 16V32c0 44.2-35.8 80-80 80H224zM0 288c0-76.3 35.7-160 112-160c27.3 0 59.7 10.3 82.7 19.3c18.8 7.3 39.9 7.3 58.7 0c22.9-8.9 55.4-19.3 82.7-19.3c76.3 0 112 83.7 112 160c0 128-80 224-160 224c-16.5 0-38.1-6.6-51.5-11.3c-8.1-2.8-16.9-2.8-25 0c-13.4 4.7-35 11.3-51.5 11.3C80 512 0 416 0 288z" fill="#FD7600"/>
                </svg>
                <p className="text-lg text-gray-700">Fruits</p>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                  <path d="M346.7 6C337.6 17 320 42.3 320 72c0 40 15.3 55.3 40 80s40 40 80 40c29.7 0 55-17.6 66-26.7c4-3.3 6-8.2 6-13.3s-2-10-6-13.2c-11.4-9.1-38.3-26.8-74-26.8c-32 0-40 8-40 8s8-8 8-40c0-35.7-17.7-62.6-26.8-74C370 2 365.1 0 360 0s-10 2-13.3 6zM244.6 136c-40 0-77.1 18.1-101.7 48.2l60.5 60.5c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-55.3-55.3 0 .1L2.2 477.9C-2 487-.1 497.8 7 505s17.9 9 27.1 4.8l134.7-62.4-52.1-52.1c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L199.7 433l100.2-46.4c46.4-21.5 76.2-68 76.2-119.2C376 194.8 317.2 136 244.6 136z" fill="#FD7600"/>
                </svg>
                <p className="text-lg text-gray-700">Vegetables</p>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                  <path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" fill="#FD7600"/>
                </svg>
                <p className="text-lg text-gray-700">All</p>
              </div>
            </div>
          </div>
        </div>

      </section>
      <Footer />
    </div>
  )
}

export default Product