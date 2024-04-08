import Footer from '../components/footer';
import Navbar from '../components/navbar';

const Contact_Us = () => {
  return (
    <div>
      <Navbar />
        <div className="bg-white pt-20 mx-auto max-w-5xl text-center">
          <span className="text-black my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Contact Us
          </span>
          <h2
            className="block w-full bg-gradient-to-b from-black to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Get in touch
          </h2>
        </div>

        <div className="bg-white py-5">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg p-5">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <form action="" className="p-4 rounded border">
                  <input type="text" className="w-full form-input border-[gray] border-solid border-[1px] p-4 rounded-md py-3 mb-4" placeholder="Your Name" />
                  <input type="email" className="w-full form-input border-[gray] border-solid border-[1px] p-4 rounded-md py-3 mb-4 " placeholder="Enter Your Email" />
                  <textarea className="w-full form-textarea border-[gray] border-solid border-[1px] p-4 rounded-md mb-4" rows="5" placeholder="Your Message"></textarea>
                  <button className="w-full btn border border-gray-300 rounded-md py-3 bg-white text-primary hover:bg-green-400 font-bold" type="submit">Submit</button>
                </form>
                <div>
                  <div className="h-96 rounded overflow-hidden">
                    <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15445.871622058152!2d-9.564068398613035!3d30.431090747727794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b616b7f0c3d1%3A0x8eb5ace4ec157f19!2sCit%C3%A9%20Al%20Mohammadi%2C%20Agadir%2080000!5e0!3m2!1sen!2sma!4v1712239891910!5m2!1sen!2sma" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map"></iframe>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <hr/>


      <Footer />
    </div>
  );
}

export default Contact_Us;
