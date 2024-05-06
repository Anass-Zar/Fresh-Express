import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import vfImage from "../images/vf.jpg";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
// import { useTranslation } from "react-i18next";


const Contact_Us = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [message, setMessage] = useState('');
    // const { t } = useTranslation();

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      if (userName === '' || userEmail === '' || message === '') {
        toast.error('Please Fill In All Fields');
      } else {
        emailjs
          .sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current, {
            publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
          })
        .then(
          () => {
            console.log('SUCCESS!');
            toast.success('Message Sent Successfully');
            setUserName("")
            setUserEmail("")
            setMessage("")
          },
          (error) => {
            console.log('FAILED...', error.text);
            toast.error('message not sent');
          },
        );
    }
  }
  return (
    <div>
      <Navbar />
        <div className="w-full h-40 md:h-52 text-center grid items-center content-center font-[Dosis] uppercase" style={{ backgroundImage: `url(${vfImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="w-full h-40 md:h-52 py-16 text-center grid items-center content-center bg-[#16A34Add]">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-50 text-center">Contact US</h1>
            {/* <h1 className="text-3xl md:text-5xl font-bold text-gray-50 text-center">{t("contact_us.Title")}</h1> */}
            <h1 className="md:text-lg font-semibold text-gray-50 mt-3 flex justify-center gap-2">
              <Link to="/" className="hover:underline">
                Fresh Express
              </Link>
              &gt;
              <Link to="/contact_us" className="hover:underline">
                Contact us
                {/* {t("contact_us.Link")} */}
              </Link>
            </h1>
          </div>
        </div>

        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 pt-14 md:pt-20 pb-10 lg:px-20 xl:px-32'>
          <div className='grid justify-items-center gap-1 md:gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-10 h-10 md:w-12 md:h-12'>
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" fill='#16A34A'/>
            </svg>
            <h1 className='text-2xl font-semibold'>Our Phone</h1>
            {/* <h1 className='text-2xl font-semibold'>{t("contact_us.T1")}</h1> */}
            <p className='text-lg text-gray-700'>+212 674-645-102</p>
          </div>
          <div className='grid justify-items-center gap-1 md:gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-10 h-10 md:w-12 md:h-12'>
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" fill='#16A34A'/>
            </svg>
            <h1 className='text-2xl font-semibold'>Our Email</h1>
            {/* <h1 className='text-2xl font-semibold'>{t("contact_us.T2")}</h1> */}
            <p className='text-lg text-gray-700'>freshexpress@gmail.com</p>
          </div>
          <div className='grid justify-items-center gap-1 md:gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-10 h-10 md:w-12 md:h-12'>
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" fill='#16A34A'/>
            </svg>
            <h1 className='text-2xl font-semibold'>Our Address</h1>
            {/* <h1 className='text-2xl font-semibold'>{t("contact_us.T3")}</h1> */}
            <p className='text-lg text-gray-700 text-center'>Hay Mohammady, Agadir</p>
            {/* <p className='text-lg text-gray-700 text-center'>{t("contact_us.Address")}</p> */}
          </div>
        </div>

        <div className="bg-white">
          <div className="w-full mx-auto">
            <div className="bg-white rounded-lg px-6 py-10 md:px-10 md:py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <form ref={form} onSubmit={sendEmail} className="grid gap-4">
                  <div className="">
                    <label htmlFor="userName" className="font-semibold">Full Name</label>
                    {/* <label htmlFor="userName" className="font-semibold">{t("contact_us.I1")}</label> */}
                    <input type="text" name="userName" id="userName" value={userName}
                      onChange={(e) => setUserName(e.target.value)} className="h-10 border mt-1 rounded px-3 w-full border-gray-300 bg-white focus:outline-none focus:border-green-500 focus:bg-white" placeholder="Full Name" />
                  </div>
                  <div className="">
                    <label htmlFor="userEmail" className="font-semibold">Email</label>
                    {/* <label htmlFor="userEmail" className="font-semibold">{t("contact_us.I2")}</label> */}
                    <input type="text" name="userEmail" id="userEmail" value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)} className="h-10 border mt-1 rounded px-3 w-full border-gray-300 bg-white focus:outline-none focus:border-green-500 focus:bg-white" placeholder="Email" />
                  </div>
                  <div className="">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    {/* <label htmlFor="message" className="font-semibold">{t("contact_us.I3")}</label> */}
                    <textarea name="message" id="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)}
                    placeholder='Message' className="h-32 border mt-1 rounded px-3 w-full border-gray-300 bg-white focus:outline-none focus:border-green-500 focus:bg-white" />
                    {/* placeholder={`${t("contact_us.I3")}`} className="h-32 border mt-1 rounded px-3 w-full border-gray-300 bg-white focus:outline-none focus:border-green-500 focus:bg-white" /> */}
                  </div>
                  <button className="w-full bg-green-600 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg" type="submit">Submit</button>
                  {/* <button className="w-full bg-green-600 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg" type="submit">{`${t("contact_us.B")}`}</button> */}
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

      <Footer />
    </div>
  );
}

export default Contact_Us;
