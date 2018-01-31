import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import User from '../user';

const Header = (props) => {
  let tmpl = <div>
    <nav className="header__navigation">
      <ul className="header__list">
        <li className="header__item">
          <Link to='#' className="header__link">Возможности</Link>
        </li>
        <li className="header__item">
          <Link to='#' className="header__link">План подписки</Link>
        </li>
      </ul>
    </nav>

    <Link to='/login' className="button-signin">Вход</Link></div>
  if(props.auth) {
    tmpl = <User />
  }
  return (
    <header className='header '>
      <div className='container clearfix'>
        <div className='header__logo'>
          <Link to='/' className='header__logo-link'>
            <img src="/images/header-logo.png" alt="" className="header__logo-img"/>
          </Link>
        </div>

        <div className="header__right">
         {tmpl}
        </div>


      </div>
    </header>
  )
}

export default connect((state) => {
  return {
    auth: state.auth.authenticated
  }
}, {})(Header);
