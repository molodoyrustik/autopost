import React from 'react';
import { NavLink } from 'react-router-dom';

const PlanNavigation = () => {
  return (
    <nav className="plan__nav">
      <ul className="plan__nav-list">
        <li className="plan__nav-item">
          <NavLink to="/private/plan/create-post" activeStyle={{borderBottom: '3px solid #ff6868'}} className="plan__nav-link">Планироващик</NavLink>
        </li>
        <li className="plan__nav-item">
          <NavLink to="/private/plan/calendar" activeStyle={{borderBottom: '3px solid #ff6868'}} className="plan__nav-link">Календарь</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default PlanNavigation;
