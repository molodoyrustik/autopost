import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { signup } from '../../../../actions'

class SignUpFrom extends Component {
  state = {
    email: '',
    password: ''
  };

  render() {
    return (
      <form onSubmit = {this.handleSubmit} className="login__form">
        <input
          type="email"
          value={this.state.email}
          onChange = {this.handleChange('email')}
          className={`login__input ${this.getClassName('email')}`}
          placeholder='Введите e-mail'
        />
        <input
          type="password"
          value={this.state.password}
          onChange = {this.handleChange('password')}
          className={`login__input ${this.getClassName('password')}`}
          placeholder='Введите пароль'
        />
        <button type='submit' className="login__submit">Регистрация</button>
        <Link to="/cabinet" className="login__forget-password">Забыли пароль</Link>
        <Link to='/login' className="login__forget-password">Sign in</Link>
      </form>
    )
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const { email, password } = this.state;
    const data = {
      email,
      password
    }

    this.props.signup(data, this.state.type);
    this.setState({
      email: '',
      password: ''
    })
  }

  getClassName = type => {
    if(this.state[type].length && this.state[type].length < limits[type].min) {
      return 'form-input__error';
    } else {
      return '';
    }
  }

  handleChange = type => ev => {
        const { value } = ev.target;
        if (value.length > limits[type].max) return;
        this.setState({
            [type]: value
        })
  };
}

const limits = {
    email: {
        min: 3,
        max: 30
    },
    password: {
        min: 3,
        max: 30
    }
}

export default connect((state) => {
  return {

  }
}, { signup })(SignUpFrom);
