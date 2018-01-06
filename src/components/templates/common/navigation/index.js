import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink to="/cabinet" activeStyle={{borderTop: '3px solid #ff6868'}} className="navigation__link">Постинг</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/plan"activeStyle={{borderTop: '3px solid #ff6868'}} className="navigation__link">Планирование</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/settings" activeStyle={{borderTop: '3px solid #ff6868'}} className="navigation__link">Настройка</NavLink>
          </li>
      </ul>
    </nav>
  )
}

export default Navigation;
