// Import React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create a React component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Tate"
          time="Today at 6:00pm"
          content="great!!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Troy"
          time="Today at 11:00am"
          content="NICE!!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Gent"
          time="Yesterday at 7:30pm"
          content="COOL!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

// Render our component
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
