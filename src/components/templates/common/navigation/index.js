import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink to="/private/cabinet" activeStyle={{borderTop: '3px solid #ff6868'}} className="navigation__link">Постинг</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/private/plan"activeStyle={{borderTop: '3px solid #ff6868'}} className="navigation__link">Планирование</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/private/settings" activeStyle={{borderTop: '3px solid #ff6868'}} className="navigation__link">Настройка</NavLink>
          </li>
      </ul>
    </nav>
  )
}

export default Navigation;
