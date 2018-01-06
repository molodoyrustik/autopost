import React from 'react';

const Accounts =  (props) => {
  return (
    <div className="accounts">
      <aside className="accounts__sidebar">
        <a href="#" className="accounts__add-btn">Добавить аккаунт</a>

        <ul className="accounts-list">
          <li className="accounts__item">
            <a href="#" className="accounts__link">
              <div className="accounts__avatar-wrapper">
                <img src="images/cabinet/avatar.png" alt="" className="accounts__avatar"/>
              </div>
              <div className="accounts__data">
                <h3 className="accounts__title">Groupname</h3>
                <p className="accounts__email">@nameofaccount</p>
              </div>
            </a>
          </li>
          <li className="accounts__item">
            <a href="#" className="accounts__link">
              <div className="accounts__avatar-wrapper">
                <img src="images/cabinet/avatar.png" alt="" className="accounts__avatar"/>
              </div>
              <div className="accounts__data">
                <h3 className="accounts__title">Groupname</h3>
                <p className="accounts__email">@nameofaccount</p>
              </div>
            </a>
          </li>
          <li className="accounts__item">
            <a href="#" className="accounts__link">
              <div className="accounts__avatar-wrapper">
                <img src="images/cabinet/avatar.png" alt="" className="accounts__avatar"/>
              </div>
              <div className="accounts__data">
                <h3 className="accounts__title">Groupname</h3>
                <p className="accounts__email">@nameofaccount</p>
              </div>
            </a>
          </li>
          <li className="accounts__item">
            <a href="#" className="accounts__link">
              <div className="accounts__avatar-wrapper">
                <img src="images/cabinet/avatar.png" alt="" className="accounts__avatar"/>
              </div>
              <div className="accounts__data">
                <h3 className="accounts__title">Groupname</h3>
                <p className="accounts__email">@nameofaccount</p>
              </div>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default Accounts;
