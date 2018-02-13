import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

import AddPost from '../add-post';
import CabinetItem from './cabinet-item';

import { getPosts, deletePost } from '../../../../actions'

class CabinetPosts extends Component {
  state = {
    isOpen: false
  };

  componentDidMount() {
    this.props.getPosts();
  };

  render() {
    const { posts } = this.props;
    const tmplItems = posts.map((post) => {
      return <CabinetItem key={shortid.generate()} image={post.image} text={post.text} id={post.id} handleDelete={this.handleDelete}/>
    });

    return (
      <div className="cabinet__posts">
        <ul className="cabinet__posts-list">
          <li onClick={this.toggleModal} className="cabinet__posts-item cabinet__posts-item-add">
            <div className="cabinet__posts-img-wrapper">
              <img src="/images/cabinet/add-post.png" alt="" className="cabinet__posts-img"/>
            </div>
            <h4 className="cabinet__posts-title">Add new post</h4>
            <p className="cabinet__posts-time">Looks like we have sent all of your updates</p>
          </li>

          {tmplItems}

        </ul>
        <AddPost isOpen={this.state.isOpen} callbackClose={this.handleClose}/>
      </div>
    )
  }

  toggleModal = e => {
    this.setState({isOpen: !this.state.isOpen })
  }

  handleClose = e => {
    this.setState({isOpen: false })
  }

  handleDelete = id => e => {
    e.preventDefault();
    this.props.deletePost(id);
  }
}

export default connect((state) => {
  return {
    posts: state.user.posts
  }
}, { getPosts, deletePost })(CabinetPosts);
