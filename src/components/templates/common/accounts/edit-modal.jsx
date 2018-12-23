import React from 'react';
import { Dialog, Button, FormGroup } from "@blueprintjs/core"

const EditModal =  (props) => {
  return (
    <div className="accounts__modal">
      <Dialog
        iconName="inbox"
        isOpen={props.isOpen}
        onClose={props.toggleDialog}
        title={props.titleModal}>
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
                value={props.login}
                onChange={props.handleChange('login')}/>
            </FormGroup>

            <FormGroup
              helperText="(ВК, Inst, FB и пр.)"
              label="Пароль аккаунта"
              labelFor="text-input"
              required={true}>
              <input id="text-input"
                placeholder="password"
                value={props.password}
                onChange={props.handleChange('password')}/>
            </FormGroup>
          </form>
        </div>

        <div className="pt-dialog-footer">
            <Button
              onClick={props.handleSubmit}
              text={props.submitButton.text}
              className='pt-intent-primary pt-large'
            />
            {
              props.deleteButton.hide ? <Button
                onClick={props.handleDelete}
                text={props.deleteButton.text}
                className='pt-intent-danger pt-large'
              />: ''
            }

        </div>
      </Dialog>
    </div>
  )
}

export default EditModal;
