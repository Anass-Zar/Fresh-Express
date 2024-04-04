import Footer from "../components/footer"
import Navbar from "../components/navbar"
import "./products.css";

const Product = () => {
  return (
    <div>
      <Navbar />
      <section className="fruit_section">
        <div className="container">
          <div className="heading_container">
            <hr />
            <h1>
              Fresh Fruit
            </h1>
            <hr />
          </div>
        </div>
        <div className="container-fluid">

          <div className="fruit_container">

            <div className="box relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <img src="https://panettamercato.com.au/wp-content/uploads/2021/09/APRICOTS-KG-.jpg" alt="" />
              <div className="product_name">
                <h5>Apricots</h5>
              </div>
              <div className="link_box">
                <h5>APRICOTS</h5>
                <a href="">Buy Now</a>
              </div>
            </div>

            <div className="box relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <img src="https://panettamercato.com.au/wp-content/uploads/2021/07/Bananas-1kg-Panetta-Mercato.jpeg" alt="" />
              <div className="product_name">
                <h5>Bananas</h5>
              </div>
              <div className="link_box">
                <h5>Bananas</h5>
                <a href="">Buy Now</a>
              </div>
            </div>

            
            <div className="box relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <img src="https://panettamercato.com.au/wp-content/uploads/2021/07/Oranges-Navel-Kg-Panetta-Mercato.jpeg" alt="" />
              <div className="link_box">
                <h5>
                  Oranges
                </h5>
                <a href="">
                  Buy Now
                </a>
              </div>
            </div>
            
            <div className="box relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <img src="https://panettamercato.com.au/wp-content/uploads/2021/07/Apples-Pink-Lady-Pkt-1kg-Panetta-Mercato-768x768.jpeg" alt="" />
              <div className="link_box">
                <h5>
                  Apple
                </h5>
                <a href="">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="box relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <img src="https://panettamercato.com.au/wp-content/uploads/2021/07/Raspberries-Premium-Punnet-125g-Panetta-Mercato.png" alt="" />
              <div className="link_box">
                <h5>
                  Raspberries
                </h5>
                <a href="">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="box relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <img src="https://panettamercato.com.au/wp-content/uploads/2021/07/Strawberries-Premium-Punnet-250g-Panetta-Mercato-768x768.jpeg" alt="" />
              <div className="link_box">
                <h5>
                  Strawberry
                </h5>
                <a href="">
                  Buy Now
                </a>
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
