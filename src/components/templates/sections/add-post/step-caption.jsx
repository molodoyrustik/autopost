import React, { Component } from 'react';
import { DateInput } from "@blueprintjs/datetime";

class StepCaption extends Component {
  state = {
    text: '',
    date: ''
  }

  render() {
    const { caption, handleNext, image } = this.props;
    return(
      <div className={`step step-caption ${ caption ? 'show': 'hide'}`}>
        <form className="step-caption__form" onSubmit={this.handleSubmit}>
          <div className="step-edit__img-box">
            <div className="step-edit__img-box-bg">
              <div className="step-edit__img-wrapper">
                <img src={image} alt="" className="step-edit__img"/>
              </div>
            </div>
          </div>

          <div className="step-caption__text-box">
            <div className="step-caption__text-group">
              <textarea
                name="textarea"
                className="step-caption__textarea"
                value={this.state.text}
                onChange={this.handleChangeText}>
              </textarea>
              <div className="step-caption__time">
                <span className="step-caption__time-title">Опубликовать:</span>
                <DateInput
                  value={this.state.date}
                  onChange={this.handleDateChange}
                  className='step-caption_date-input'/>
              </div>
            </div>
            <button type='submit' className="ready-btn">готово</button>
          </div>
        </form>
      </div>
    )
  }

  handleChangeText = e => {
    e.preventDefault();
    this.setState({ text: e.target.value })
  }

  handleDateChange = date => {
    this.setState({ date })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { handleNext } = this.props;
    const options = {
      text: this.state.text,
      date: this.state.date
    };

    handleNext('caption', options);
    
    this.setState({ text: '', date:'' })
  }
}

export default StepCaption;
