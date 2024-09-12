import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const menuGoto = (link: string) => {
    setMobileMenu(!mobileMenu);
    navigate(link)
  }
  
  return (
    <header className='fixed w-full'>
      <div className="flex items-center gap-5 justify-between bg-white py-3 px-6">
        <figure className="w-[150px]">
          <Link to="/" className="block">
            <img src="/images/logo2.jpeg" alt="header logo" />
          </Link>
        </figure>
        <nav className='hidden md:block'>
          <ul className="flex items-center gap-4">
            <li className="text-main text-xl header-btn">
              <Link to="/about">About</Link>
            </li>
            <li className="text-main text-xl header-btn">
              <Link to="/tours">Tours</Link>
            </li>
            <li className="text-main text-xl header-btn">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <button type='button' className='text-main text-2xl header-btn hidden md:block'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button type='button' className='text-main text-2xl header-btn md:hidden'
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={'fixed bg-[#3a3a3a66] w-full h-full bottom-0 top-0 -right-full transition-all duration-300' + (mobileMenu? ' !right-0': '')}>
          <nav className='bg-white max-w-xs ml-auto h-full pt-8'>
            <div className='flex mb-6'>
              <figure className="w-[100px] ml-6">
                <Link to="/" className="block">
                  <img src="/images/logo2.jpeg" alt="header logo" />
                </Link>
              </figure>
              <button type='button' className='text-main text-2xl header-btn block ml-auto mr-6'
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            <ul className='flex flex-col items-center gap-5 pt-3 border-t border-main'>
              <li className="text-main text-xl header-btn cursor-pointer">
                <span onClick={() => menuGoto('/about')}>About</span>
              </li>
              <li className="text-main text-xl header-btn cursor-pointer">
                <span onClick={() => menuGoto('/tours')}>Tours</span>
              </li>
              <li className="text-main text-xl header-btn cursor-pointer">
                <span onClick={() => menuGoto('/contact')}>Contact Us</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;