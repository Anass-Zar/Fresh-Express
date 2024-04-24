import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import vfImage from "../images/vf.jpg";
import { useSelector } from "react-redux"
import Cart from "../components/cart";


const Checkout = () => {
  const [formData, setFormData] = useState({});
  const [countries, setCountries] = useState([]);
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(sortedCountries);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);
    
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...formData,
        order: cart.list.map(item => ({ image: item.image, title: item.title, quantity: item.quantity })),
      };
      const response = await fetch("http://localhost:3000/api/requests/add_requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      if (response.ok) {
        console.log("Request sent successfully");
        localStorage.removeItem("persist:cart");
        window.location.reload();
      } else {
        console.error("Failed to send request");
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };
  
  

  return (
    <div>
      <Navbar />
      <div className="w-full h-40 md:h-52 text-center grid items-center content-center font-[Dosis] uppercase" style={{ backgroundImage: `url(${vfImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="w-full h-40 md:h-52 py-16 text-center grid items-center content-center bg-[#16A34Add]">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-50 text-center">CHECKOUT</h1>
          <h1 className="md:text-lg font-semibold text-gray-50 mt-3 flex justify-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            &gt;
            <Link to="/checkout" className="hover:underline">
              Checkout
            </Link>
          </h1>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="my-8">
        <div className="mt-6 mb-10 flex flex-col md:flex-row gap-10 py-4 px-6 md:px-12 lg:px-24">
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">BILLING DETAILS</h2>
            <div className="grid gap-x-6 gap-y-4 text-sm grid-cols-1 md:grid-cols-4">
              <div className="md:col-span-4">
                <label htmlFor="fullName" className="font-semibold">Full Name</label>
                <input type="text" name="fullName" id="fullName" onChange={handleChange} className="h-10 border mt-1 rounded px-3 w-full border-gray-300 bg-white focus:outline-none focus:border-green-500 focus:bg-white" placeholder="Full Name" />
              </div>

              <div className="md:col-span-4">
                <label htmlFor="email" className="font-semibold">Email Address</label>
                <input type="text" name="email" id="email" onChange={handleChange} className="h-10 border mt-1 rounded px-3 w-full border-gray-300 bg-white focus:outline-none focus:border-green-500 focus:bg-white" placeholder="email@domain.com" />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="phone" className="font-semibold">Phone</label>
                <input type="text" name="phone" id="phone" onChange={handleChange} className="h-10 border mt-1 rounded px-3 w-full border-gray-300 bg-white focus:outline-none focus:border-green-500 focus:bg-white" placeholder="Your Phone Number" />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="country" className="font-semibold">Country</label>
                <select name="country" id="country" onChange={handleChange} className="h-10 border mt-1 rounded px-3 w-full border-gray-300 bg-white focus:outline-none focus:border-green-500 focus:bg-white">
                  <option value=""></option>
                  {countries.map(country => (
                    <option className="" key={country} value={country.name.common}>
                      {country.name.common}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">ADDITIONAL INFORMATION</h2>
            <div className="grid gap-4 gap-y-2 text-sm">
              <div className="">
                <label htmlFor="message" className="font-semibold">Message</label>
                <textarea name="message" id="message" onChange={handleChange} cols="30" rows="10"  className="h-[200px] border mt-1 rounded px-3 py-2.5 w-full border-gray-300 bg-white focus:outline-none focus:border-green-500 focus:bg-white"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-6 flex flex-col md:flex-row gap-16 md:gap-12 py-4 px-6 md:px-12 lg:px-24">
          <div className="md:w-2/3">
            <div className="bg-white rounded-lg py-3">
              {cart?.list.length >= 1 ? 
              (
                <table className="w-full">
                  <thead>
                    <tr className="">
                      <th className="text-left font-semibold text-lg">Product</th>
                      <th className="font-semibold text-center text-lg">Quantity <span className="text-xs">( by Ton )</span></th>
                      <th className="font-semibold text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    cart?.list.map(product => {
                        return (
                          <Cart key={product?.id} product={product} />
                        )
                    })
                  }
                  </tbody>
                </table>
              )
              : 
              (
                <div className="w-full">
                  <h1 className="text-center">There is no product in cart</h1>
                </div>
              ) 
              }
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="bg-white border rounded-lg p-5 border-green-500">
              <h2 className="text-xl font-semibold mb-6">SEND QUERY</h2>
              <p className="font-semibold mb-6">Let us know what you want</p>
              <button type="submit" className="w-full bg-green-600 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg">Checkout</button>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Checkout;
