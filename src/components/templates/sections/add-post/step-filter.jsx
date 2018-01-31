import React, { Component } from 'react';

class StepFilter extends Component {

  render() {
    const { filter } = this.props;
    return(
      <div className={`step step-filter ${ filter ? 'show': 'hide'}`}>
      <form className="step-filter__form" onSubmit={this.handleSubmit}>
        <h2>Filter</h2>
        <button type='submit' className="ready-btn">готово</button>
      </form>
      </div>
    )
  }

  handleSubmit = e => {
    e.preventDefault();
    const { handleNext } = this.props;
    handleNext('filter')
  }
}

export default StepFilter;
