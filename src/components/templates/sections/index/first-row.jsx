import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div className="first-row">
      <div className="container">
        <div className="first-row__title-wrapper">
          <h1 className="first-row__title">The best SMM-tool for Instagram</h1>
          <p className="first-row__second-title">Posts from the web and schedule</p>
        </div>

        <div className="start-button-pos">
          <Link to="/login" className="button-start">Начать бесплатно</Link>
        </div>
      </div>
    </div>
  );
}
