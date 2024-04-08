import { useState } from 'react'
import { Link } from 'react-router-dom';
import Fresh_Express from "../images/express.png"

const Nav = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"PRODUCTS",link:"/products"},
      {name:"ABOUT US",link:"/about_us"},
      {name:"CONTACT US",link:"/contact_us"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='border-b w-full fixed top-0 left-0'>
      <div className='bg-zinc-900 text-white py-2 px-1 xl:px-20 text-sm hidden md:flex justify-between'>
        <div className='flex gap-4'>
          <p>+212 725-229-486</p>
          <p>Hay Mohammady, Agadir</p>
        </div>
        <div className='flex gap-4'>
          <p>عربية | English | Francais</p>
          <p>Social Media</p>
        </div>
      </div>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-6'>

        <div className='font-bold text-xl cursor-pointer flex items-center justify-between text-gray-800'>
          <Link to="/"className='flex items-center gap-2 w-38 md:w-48'>
            <img className="w-8 md:w-9 " src={Fresh_Express} alt="logo" />
            <p className='text-lg md:text-xl font-bold'>Fresh Express</p>
          </Link> 
          <div className='flex items-center gap-4'>
            <Link to="/card" className='block md:hidden'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6'>
                <path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" fill='#000000'/>
              </svg>
            </Link>
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
              <li key={link.name} className='text md:py-0 py-4 pl-8 text-sm font-semibold'>
                <Link to={link.link} className='text-gray-800 hover:text-green-500 duration-500'>{link.name}</Link>
              </li>
            ))
          }
        </ul>
        <ul className={`absolute md:hidden bg-green-300 z-[-1] left-0 w-full transition-all duration-500 ease-in ${open ? 'top-[64px] ':'top-[-200px]'}`}>
          {
            Links.map((link)=>(
              <Link key={link.name} to={link.link} className='text-gray-800 hover:text-white duration-100'>
                <li className='text md:py-0 py-4 pl-8 text-sm font-semibold hover:bg-green-400'>
                  {link.name}
                </li>
              </Link>
            ))
          }
        </ul>

        <Link to="/card" className='hidden md:block'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6'>
            <path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" fill='#000000'/>
          </svg>
        </Link>

      </div>
    </div>
  )
}

export default Nav