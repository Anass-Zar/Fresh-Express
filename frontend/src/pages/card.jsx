import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import vfImage from "../images/vf.jpg";

const Card = () => {
  const [formData, setFormData] = useState({});
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        // Sort the countries by name
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
      const response = await fetch("http://localhost:3000/api/requests/add_requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Request sent successfully");
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
                    <option className="bg-red-500" key={country.name.common} value={country.name.common}>
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
              <table className="w-full">
                <thead>
                  <tr className="">
                    <th className="text-left font-semibold text-lg">Product</th>
                    <th className="font-semibold text-center text-lg">Quantity <span className="text-xs">( by Ton )</span></th>
                    <th className="font-semibold text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-green-500">
                    <td className="py-1">
                      <div className="flex items-center">
                        <img className="h-14 md:h-20 w-14 md:w-20 mr-4" src="https://firebasestorage.googleapis.com/v0/b/fresh-express-fdc6e.appspot.com/o/1712333468879Avocado-Hass-Each-Panetta-Mercato-768x768.jpeg?alt=media&token=faa612e7-47fe-4de7-8aa5-5b99c1ef662b" alt="Product image" />
                        <span className="font-semibold text-sm md:text-md">Product name</span>
                      </div>
                    </td>
                    <td className="py-5 flex justify-center">
                      <div className="flex items-center">
                        <button className="border rounded-md py-1 md:py-2 px-3 md:px-4 mr-1.5 md:mr-2">-</button>
                        <span className="text-center w-4 md:w-8">1</span>
                        <button className="border rounded-md py-1 md:py-2 px-3 md:px-4 ml-1.5 md:ml-2">+</button>
                      </div>
                    </td>
                    <td className="">
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 md:w-5 h-4 md:h-5">
                          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" fill="red"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-green-500">
                    <td className="py-1">
                      <div className="flex items-center">
                        <img className="h-14 md:h-20 w-14 md:w-20 mr-4" src="https://firebasestorage.googleapis.com/v0/b/fresh-express-fdc6e.appspot.com/o/1712333479348Pears-Packham-Kg-Panetta-Mercato-768x768.jpeg?alt=media&token=bbaf0094-9599-4154-99f5-9117d05bb613" alt="Product image" />
                        <span className="font-semibold text-sm md:text-md">Product name</span>
                      </div>
                    </td>
                    <td className="py-5 flex justify-center">
                      <div className="flex items-center">
                        <button className="border rounded-md py-1 md:py-2 px-3 md:px-4 mr-1.5 md:mr-2">-</button>
                        <span className="text-center w-4 md:w-8">1</span>
                        <button className="border rounded-md py-1 md:py-2 px-3 md:px-4 ml-1.5 md:ml-2">+</button>
                      </div>
                    </td>
                    <td className="">
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 md:w-5 h-4 md:h-5">
                          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" fill="red"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
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

export default Card;
