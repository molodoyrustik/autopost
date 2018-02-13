import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import AccountsItem from './accountsItem';
import EditModal from './edit-modal';
import { getAccounts, setAccount } from '../../../../actions'
import { Button, Dialog, FormGroup } from "@blueprintjs/core"

class Accounts extends Component {
  state = {
    isOpen: false,
    login: '',
    password: '',
    typeID: 'Inst'
  };

  componentDidMount() {
    this.props.getAccounts();
  };

  render() {
    const { accounts } = this.props;
    const tmpl = accounts.map((account) => {
      return <AccountsItem
              key={shortid.generate()}
              login={account.login}
              id={account.id}
              password={account.password}/>;
    })
    return (
      <div className="accounts">
        <aside className="accounts__sidebar">
          <button onClick={this.toggleDialog} className="accounts__add-btn">Добавить аккаунт</button>

          <ul className="accounts-list">
          {tmpl}
          </ul>
        </aside>

        <EditModal
          isOpen={this.state.isOpen}
          login={this.state.login}
          password={this.state.password}
          titleModal="Добавить аккаунт"
          handleChange={this.handleChange}
          toggleDialog={this.toggleDialog}
          handleDelete={this.handleDelete}
          handleSubmit={this.handleSubmit}
          submitButton={{text: 'Добавить'}}
          deleteButton={{text: '', hide:false }}
        />
      </div>
    )
  }

  toggleDialog = e => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { setAccount } = this.props;
    const { login, password, typeID } = this.state;
    const options = {
      typeID,
      login,
      password
    }
    setAccount(options);
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
    accounts: state.user.accounts
  }
}, { getAccounts, setAccount })(Accounts);
