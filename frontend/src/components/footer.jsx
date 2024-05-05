/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Fresh_Express from "../images/express.png";
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

const Footer = () => {
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
  return (
    <div className="mx-auto w-full">
      <div className="pt-10 px-6 md:px-10 grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2">
            <Link to="/"className='flex items-center gap-2 md:gap-4 w-44 md:w-56'>
                <img className="w-10 md:w-12 " src={Fresh_Express} alt="logo" />
                <h1 className='text-lg md:text-2xl font-bold'>Fresh Express</h1>
            </Link> 
          <div className="mt-6 lg:max-w-xl">
            <h2 className="text-md text-gray-800">
            At Fresh Express we are passionate about delivering the freshest and most delicious fruits and vegetables directly to your doorstep. Our mission is to make it easy and convenient for you to enjoy the goodness of nature's bounty.
            </h2>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="mb-4 text-lg font-bold tracking-wide text-gray-900">{t("footer.T1")}</p>
          <div className="flex">
            <p className="mr-1 text-gray-800">{t("footer.T_Phone")} :</p>
            <a href="tel:0722029078" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">+212 674-645-102</a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">{t("footer.T_Email")} :</p>
            <a href="mailto:anasszarioh10.mail" aria-label="Our email" title="Our email" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">freshexpress@gmail.com</a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">{t("footer.T_Address")} :</p>
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
              {t("footer.Address")}
            </a>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-lg font-bold tracking-wide text-gray-900">{t("footer.T2")}</p>
          <div className='grid justify-items-start gap-2 mb-6'>
            <button className="mr-1 text-gray-800" onClick={() => { changeLanguageWithTransition("English") }}>English</button>
            <button className="mr-1 text-gray-800" onClick={() => { changeLanguageWithTransition("Francais") }}>Francais</button>
            <button className="mr-1 text-gray-800" onClick={() => { changeLanguageWithTransition("Arabic") }}>العربية</button>
          </div>
        </div>
        <div className="text-sm">
          <span className="text-lg font-bold tracking-wide text-gray-900">{t("footer.T3")}</span>
          <div className="flex items-center space-x-3 mt-6">
            <a href="/" className="text-gray-500 hover:text-cyan-500">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path
                  d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                ></path>
              </svg>
            </a>
            <a href="/" className="text-gray-500 hover:text-pink-600">
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-7">
                <circle cx="15" cy="15" r="4"></circle>
                <path
                  d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                ></path>
              </svg>
            </a>
            <a href="/" className="text-gray-500 hover:text-blue-700">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path
                  d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-10 flex flex-col-reverse justify-between py-6 md:py-8 border-t lg:flex-row bg-green-600">

        <p className="text-sm text-white">
        © 2024 Fresh Express™. All Rights Reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <p className="text-sm  text-white transition-colors duration-300 hover:text-deep-purple-accent-400">F.A.Q</p>
          </li>
          <li>
            <p className="text-sm  text-white transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</p>
          </li>
          <li>
            <p className="text-sm  text-white transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer