import React from 'react';
import LoginLayout from '../layouts/login-layout.jsx';
import SignUpForm from '../sections/signup/signup-form.jsx';

const SignUp = (props) => {
  return (
    <LoginLayout>
      <div className="login">
        <div className="login__box">
          <div className="login__logo-pos">
            <img src="/images/header-logo.png" alt="" className="login__logo-img"/>
          </div>

          <SignUpForm />
        </div>
      </div>
    </LoginLayout>
  )
}

export default SignUp;
