import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import AccountsItem from './accountsItem';
import { getAccounts, setAccount } from '../../../../actions'
import { Button, Dialog, FormGroup } from "@blueprintjs/core"

class Accounts extends Component {
  state = {
    isOpen: false,
    login: '',
    password: '',
    typeID: 'Inst'
  };

  componentWillMount() {
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

        <div className="accounts__modal">
          <Dialog
            iconName="inbox"
            isOpen={this.state.isOpen}
            onClose={this.toggleDialog}
            title="Добавить аккаунт">
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
                  text="Добавить"
                  className='pt-intent-primary pt-large'
                />
            </div>
          </Dialog>
        </div>
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

  // handleEdit = e => {
  //   if(e.target.closest('li[class="accounts__item"')) {
  //     console.log("CLICK");
  //   }
  // }
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
