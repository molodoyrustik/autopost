import React from 'react';
import { NavLink } from 'react-router-dom'

const Header =  () => {
  return (
    <header className='header '>
      <div className='container clearfix'>
        <div className='header__logo'>
          <a href='#' className='header__logo-link'>
            <img src="images/header-logo.png" alt="" className="header__logo-img"/>
          </a>
        </div>

        <div className="header__right">
          <nav className="header__navigation">
            <ul className="header__list">
              <li className="header__item">
                <a href="#" className="header__link">Возможности</a>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">План подписки</a>
              </li>
            </ul>
          </nav>

          <NavLink to='/login' className="button-signin">Вход</NavLink>
        </div>


      </div>
    </header>
  )
}

export default Header;
