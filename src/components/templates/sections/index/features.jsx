import React from 'react';

export default (props) => {
  return (
    <div className="features">
        <div className="features__title-wrapper">
          <div className="container">
            <h2 className="features__title">используйте autoposting для планирования публикаций</h2>
            <p className="features__text">Загрузить фотографии без каких-либо ограничений прямо с вашего компьютера , и они будут появляться именно в нужное время , в виду, что вы указали.</p>
          </div>
        </div>

        <div className="features__items-wrapper">
          <div className="container">
            <div className="features__items">
              <ul className="features__list">

                <li className="features__item">
                  <p className="features__item-title">Обработка фотографий</p>
                  <p className="features__item-desc">Для вашего удобства мы сделали фильтры, хэш- теги и календарь для ваших сообщений.</p>
                </li>

                <li className="features__item">
                  <p className="features__item-title">УПРАВЛЕНИЯ НЕСКОЛЬКИМИ  АККАУНТАМИ</p>
                  <p className="features__item-desc">Вы можете отправить свое содержание к 20 счетов в то же время без необходимости повторного входа в систему каждый раз.</p>
                </li>

                <li className="features__item">
                  <p className="features__item-title">БЕЗОПАСНОСТЬ</p>
                  <p className="features__item-desc">Cохранить любой логин или пароль информацию, вы можете быть уверены, ваша учетная запись защищена.</p>
                </li>
              </ul>
            </div>

            <div className="features__img-pos">
              <img src="/images/feaures-img.png" alt="" className="features__img"/>
            </div>
          </div>

        </div>
    </div>
  );
}
