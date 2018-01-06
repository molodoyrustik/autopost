import React from 'react';


export default (props) => {
  return (
    <div className="rates">
      <div className="container">
        <h2 className="rates__title">Возможные пакеты</h2>
        <ul className="rates__list">
          <li className="rates__item">
            <a href="#" className="rates__link">
              <p className="rates__item-title">Пакет номер</p>
              <p className='rates__item-price'>$29</p>
              <p className='rates__item-time'>В месяц</p>
              <p className="rates__item-desc">Lorem ipsum lorem ipsum</p>
              <a href="#" className="try-button">Try</a>
            </a>
          </li>
          <li className="rates__item">
            <a href="#" className="rates__link">
              <p className="rates__item-title">Пакет номер</p>
              <p className='rates__item-price'>$59</p>
              <p className='rates__item-time'>В месяц</p>
              <p className="rates__item-desc">Lorem ipsum lorem ipsum</p>
              <a href="#" className="try-button">Try</a>
            </a>
          </li>
          <li className="rates__item">
            <a href="#" className="rates__link">
              <p className="rates__item-title">Пакет номер</p>
              <p className='rates__item-price'>$59</p>
              <p className='rates__item-time'>В месяц</p>
              <p className="rates__item-desc">Lorem ipsum lorem ipsum</p>
              <a href="#" className="try-button">Try</a>
            </a>
          </li>
          <li className="rates__item">
            <a href="#" className="rates__link">
              <p className="rates__item-title">Пакет номер</p>
              <p className='rates__item-price'>$159</p>
              <p className='rates__item-time'>В месяц</p>
              <p className="rates__item-desc">Lorem ipsum lorem ipsum</p>
              <a href="#" className="try-button">Try</a>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
