import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div className="registration">
      <div className="container">
        <h2 className="registration__title">Sign up on Onlypult right now and get a whole week of the free  use!</h2>
        <Link to="/login" className="registration-button">Регистрация</Link>
      </div>
    </div>
  );
}
