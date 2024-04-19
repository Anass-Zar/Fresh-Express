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
  console.log(products)



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
                <div className="m-4 py-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-gray-100 rounded p-4 text-center">
                            <div className="bg-amber-400 rounded-full p-5 mx-auto mb-5 w-20 h-20 flex items-center justify-center">
                                <i className="fas fa-car-side text-white text-3xl"></i>
                            </div>
                            <div className="text-center">
                                <h5 className="mb-2 text-xl font-medium">Free Shipping</h5>
                                <p className="mb-0 text-gray-400">Free on order over $300</p>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded p-4 text-center">
                            <div className="bg-amber-400 rounded-full p-5 mx-auto mb-5 w-20 h-20 flex items-center justify-center">
                                <i className="fas fa-user-shield text-white text-3xl"></i>
                            </div>
                            <div className="text-center">
                                <h5 className="mb-2 text-xl font-medium">Security Payment</h5>
                                <p className="mb-0 text-gray-400">100% security payment</p>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded p-4 text-center">
                            <div className="bg-amber-400 rounded-full p-5 mx-auto mb-5 w-20 h-20 flex items-center justify-center">
                                <i className="fas fa-exchange-alt text-white text-3xl"></i>
                            </div>
                            <div className="text-center">
                                <h5 className="mb-2 text-xl font-medium">30 Day Return</h5>
                                <p className="mb-0 text-gray-400">30 day money guarantee</p>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded p-4 text-center">
                            <div className="bg-amber-400 rounded-full p-5 mx-auto mb-5 w-20 h-20 flex items-center justify-center">
                                <i className="fa fa-phone-alt text-white text-3xl"></i>
                            </div>
                            <div className="text-center">
                                <h5 className="mb-2 text-xl font-medium">24/7 Test</h5>
                                <p className="mb-0 text-gray-400">Support every time fast</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="m-4 py-5">
                    <div className="flex justify-between items-center mb-5">
                        <h1 className="text-lg md:text-2xl">Our Organic Products</h1>
                        <ul className="flex text-center space-x-2 md:space-x-4">
                            {categories.map((category) => (
                                <li key={crypto.randomUUID()}>
                                    <span className={`px-4 py-2 cursor-pointer rounded-full bg-gray-100 text-dark text-sm md:text-base ${activeCategory === category && `bg-green-500`}`}
                                        onClick={() => setActiveCategory(category)}>
                                        {category}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div id="" className="tab-pane fade show p-0 active">
                        {filteredProducts?.length > 0 ?
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {filteredProducts.map((product) => (
                                    <div key={product.id} className="rounded overflow-hidden shadow-lg relative border border-gray ">
                                        <div className="overflow-hidden">
                                            <img src={product.image} className="w-full overflow-hidden h-64 object-contain transition-transform transform duration-300 hover:scale-125 z-10" alt="" />
                                        </div>
                                        <div className="bg-orange-500 px-3 py-1 rounded-tl text-white absolute" style={{ top: '10px', left: '10px' }}>
                                            {product.category}
                                        </div>
                                        <div className="p-4 border border-secondary rounded-b text-center">
                                            <h4 className="font-bold text-lg">{product.title}</h4>
                                            <p className="mt-4">{product.description}</p>
                                            <div className="flex justify-center mt-6">
                                                <a href="#" className="btn border py-2 px-4 rounded-lg text-white flex items-center bg-green-500 hover:bg-green-400">
                                                    <Link to={`/product_details/${product._id}`}>
                                                        <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                                        Add to cart
                                                    </Link>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            : <h1 className="">No Product Here</h1>}
                    </div>

                </div>



                <div className="bg-green-500 my-5">
                    <div className="container pr-24 pl-24">
                        <div className="flex flex-col lg:flex-row items-center">
                            <div className="lg:w-1/2">
                                <div className="">
                                    <h1 className="text-5xl lg:text-5xl text-white font-bold">Fresh Exotic Fruits</h1>
                                    <p className="text-4xl text-gray-700 font-normal mb-4 mt-6">in Our Store</p>
                                    <p className="text-base lg:text-lg text-dark mb-8">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                                    <Link to="/products">
                                        <a href="#" className="btn border-2 border-white rounded-lg text-dark py-4 px-5">BUY</a>
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