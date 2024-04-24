import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Fresh_Express from "../images/express.png";
import { useSelector } from "react-redux";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "English",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "../../public/locale/{{lng}}/translation.json",
    },
  });

const Nav = () => {
    const { list } = useSelector(state => state.cart);
    const { t } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('English'); 

    useEffect(() => {
      const savedLanguage = cookies.get("i18next") || "English";
      setSelectedLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }, []);

    const changeLanguageWithTransition = (language) => {
      setSelectedLanguage(language); 
      i18n.changeLanguage(language); 
      cookies.set("i18next", language);
    };

    console.log(`Selected language is ${selectedLanguage}`);

    let Links =[
      {name: t("navbar.Link1"), link: "/"},
      {name: t("navbar.Link2"), link: "/products"},
      {name: t("navbar.Link3"), link: "/about_us"},
      {name: t("navbar.Link4"), link: "/contact_us"},
    ];
    let [open,setOpen]=useState(false);


    return (
        <div className='shadow-md w-full top-0 left-0'>
          <div className='bg-green-600 text-white py-2 md:px-10 px-6 text-sm hidden md:flex justify-between'>
            <div className='flex gap-2.5'>
              <p className='flex items-center gap-1.5'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-4 h-4'>
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" fill='#FFFFFF'/>
              </svg>
                +212 725-229-486
              </p>
              |
              <p className='flex items-center gap-1.5'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-4 h-4'>
                  <path d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" fill='#FFFFFF'/>
                </svg>
                {t("navbar.Address")}
              </p>
            </div>
            <div className='flex gap-2'>
              <button onClick={() => { changeLanguageWithTransition("English") }}>English</button>
              |
              <button onClick={() => { changeLanguageWithTransition("Francais") }}>Francais</button>
              |
              <button onClick={() => { changeLanguageWithTransition("Arabic") }}>العربية</button>
              |
              <p className='flex items-center gap-2'>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='w-4 h-4'>
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" fill='#FFFFFF'/>
                  </svg>
                </a>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-4 h-4'>
                    <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" fill='#FFFFFF'/>
                  </svg>
                </a>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-4 h-4'>
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill='#FFFFFF'/>
                  </svg>
                </a>
              </p>
            </div>
          </div>
          <div className='md:flex items-center justify-between relative z-[50] bg-white py-4 md:px-10 px-6'>
            <div className='font-bold text-xl cursor-pointer flex items-center justify-between text-gray-800 '>
                <Link to="/"className='flex items-center gap-2 w-38 md:w-48'>
                    <img className="w-8 md:w-9 " src={Fresh_Express} alt="logo" />
                    <p className='text-lg md:text-xl font-bold'>Fresh Express</p>
                </Link> 
                <div className='flex items-center gap-5'>
                    <div className="block md:hidden">
                      <Link to="/checkout">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 h-6">
                          <path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" fill="#000000"/>
                        </svg>
                      </Link>
                      {list?.length > 0 && (
                        <span className="bg-red-500 text-white rounded-full px-1 text-xs absolute top-[9px] right-[58px]">{list.length}</span>
                      )}
                    </div>
                    <button type='button' onClick={()=>setOpen(!open)} className='block md:hidden'>
                        {open ? 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-6 h-6'>
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" fill='#000000'/>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-6 h-6'>
                                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" fill='#000000'/>
                            </svg>
                        }
                    </button>
                </div>
            </div>
            <ul className='hidden md:flex items-center static bg-white z-auto w-auto'>
              {
                Links.map((link)=>(
                  <li key={link.name} className='text md:py-0 py-4 pr-8 text-sm font-semibold'>
                    <Link to={link.link} className='text-gray-800 hover:text-green-500 duration-500'>{link.name}</Link>
                  </li>
                ))
              }
            </ul>
            <ul className={`absolute md:hidden bg-green-500 z-[1] left-0 w-full  ${open ? 'top-16':'-top-[220px]'}`}>
              {
                Links.map((link)=>(
                  <Link key={link.name} to={link.link} className='text-gray-800 duration-100'>
                    <li className='text md:py-0 py-4 pl-8 text-sm font-semibold hover:bg-green-600'>
                      {link.name}
                    </li>
                  </Link>
                ))
              }
            </ul>
            <Link to="/checkout" className="hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 h-6">
                <path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" fill="#000000"/>
              </svg>
              {list?.length > 0 && (
                <span className="bg-red-500 text-white rounded-full px-1 text-xs absolute top-3 right-7">{list.length}</span>
              )}
            </Link>
          </div>
        </div>
    )
}

export default Nav;