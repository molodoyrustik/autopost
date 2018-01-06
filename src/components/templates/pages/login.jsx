import React from 'react';

import LoginLayout from '../layouts/login-layout.jsx';

const Login = (props) => {
  return (
    <LoginLayout>
      <div className="login">
        <div className="login__box">
          <div className="login__logo-pos">
            <img src="/images/header-logo.png" alt="" className="login__logo-img"/>
          </div>

          <form action="" className="login__form">
            <input type="email" className="login__input" placeholder='Введите e-mail'/>
            <input type="password" className="login__input" placeholder='Введите пароль'/>
            <button className="login__submit">Вход</button>
            <a href="/cabinet" className="login__forget-password">Забыли пароль</a>
          </form>
        </div>
      </div>
    </LoginLayout>
  )
}

export default Login;
