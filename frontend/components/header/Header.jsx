import React from 'react'
import logo from '../../src/assets/images/logo.png';
import {Link, NavLink} from 'react-router-dom';
import userimg from '../../src/assets/images/avatar.png'
import {useState, useEffect} from 'react';

const navLinks = [
  {
    path:'./home',
    display:'Home'
  },
  {
    path:'./doctors',
    display:'Find a Doctor'
  },
  {
    path:'/services',
    display:'Services'
  },
  {
    path:'./contact',
    display:'Contact'
  }
]

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ----------------logo--------------- */}
          <div>
            <img src={logo} style={{height:100, width:150}}/>
          </div>

          {/* ----------------menu--------------- */}
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
            {
                navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? 'text-blue-700 text-[16px] leading-7 font-[600]'
                          : 'text-textColor text-[16px] leading-7 font-[500] '
            } hover:text-primaryColor
      >
        {link.display}
      </NavLink>
    </li>
  ))
}
            </ul>
          </div>
          {/* --------------Nav Right-------------------- */}
          <div className="flex items-center gap-4 mr-4">
            <div>
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full">
                  <img src={userimg} alt="" className="w-full rounded-full" />
                </figure>
              </Link>
            </div>

              <Link to="/login">
                  <button className="bg-blue-500 py-1 px-6 rounded-2xl text-white font-[600] h-[44px] justify-center">Login</button>        
              </Link>

          </div>

        </div>
      </div>
    </header>
  )
}

export default Header