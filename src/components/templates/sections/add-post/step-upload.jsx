import React, { Component } from 'react';

class StepUpload extends Component {
  state = {
    link: '',
    image: '',
  };

  render() {
    const { upload } = this.props;
    const { link } = this.state;
    return(
      <div className={`step step-upload ${ upload ? 'show': 'hide'}`}>
        <form className="step-upload__form" onSubmit={this.handleSubmit}>
          <label className="step-upload__label">
            <input onChange={this.handleChangeImage('image')} type="file" className="step-upload__input"/>
            <span className="step-upload__span">Загрузить с компьютера</span>
          </label>
          <label className="step-upload__label">
            <span onClick={this.handleChangeLinkImage} className="step-upload__span">Загрузить ссылку</span>
          </label>
          <input
            type="text"
            className="step-upload__input-link"
            placeholder='Вставьте ссылку сюда'
            onChange={this.handleChangeImage('link')}
            value={link}
          />
          <button type='submit' className="ready-btn">готово</button>
        </form>
      </div>
    )
  }

  handleChangeImage = type => e => {
    if(type === 'image') {
      e.preventDefault();

      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.addEventListener('load', () => {
        var base64 = reader.result;
        this.setState({ image: base64 })
        this.handleSubmit(e);
      }, false);



    } else if(type === 'link') {
      this.setState({ link: e.target.value });

    }
  }

  handleChangeLinkImage = e => {
    this.setState({ image: this.state.link }, () => {
      this.handleSubmit(e);
    })
  }

  handleSubmit = e => {
    const { handleNext } = this.props;
    const options = { image: this.state.image };
    handleNext('upload', options);

    this.setState({ image: '', link:'' })
  }
}

export default StepUpload;
