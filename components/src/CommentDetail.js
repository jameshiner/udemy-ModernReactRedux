import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metaData">
          <span className="date">{props.time}</span>
        </div>
        <div className="test">{props.content}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
