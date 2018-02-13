import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditModal from './edit-modal';

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
      <li onClick={this.toggleDialog} className="accounts__item">
        <a className="accounts__link">
          <div className="accounts__avatar-wrapper">
            <img src="/images/cabinet/avatar.png" alt="" className="accounts__avatar"/>
          </div>
          <div className="accounts__data">
            <h3 className="accounts__title">Groupname</h3>
            <p className="accounts__email">{login}</p>
          </div>
        </a>

        <EditModal
          isOpen={this.state.isOpen}
          login={this.state.login}
          password={this.state.password}
          titleModal="Изменить аккаунт"
          handleChange={this.handleChange}
          toggleDialog={this.toggleDialog}
          handleDelete={this.handleDelete}
          handleSubmit={this.handleSubmit}
          submitButton={{text: 'Изменить'}}
          deleteButton={{text: 'Удалить аккаунт', hide: true}}
        />
      </li>
    )
  }

  toggleDialog = (e) => {
    console.log('yes');
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
