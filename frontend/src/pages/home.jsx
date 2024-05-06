import { useEffect, useState } from "react";
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Slider from "../components/slider"
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = [
    "All", "Vegetables", "Fruits"
  ]


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products/list_products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);



  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProducts(products)
    }
    else {
      setFilteredProducts(() => {
        const filteredProducts = products.filter((product) => product.category.toLowerCase() === activeCategory.toLowerCase())

        return filteredProducts
      })
    }
  }, [activeCategory, products])
  return (
    <div>
      <Navbar />
      <Slider />
      <div className="">
        <div className="pt-16 pb-10 w-[90%] container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-100 rounded p-4 text-center">
              <div className="bg-amber-500 rounded-full p-5 mx-auto mb-5 w-20 h-20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-12 h-12">
                  <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" fill="#FFFFFF" />
                </svg>
              </div>
              <div className="text-center">
                <h5 className="mb-2 text-xl font-medium">Free Shipping</h5>
                <p className="mb-0 text-gray-400">Free on order over $300</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded p-4 text-center">
              <div className="bg-amber-500 rounded-full p-5 mx-auto mb-5 w-20 h-20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-12 h-12">
                  <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z" fill="#FFFFFF" />
                </svg>
              </div>
              <div className="text-center">
                <h5 className="mb-2 text-xl font-medium">Security Payment</h5>
                <p className="mb-0 text-gray-400">100% security payment</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded p-4 text-center">
              <div className="bg-amber-500 rounded-full p-5 mx-auto mb-5 w-20 h-20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-12 h-12">
                  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" fill="#FFFFFF" />
                </svg>
              </div>
              <div className="text-center">
                <h5 className="mb-2 text-xl font-medium">30 Day Return</h5>
                <p className="mb-0 text-gray-400">30 day money guarantee</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded p-4 text-center">
              <div className="bg-amber-500 rounded-full p-5 mx-auto mb-5 w-20 h-20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-12 h-12">
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" fill="#FFFFFF" />
                </svg>
              </div>
              <div className="text-center">
                <h5 className="mb-2 text-xl font-medium">24/7 Support</h5>
                <p className="mb-0 text-gray-400">Support every time fast</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-14 w-[90%] container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xl md:text-3xl font-bold font-[Dosis] uppercase text-green-500">Our Organic Products</h1>
            <ul className="flex text-center space-x-2 md:space-x-4">
              {categories.map((category) => (
                <li key={crypto.randomUUID()}>
                  <span className={`px-4 py-2 cursor-pointer rounded-full bg-gray-100 text-dark text-sm md:text-base ${activeCategory === category && `bg-green-500 text-white`}`}
                    onClick={() => setActiveCategory(category)}>
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div id="" className="">
            {filteredProducts?.length > 0 ?
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filteredProducts.slice(0, 8).map((product) => (
                  <div key={product.id} className="overflow-hidden relative">
                    <div className="border border-gray rounded-lg overflow-hidden">
                      <Link to={`/product_details/${product._id}`}>
                        <img
                          src={product.image}
                          className="w-full overflow-hidden h-64 object-contain transition-transform transform duration-300 hover:scale-125 z-10"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="bg-amber-500 px-3 py-1 rounded-tl-lg text-white absolute" style={{ top: "0px", left: "0px" }} >
                      {product.category}
                    </div>
                    <div className="px-2.5 py-2.5 rounded-b text-center items-center gap-1 flex justify-center">
                      <Link to={`/product_details/${product._id}`} className="font-semibold text-lg line-clamp-1 flex justify-center">{product.title}</Link>
                    </div>
                  </div>
                ))}

              </div>
              : <h1 className="">No Product Here</h1>}
          </div>
        </div>

        <div className="bg-green-500 mt-5">
          <div className="container pr-24 pl-24">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2">
                <div className="">
                  <h1 className="text-5xl lg:text-5xl text-white font-bold">Fresh Exotic Fruits</h1>
                  <p className="text-4xl text-gray-700 font-normal mb-4 mt-6">in Our Store</p>
                  <p className="text-base lg:text-lg text-dark mb-8">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                  <Link to="/products">
                    <a href="#" className="btn border-2 border-white rounded-lg text-white text-xl font-semibold py-2.5 px-6 bg-green-500 hover:bg-green-400">Buy</a>
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="">
                  <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dd0wow5-e993a363-d200-481a-a003-7ab54dd63c87.png/v1/fill/w_900,h_866/red_apples_in_a_crate__by_prussiaart_dd0wow5-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODY2IiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kZDB3b3c1LWU5OTNhMzYzLWQyMDAtNDgxYS1hMDAzLTdhYjU0ZGQ2M2M4Ny5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.dJ5jiPYqxw3OIMEWIDC5RzlMSHkGrMztQ0-XvROFkbI" className="w-full rounded" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home