import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {
  componentDidMount() {
    this.props.getPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
          <UserHeader userId={post.userId}></UserHeader>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

// mapStateToProps is called with current state
const mapStateToProps = (state) => {
  // state.posts is defined in reducers/index.js
  // this function adds everything in the object to this components props
  return { posts: state.posts };
};

export default connect(mapStateToProps, { getPostsAndUsers })(PostList);
