import { useState } from 'react';
import { Link } from 'react-router-dom';
import Fresh_Express from "../images/express.png"
import { Dropdown, ButtonGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  const options = [
    {
      value: "English",
      label: (
        <img src="https://www.worldometers.info/img/flags/us-flag.gif" width="20" alt="" />
      )
    },
    {
      value: "French",
      label: (
        <img src="https://www.worldometers.info/img/flags/fr-flag.gif" width="20" alt="" />
      )
    },
    {
      value: "Arabic",
      label: (
        <img src="https://www.worldometers.info/img/flags/sa-flag.gif" width="20" alt="" />
      )
    }
  ];
  const [lang, setLang] = useState("English");

  const [langLabel, setLangLabel] = useState(options[0].label);

  function handlclick(n) {
    setLangLabel(options[n].label);
    setLang(options[n].value);
  }

  return (
    <div>
      <nav className="bg-green-500 fixed w-full z-20 top-0 start-0 border-b border-gray-200 h-20">
        <div className="flex flex-wrap items-center justify-between mx-1 p-3">
          <Link to="/">
          <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img className="w-10 md:w-12" src={Fresh_Express} alt="logo" />
            <span className="self-center text-2xl font-bold whitespace-nowrap">Fresh Express</span>
          </a>
          </Link>

          <div className="flex justify-center w-full md:hidden">
            <button onClick={toggleMenu} type="button" className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className={`items-center justify-between w-full md:flex md:w-auto ${showMenu ? 'flex' : 'hidden'}`} id="navbar-sticky">
            <ul className="flex w-full flex-col md:flex-row text-center	 md:items-center md:justify-center md:space-x-8 md:mt-0">
              <Link to="/">
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-white md:p-0 " aria-current="page">Home</a>
                </li>
              </Link>

              <Link to="/products">
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-white md:p-0">Products</a>
                </li>
              </Link>

              <Link to="/about_us">
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-white md:p-0">About</a>
              </li>
              </Link>

              <Link to="/contact_us">
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-white md:p-0">Contact</a>
              </li>
              </Link>

            </ul>
          </div>

          <div className="w-28 flex justify-center md:order-3">
          <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle
          className=" bg-transparent btn-outline-secondary border-0 "
          id="lng-dropdown"
        >
          {langLabel}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handlclick(0)} className='flex justify-evenly'>
            <img src="https://www.worldometers.info/img/flags/us-flag.gif" width="20" alt="" /> {options[0].value}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handlclick(1)} className='flex justify-evenly'>
            <img src="https://www.worldometers.info/img/flags/fr-flag.gif" width="20" alt="" /> {options[1].value}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handlclick(2)} className='flex justify-evenly'>
            <img src="https://www.worldometers.info/img/flags/sa-flag.gif" width="20" alt="" /> {options[2].value}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <span>{lang}</span>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar;
