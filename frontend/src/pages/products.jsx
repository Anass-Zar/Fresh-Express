import Footer from "../components/footer"
import Navbar from "../components/navbar"

const Product = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto w-full px-8 py-16 md:px-16 md:py-24">

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a href="#">
              <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="https://panettamercato.com.au/wp-content/uploads/2021/09/APRICOTS-KG-.jpg" alt="Apricots" className="h-full w-full object-cover object-center hover:opacity-75" />
                <button className="absolute top-[50%] right-[50%]">Buy</button>
              </div>
              <h3 className="my-4 text-2xl text-center text-gray-700">Apricots</h3>
            </a>
            <a href="#">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="https://panettamercato.com.au/wp-content/uploads/2021/07/Bananas-1kg-Panetta-Mercato.jpeg" alt="Bananas" className="h-full w-full object-cover object-center hover:opacity-75" />
              </div>
              <h3 className="my-4 text-2xl text-center text-gray-700">Bananas</h3>
              <button type="button" className="bg-green-600 w-full py-2 px-3 rounded-lg flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6'>
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" fill='#ffffff'/>
                </svg>
              </button>
            </a>
            <a href="#">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="https://panettamercato.com.au/wp-content/uploads/2021/07/Oranges-Navel-Kg-Panetta-Mercato.jpeg" alt="Oranges" className="h-full w-full object-cover object-center hover:opacity-75" />
              </div>
              <h3 className="my-4 text-2xl text-center text-gray-700">Oranges</h3>
              <button type="button" className="bg-green-600 w-full py-2 px-3 rounded-lg flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6'>
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" fill='#ffffff'/>
                </svg>
              </button>
            </a>
            <a href="#">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="https://panettamercato.com.au/wp-content/uploads/2021/07/Raspberries-Premium-Punnet-125g-Panetta-Mercato.png" alt="Raspberries" className="h-full w-full object-cover object-center hover:opacity-75" />
              </div>
              <h3 className="my-4 text-2xl text-center text-gray-700">Raspberries</h3>
              <button type="button" className="bg-green-600 w-full py-2 px-3 rounded-lg flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6'>
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" fill='#ffffff'/>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Product
