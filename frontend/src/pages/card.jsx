import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Card = () => {
  return (
    <div>
      <Navbar />
      {/* <div className="mt-28 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div className="bg-green-400 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="address">Address / Street</label>
                    <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="country">Country / region</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                      <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="state">State / province</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                      <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="zipcode">Zipcode</label>
                    <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
                  </div>

                  <div className="md:col-span-5">
                    <div className="inline-flex items-center">
                      <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                      <label htmlFor="billing_same" className="ml-2">My billing address is different than above.</label>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="soda">How many soda pops?</label>
                    <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <input name="soda" id="soda" placeholder="0" className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent" value="0" />
                      <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 fill-current" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="mt-28 mb-14">

        <div className="flex flex-col md:flex-row gap-8 md:gap-4 py-4 px-6 md:px-12 lg:px-24">
          <div className="md:w-1/2">
            <h2 className="text-lg font-semibold mb-4">BILLING DETAILS</h2>
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4">
              <div className="md:col-span-4">
                <label htmlFor="full_name">Full Name</label>
                <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:border-green-500 focus:bg-white"  />
              </div>

              <div className="md:col-span-4">
                <label htmlFor="email">Email Address</label>
                <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:border-green-500 focus:bg-white" value="" placeholder="email@domain.com" />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="address">Phone</label>
                <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:border-green-500 focus:bg-white" value="" placeholder="" />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="city">Country</label>
                <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:border-green-500 focus:bg-white" value="" placeholder="" />
              </div>

            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-lg font-semibold mb-4">BILLING DETAILS</h2>
            <div className="grid gap-4 gap-y-2 text-sm">
              <div className="">
                <label htmlFor="city">City</label>
                <textarea name="" id="" cols="30" rows="10"  className="h-10 border mt-1 rounded px-4 py-2.5 w-full bg-gray-50 focus:outline-none focus:border-green-500 focus:bg-white"></textarea>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-green-500 w-4/5 mx-auto" />

        <div className="flex flex-col md:flex-row gap-4 md:gap-10 py-4 px-6 md:px-12 lg:px-24">
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
                  <tr className="">
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
                  <tr className="">
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
            <div className="bg-white rounded-lg py-3">
              <h2 className="text-lg font-semibold mb-8">SEND QUERY</h2>
              <p className="font-semibold mb-4">Let us know what you want</p>
              <button className="w-full bg-green-600 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg">Checkout</button>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Card;
