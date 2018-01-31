import React from 'react';
import LoginLayout from '../layouts/login-layout.jsx';
import LoginForm from '../sections/login/login-form.jsx';

const Login = (props) => {
  return (
    <LoginLayout>
      <div className="login">
        <div className="login__box">
          <div className="login__logo-pos">
            <img src="/images/header-logo.png" alt="" className="login__logo-img"/>
          </div>

          <LoginForm />
        </div>
      </div>
    </LoginLayout>
  )
}

export default Login;
