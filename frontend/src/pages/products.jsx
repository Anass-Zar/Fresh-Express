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

    if (searchForm || categoryForm ) {
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
      setData({...data, category: e.target.id})
    }
    if (e.target.id === 'search') {
      setData({...data, search: e.target.value})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams()
    urlParams.set('search', data.search)
    urlParams.set('category', data.category)
    const searchQuery = urlParams.toString()
    navigate(`?${searchQuery}`)
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
                    <div className="btn border-2 border-gray-800 px-3 py-3 rounded-full text-white flex items-center bg-white hover:bg-gray-50" >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 h-6" >
                        <path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                      </svg>
                    </div>
                  </div>
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
                <div className="inline-flex items-center gap-2 cursor-pointer text-gray-700 hover:text-green-600" onClick={() => {document.getElementById('all').click()}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[22px] h-[22px]">
                    <path d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z" fill="#FD7600"/>
                  </svg>
                  <p className="text-lg" htmlFor="all">{t("products.C1")}</p>
                </div>
                <input type="checkbox" id="all" className="hidden" onChange={handleChange} checked={data.category === "all"} />
              </div>

              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-2 cursor-pointer text-gray-700 hover:text-green-600" onClick={() => {document.getElementById('Fruits').click()}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[22px] h-[22px]" >
                    <path d="M224 112c-8.8 0-16-7.2-16-16V80c0-44.2 35.8-80 80-80h16c8.8 0 16 7.2 16 16V32c0 44.2-35.8 80-80 80H224zM0 288c0-76.3 35.7-160 112-160c27.3 0 59.7 10.3 82.7 19.3c18.8 7.3 39.9 7.3 58.7 0c22.9-8.9 55.4-19.3 82.7-19.3c76.3 0 112 83.7 112 160c0 128-80 224-160 224c-16.5 0-38.1-6.6-51.5-11.3c-8.1-2.8-16.9-2.8-25 0c-13.4 4.7-35 11.3-51.5 11.3C80 512 0 416 0 288z" fill="#FD7600" />
                  </svg>
                  <p className="text-lg">{t("products.C2")}</p>
                </div>
                <input type="checkbox" id="Fruits" className="hidden" onChange={handleChange} checked={data.category === "Fruits"}/>
              </div>
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-2 cursor-pointer text-gray-700 hover:text-green-600" onClick={() => {document.getElementById('Vegetables').click()}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[22px] h-[22px]" >
                    <path d="M346.7 6C337.6 17 320 42.3 320 72c0 40 15.3 55.3 40 80s40 40 80 40c29.7 0 55-17.6 66-26.7c4-3.3 6-8.2 6-13.3s-2-10-6-13.2c-11.4-9.1-38.3-26.8-74-26.8c-32 0-40 8-40 8s8-8 8-40c0-35.7-17.7-62.6-26.8-74C370 2 365.1 0 360 0s-10 2-13.3 6zM244.6 136c-40 0-77.1 18.1-101.7 48.2l60.5 60.5c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-55.3-55.3 0 .1L2.2 477.9C-2 487-.1 497.8 7 505s17.9 9 27.1 4.8l134.7-62.4-52.1-52.1c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L199.7 433l100.2-46.4c46.4-21.5 76.2-68 76.2-119.2C376 194.8 317.2 136 244.6 136z" fill="#FD7600" />
                  </svg>
                  <label className="text-lg">{t("products.C3")}</label>
                </div>
                <input type="checkbox" id="Vegetables" className="hidden" onChange={handleChange} checked={data.category === "Vegetables"}/>
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
