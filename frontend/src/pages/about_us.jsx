import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { Link } from "react-router-dom"
import vfImage from "../images/vf.jpg";

const About_US = () => {

  return (
    <div>
      <Navbar />
      <div>

        <div className="w-full h-40 md:h-52 text-center grid items-center content-center font-[Dosis] uppercase" style={{ backgroundImage: `url(${vfImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="w-full h-40 md:h-52 py-16 text-center grid items-center content-center bg-[#16A34Add]">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-50 text-center">ABOUT US</h1>
            <h1 className="md:text-lg font-semibold text-gray-50 mt-3 flex justify-center gap-2">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              &gt;
              <Link to="/about_us" className="hover:underline">
                About Us
              </Link>
            </h1>
          </div>
        </div>

        <div className="block px-6 pb-10 pt-8 md:pb-20 md:py-16 md:px-10 ">

          <div className="mx-auto max-w-5xl text-center">
            <h2
              className="block w-full text-gray-900 font-bold text-3xl sm:text-4xl">
              Bringing Freshness to Your Doorstep
            </h2>
            <p
              className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-700">
              At Fruits & Website, we are passionate about delivering the freshest and most delicious fruits directly to your
              doorstep. Our mission is to make it easy and convenient for you to enjoy the goodness of natures bounty.
            </p>
          </div>

          <div className="mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md border border-green-600 p-8 text-center shadow">
              <div className="bg-green-500 button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6">
                  <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" fill="#FFFFFF"/>
                </svg>
              </div>
              <h3 className="mt-6 font-semibold text-lg">Our Commitment to Quality</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide">We source our fruits from the
                finest farms and ensure that only the best produce reaches your table. Quality is our top priority, and we
                guarantee freshness with every delivery.
              </p>
            </div>

            <div className="rounded-md border border-green-600 p-8 text-center shadow">
              <div className="bg-green-500 button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 h-6">
                <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z" fill="#FFFFFF"/>
              </svg>
              </div>
              <h3 className="mt-6 font-semibold text-lg">Our Story</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide">Fruits & Website was founded
                with a simple idea: to make fresh, high-quality fruits accessible to everyone. Since then, we have grown
                into a trusted name in the industry, known for our commitment to excellence and customer satisfaction.
              </p>
            </div>

            <div className="rounded-md border border-green-600  p-8 text-center shadow">
              <div className="bg-green-500 button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                  <path d="M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z" fill="#FFFFFF"/>
                </svg>
              </div>
              <h3 className="mt-6 font-semibold text-lg">Our Vision</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide">
                Our vision is to become the go-to destination for fresh, high-quality fruits. We strive to create a
                seamless shopping experience for our customers, providing them with the freshest produce and the best
                customer service.
              </p>
            </div>
          </div>

        </div>

      </div>
      <Footer />
    </div>
  )
}

export default About_US