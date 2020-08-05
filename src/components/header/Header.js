/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import logo from '../../assets/cinema-logo.svg';
import './Header.scss';

const HEADER_MENU_LIST = [
  {
    id: 1,
    iconClass: 'fas fa-film',
    name: 'Now Playing',
    type: 'now-playing'
  },
  {
    id: 2,
    iconClass: 'fas fa-fire',
    name: 'Popular',
    type: 'popular'
  },
  {
    id: 3,
    iconClass: 'fas fa-star',
    name: 'Top Rated',
    type: 'top-rated'
  },
  {
    id: 4,
    iconClass: 'fas fa-plus-square',
    name: 'Upcoming',
    type: 'upcoming'
  }
];

const Header = () => {
  let [menuClass, setMenuClass] = useState(false);
  let [navClass, setNavClass] = useState(false);

  const toggleMenu = () => {
    menuClass = !menuClass;
    navClass = !navClass;
    setMenuClass(menuClass);
    setNavClass(navClass);
    if (navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
  };

  return (
    <>
      <div className ="header-nav-wrapper">
        <div className = "header-bar"></div>
        <div className ="header-navbar">
          <div className="header-image">
            <img src={logo} alt="" />
            Cinema App
          </div>
          <div
            className={`${menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'}`}
            id="header-mobile-menu"
            onClick={() => toggleMenu()} >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
