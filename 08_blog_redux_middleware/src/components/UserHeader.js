import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
  renderList() {}

  render() {
    return (
      <div className="ui relaxed divided list">
        {(this.props.user && this.props.user.name) || 'NO NAME'}
      </div>
    );
  }
}

// mapStateToProps is called with current state and a list of the props already on the component
const mapStateToProps = (state, ownProps) => {
  // state.posts is defined in reducers/index.js
  // this function adds everything in the object to this components props
  return { user: state.users[ownProps.userId] };
};

export default connect(mapStateToProps)(UserHeader);
