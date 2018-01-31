import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setPost } from '../../../../actions'

import PostHeader from './post-header';
import ProcessBar from './process-bar';
import StepUpload from './step-upload';
import StepEdit from './step-edit';
import StepFilter from './step-filter';
import StepCaption from './step-caption';

class AddPost extends Component {
  state = {
    upload: true,
    edit: false,
    filter: false,
    caption: false,
    image: '',
    scale: '1:1',
    text: '',
    date: '',
    count: 1
  }

  render () {
    return (
      <div className={`add-post__wrapper ${this.props.isOpen? 'show': ''}`}>

        <div className="add-post">
          <PostHeader/>
          <ProcessBar count={this.state.count}/>

          <StepUpload
            handleNext={this.handleNext}
            upload={this.state.upload}
            image={this.state.image}
            link={this.state.link}
          />

          <StepEdit
            handleNext={this.handleNext}
            edit={this.state.edit}
            image={this.state.image}
          />

          <StepFilter
            handleNext={this.handleNext}
            filter={this.state.filter}
          />

          <StepCaption
            handleNext={this.handleNext}
            caption={this.state.caption}
            image={this.state.image}
          />


          <div onClick={this.handleClick} className="add-post__close"></div>
        </div>

        <div className="add-post__overlay"></div>
      </div>
    )
  }

  handleClick = e => {
    const { callbackClose } = this.props;
    callbackClose();

    this.setState({
      upload: true,
      edit: false,
      filter: false,
      caption: false,
      image: '',
      scale: '1:1',
      text: '',
      date: '',
      count: 1
    })
  }

  handleNext = (type, options) => {
    this.setState({ count: this.state.count + 1 });

    if(type === 'upload') {
      this.setState({ [type]: false, edit: true, image: options.image });
    } else if(type === 'edit') {
      this.setState({ [type]: false, caption: true, scale: options.scale });
    } else if(type === 'filter') {
      this.setState({ [type]: false, caption: true });
    } else if(type === 'caption') {
      this.setState({ text: options.text, date: options.date }, () => {
        const { image, date, text, scale } = this.state;
        const { accountID } = this.props;
        const data = { image, date, text, scale, accountID, proxyID: 1 };

        this.setState({
          upload: true,
          edit: false,
          filter: false,
          caption: false,
          image: '',
          link: '',
          count: 1,
          scale: '1:1',
          text: '',
          date: ''
        });
        this.props.setPost(data);
        this.props.callbackClose();
        console.log('submit');
      });

    }
  }
}

export default connect((state) => {
  return {
    accountID: state.user.id
  }
}, { setPost })(AddPost);
