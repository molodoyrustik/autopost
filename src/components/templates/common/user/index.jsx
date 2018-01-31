import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../../../actions'

const User = (props) => {
  const email = props.email;
  const logout = props.logout;
  return (
    <div className="user">

      <Link to='#' className="user__wrapper">
          <div className="user__data">
            <h3 className="user__title">{email}</h3>
            <p className="user__price-data">Оплачено до 25.03.2015</p>
          </div>
          <div className="user__avatar-wrapper">
            <img src="/images/cabinet/avatar.png" alt="" className="user__avatar"/>
          </div>
      </Link>

      <nav className="header-menu">
        <ul className="header-menu__dropdown">
          <li className="header-menu__item">
            <Link to="/settings" className="header-menu__link">Настройки</Link>
          </li>
          <li className="header-menu__item">
            <a onClick={ () => ( logout() )} to="" className="header-menu__link">Выход</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}


export default connect((state) => {
  return {
    email: state.user.email
  }
}, { logout })(User);
