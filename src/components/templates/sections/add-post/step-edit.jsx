import React, { Component } from 'react';
import shortid from 'shortid';

import ScaleItem from './scale-item';

class StepEdit extends Component {
  state = {
    scales: ['1:1', '3:4', '4:3', '16:9', '9:16', '?:?'],
    currentScale: ''
  }

  render() {
    const { edit, image } = this.props;

    const tmpl = this.state.scales.map((scale) => {
      return <ScaleItem
                currentScale={this.state.currentScale}
                handleClickItem={this.handleClickItem}
                scale={scale}
                key={shortid.generate()}
              />
    })

    return(
      <div className={`step step-edit ${ edit ? 'show': 'hide'}`}>
        <form className="step-edit__form" onSubmit={this.handleSubmit}>
          <div className="step-edit__img-box">
            <div className="step-edit__img-box-bg">
              <div className="step-edit__img-wrapper">
                <img src={image} alt="" className="step-edit__img"/>
              </div>
            </div>
          </div>
          <div className="step-edit__scale">
            <div className="step-edit__scale-box">
              <ul className="step-edit__list">
                {tmpl}
              </ul>
            </div>

            <button type='submit' className="ready-btn">готово</button>
          </div>

        </form>
      </div>
    )
  }

  handleClickItem = scale => e => {
    this.setState({ currentScale: scale })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { handleNext } = this.props;
    const options = { scale: this.state.currentScale };

    handleNext('edit', options);
    this.setState({ currentScale: '' })
  }
}

export default StepEdit;
