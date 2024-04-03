import { useState } from 'react';
import { Link } from 'react-router-dom';
import Fresh_Express from "../images/express.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav>
        <div className="flex justify-between py-3 md:py-4 px-4 md:px-8">
          <Link to="/">
            <div className='flex items-center gap-2 md:gap-4'>
              <img className="w-10 md:w-12" src={Fresh_Express} alt="logo" />
              <h1 className='text-lg md:text-2xl font-bold'>Fresh Express</h1>
            </div>
          </Link>
          <div className="flex items-center">
            <span className='text-xs md:text-sm'>Francais | English</span>
          </div>
        </div>
        <div className="md:px-8 items-center justify-between text-white bg-green-600 md:flex">
          <div className="md:hidden">
            <div className="flex items-center justify-between py-3 px-4 font-medium gap-2">
              <div className='cursor-pointer flex items-center gap-2' onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-5 h-5'>
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" fill='#ffffff'/>
                </svg>             
                <div>Menu</div>
              </div>
              <Link to="/card" className=''>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-5 h-5'>
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" fill='#ffffff'/>
                </svg>
              </Link>
            </div>
          </div>
          <div className={`md:flex md:items-center md:justify-end ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="items-center md:divide-green-400 md:divide-x pb-2 md:pb-0 md:flex text-sm md:text-md font-semibold">
              <Link to='/'><li className="py-3 md:py-4 px-4 bg-green-600 md:bg-transparent hover:bg-green-400">Home</li></Link>
              <Link to='/products'><li className="py-3 md:py-4 px-4 bg-green-600 md:bg-transparent hover:bg-green-400">Products</li></Link>
              <Link to='/about_us'><li className="py-3 md:py-4 px-4 bg-green-600 md:bg-transparent hover:bg-green-400">About Us</li></Link>
              <Link to='/contact_us'><li className="py-3 md:py-4 px-4 bg-green-600 md:bg-transparent hover:bg-green-400">Contact Us</li></Link>
            </ul>
          </div>
          <Link to="/card" className="hidden md:block pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6'>
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" fill='#ffffff'/>
            </svg>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
