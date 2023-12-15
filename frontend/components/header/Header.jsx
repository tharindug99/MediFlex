import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import logo from '../../src/assets/images/logo.png';
import userimg from '../../src/assets/images/avatar.png';


const navLinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/doctors',
    display: 'Find a Doctor',
  },
  {
    path: '/services',
    display: 'Services',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
];

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <header className={`header ${menuVisible ? 'menu-open' : ''}`} ref={headerRef}>
      <div className="container bg-gradient-to-r from-indigo-400 to-cyan-400">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} style={{ height: 100, width: 150 }} alt="Logo" />
          </div>

          {/* Navigation Menu */}
          <div className={`navigation ${menuVisible ? 'show__menu' : ''}`} ref={menuRef}>
            <ul className = "menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? 'text-blue-900 text-[16px] leading-7 font-[600]'
                        : 'text-gray-600 text-[16px] leading-7 font-[500]'
                    }
                    onClick={() => setMenuVisible(false)}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Right */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full">
                  <img src={userimg} alt="" className="w-full rounded-full" />
                </figure>
              </Link>
            </div>

            {/* Login Button */}
            <Link to="/login">
              <button className="bg-blue-500 py-1 px-6 mr-8 rounded-2xl text-white font-[600] h-[44px]">
                Login
              </button>
            </Link>

            {/* Mobile Menu Icon */}
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
