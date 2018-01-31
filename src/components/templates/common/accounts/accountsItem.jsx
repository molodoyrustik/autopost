import React, { Component } from 'react';
import { Button, Dialog, FormGroup } from "@blueprintjs/core"
import { connect } from 'react-redux';

import { editAccount, deleteAccount } from '../../../../actions'

class accountsItem extends Component {

  state = {
    isOpen: false,
    login: '',
    password: '',
    typeID: 'Inst'
  };

  componentWillMount() {
    this.setState({
      login: this.props.login,
      password: this.props.password
    })
  }

  render() {
    const { login } = this.props;
    return (
      <li onClick={this.handleEditClick} className="accounts__item">
        <a className="accounts__link">
          <div className="accounts__avatar-wrapper">
            <img src="/images/cabinet/avatar.png" alt="" className="accounts__avatar"/>
          </div>
          <div className="accounts__data">
            <h3 className="accounts__title">Groupname</h3>
            <p className="accounts__email">{login}</p>
          </div>
        </a>

        <div className="accounts__modal">
          <Dialog
            iconName="inbox"
            isOpen={this.state.isOpen}
            onClose={this.handleEditClick}
            title="Изменить аккау">
            <div className="pt-dialog-body">
              <form className='accounts__modal-form'>
                <FormGroup
                  helperText="(ВК, Inst, FB и пр.)"
                  label="Тип аккаунта"
                  labelFor="text-input"
                  required={true}
                  disabled={true}>
                  <input id="text-input"
                    disabled={true}
                    placeholder="instagram"/>
                </FormGroup>

                <FormGroup
                  helperText="(ВК, Inst, FB и пр.)"
                  label="Логин аккаунта"
                  labelFor="text-input"
                  required={true}>
                  <input id="text-input"
                    placeholder="login"
                    value={this.state.login}
                    onChange={this.handleChange('login')}/>
                </FormGroup>

                <FormGroup
                  helperText="(ВК, Inst, FB и пр.)"
                  label="Пароль аккаунта"
                  labelFor="text-input"
                  required={true}>
                  <input id="text-input"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleChange('password')}/>
                </FormGroup>
              </form>
            </div>

            <div className="pt-dialog-footer">
                <Button
                  onClick={this.handleSubmit}
                  text="Изменить"
                  className='pt-intent-primary pt-large'
                />
                <Button
                  onClick={this.handleDelete}
                  text="Удалить аккаунт"
                  className='pt-intent-danger pt-large'
                />
            </div>
          </Dialog>
        </div>
      </li>
    )
  }

  handleEditClick = (e) => {
   console.log("CLICK", this.props.id);
   e.preventDefault();
   this.setState({ isOpen: !this.state.isOpen })
  }

  handleDelete = (e) => {
    const { id, deleteAccount } = this.props;

    deleteAccount({}, id);

    this.setState({
      isOpen: false
    })
  }

  handleSubmit = (e) => {
   e.preventDefault();
   const { editAccount, id } = this.props;
   const { login, password, typeID } = this.state;
   const options = {
     typeID,
     login,
     password
   }

   editAccount(options, id);

   this.setState({
     login: '',
     password: '',
     isOpen: false
   })
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
    typeID: {
      min: 3,
      max: 10
    },
    login: {
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
}, { editAccount, deleteAccount })(accountsItem);
