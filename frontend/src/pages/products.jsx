import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import vfImage from "../images/vf.jpg";
import { useTranslation } from "react-i18next";
// import Error404 from "../components/error404";

const Product = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState({
    search: "",
    category: "all",
    parking: false,
    furnished: false,
    sort: "createdAt",
    order: "desc"
  });
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 12;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchForm = urlParams.get('search');
    const categoryForm = urlParams.get('category');

    if (searchForm || categoryForm) {
      setData({
        search: searchForm || '',
        category: categoryForm || 'all',
      })
    }

    const fetchProducts = async () => {
      try {
        const searchQuery = urlParams.toString();
        const response = await fetch(
          `http://localhost:3000/api/products/search_products?${searchQuery}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [location.search]);



  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.id === 'all' || e.target.id === 'Fruits' || e.target.id === 'Vegetables') {
      setData({ ...data, category: e.target.id })
    }
    if (e.target.id === 'search') {
      setData({ ...data, search: e.target.value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams()
    urlParams.set('search', data.search)
    urlParams.set('category', data.category)
    const searchQuery = urlParams.toString()
    navigate(`?${searchQuery}`)
    console.log()
  }

  const indexOfLastProduct = (currentPage + 1) * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div>
      <Navbar />

      <div className="w-full h-40 md:h-52 text-center grid items-center content-center font-[Dosis] uppercase" style={{ backgroundImage: `url(${vfImage})`, backgroundSize: "cover", backgroundPosition: "center", }} >
        <div className="w-full h-40 md:h-52 py-16 text-center grid items-center content-center bg-[#16A34Add]">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-50 text-center">{t("products.Title")}</h1>
          <h1 className="md:text-lg font-semibold text-gray-50 mt-3 flex justify-center gap-2">
            <Link to="/" className="hover:underline">
              Fresh Express
            </Link>
            &gt;
            <Link to="/products" className="hover:underline">
              {t("products.Link")}
            </Link>
          </h1>
        </div>
      </div>

      <section className="w-full md:w-[90%] container mx-auto px-6 pb-10 pt-8 md:pb-20 md:py-16 flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row gap-10">
        <div className="w-full md:w-[60%] lg:w-2/3 xl:w-[75%] container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {currentProducts.map((product) => (
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

          {currentProducts.length > 0 ? (
            <ReactPaginate
              pageCount={Math.ceil(products.length / productsPerPage)}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName={"flex justify-center mt-10"}
              previousLabel={`${t("products.P")}`}
              nextLabel={`${t("products.N")}`}
              previousClassName={`${Math.ceil(products.length / productsPerPage) > 1 ? "border border-gray-400 px-3 py-1 rounded-lg mr-2" : 'hidden'}`}
              nextClassName={`${Math.ceil(products.length / productsPerPage) > 1 ? "border border-gray-400 px-3 py-1 rounded-lg ml-2" : 'hidden'}`}
              activeClassName={"text-green-500"}
              pageClassName={"px-3 py-1 rounded-lg mx-1 cursor-pointer"}
              breakClassName={"px-3 py-1 rounded-lg mx-1"}
            />
          ) : (
            <h1></h1>
          )
          }

        </div>
        <form onSubmit={handleSubmit} className="w-full md:w-[40%] lg:w-1/3 xl:w-[25%] mb-4">
          <div className="pb-8">
            <h1 className="font-[Dosis] uppercase text-xl font-semibold text-green-500 pb-2">
              {t("products.T1")}
            </h1>
            <div className="flex items-center max-w-sm">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center pl-4 pr-2 cursor-pointer" onClick={handleSubmit}>
                  <svg
                    className="w-4 h-4 text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search"
                  className="bg-white border border-gray-400 text-gray-700 rounded-3xl focus:ring-green-500 focus:border-green-500 block w-full ps-10 p-2"
                  placeholder={`${t("products.I")}`}
                  value={data.search}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="font-[Dosis] uppercase text-xl font-semibold text-green-500 pb-2.5">
              {t("products.T2")}
            </h1>
            <div className="grid gap-2.5">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="all"
                  checked={data.category === 'all'}
                  onChange={() => setData({ ...data, category: 'all' })}
                />
                <label
                  htmlFor="all"
                  className="inline-flex items-center gap-2 cursor-pointer text-gray-700 hover:text-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-[22px] h-[22px]"
                  >
                    <path d="M224 112c-8.8 0-16-7.2-16-16V80c0-44.2 35.8-80 80-80h16c8.8 0 16 7.2 16 16V32c0 44.2-35.8 80-80 80H224zM0 288c0-76.3 35.7-160 112-160c27.3 0 59.7 10.3 82.7 19.3c18.8 7.3 39.9 7.3 58.7 0c22.9-8.9 55.4-19.3 82.7-19.3c76.3 0 112 83.7 112 160c0 128-80 224-160 224c-16.5 0-38.1-6.6-51.5-11.3c-8.1-2.8-16.9-2.8-25 0c-13.4 4.7-35 11.3-51.5 11.3C80 512 0 416 0 288z" fill="#FD7600" />
                  </svg>
                  All
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="Fruits"
                  checked={data.category === 'Fruits'}
                  onChange={() => setData({ ...data, category: 'Fruits' })}
                />
                <label
                  htmlFor="Fruits"
                  className="inline-flex items-center gap-2 cursor-pointer text-gray-700 hover:text-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-[22px] h-[22px]"
                  >
                    <path d="M224 112c-8.8 0-16-7.2-16-16V80c0-44.2 35.8-80 80-80h16c8.8 0 16 7.2 16 16V32c0 44.2-35.8 80-80 80H224zM0 288c0-76.3 35.7-160 112-160c27.3 0 59.7 10.3 82.7 19.3c18.8 7.3 39.9 7.3 58.7 0c22.9-8.9 55.4-19.3 82.7-19.3c76.3 0 112 83.7 112 160c0 128-80 224-160 224c-16.5 0-38.1-6.6-51.5-11.3c-8.1-2.8-16.9-2.8-25 0c-13.4 4.7-35 11.3-51.5 11.3C80 512 0 416 0 288z" fill="#FD7600" />
                  </svg>
                  Fruits
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="Vegetables"
                  checked={data.category === 'Vegetables'}
                  onChange={() => setData({ ...data, category: 'Vegetables' })}
                />
                <label
                  htmlFor="Vegetables"
                  className="inline-flex items-center gap-2 cursor-pointer text-gray-700 hover:text-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-[22px] h-[22px]"
                  >
                    <path d="M224 112c-8.8 0-16-7.2-16-16V80c0-44.2 35.8-80 80-80h16c8.8 0 16 7.2 16 16V32c0 44.2-35.8 80-80 80H224zM0 288c0-76.3 35.7-160 112-160c27.3 0 59.7 10.3 82.7 19.3c18.8 7.3 39.9 7.3 58.7 0c22.9-8.9 55.4-19.3 82.7-19.3c76.3 0 112 83.7 112 160c0 128-80 224-160 224c-16.5 0-38.1-6.6-51.5-11.3c-8.1-2.8-16.9-2.8-25 0c-13.4 4.7-35 11.3-51.5 11.3C80 512 0 416 0 288z" fill="#FD7600" />
                  </svg>
                  Vegetables
                </label>
              </div>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Product;
