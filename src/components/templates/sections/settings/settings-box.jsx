import React from 'react';

const CabinetPosts = (props) => {
  return (
    <div className="settings__box">
      <div className="settings__title-wrapper">
        <h2 className="settings__title">Члены команды</h2>
        <p className="settings__text">Sometimes you can need a helping hand keeping your Buffer topped up. Invite co-workers and freinds
        to help manage you Buffer and keep it full to the brim.</p>
      </div>

      <ul className="settings__list">
        <li className="settings__item">
          <a href="" className="settings__link">
            <div className="settings__avatar-wrapper">
              <img src="images/cabinet/avatar.png" alt="" className="settings__avatar"/>
            </div>
            <div className="settings__data">
              <h3 className="settings__title">Groupname</h3>
              <p className="settingss__email">@nameofaccount</p>
            </div>
          </a>
          <a href="" className="settings__remove-btn">Удалить профиль</a>
        </li>
      </ul>

      <a href="" className="settings__invite-btn">Пригласить пользователя</a>
    </div>
  )
}

export default CabinetPosts;
