import React from 'react';

const LoadingSpinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.text}</div>
    </div>
  );
};

LoadingSpinner.defaultProps = {
  text: 'Loading...',
};

export default LoadingSpinner;
