// Import React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';
// import faker from 'faker';

import SeasonDisplay from './SeasonDisplay';
import LoadingSpinner from './LoadingSpinner';

class App extends React.Component {
  state = {
    lat: null,
    errorMessage: '',
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message }),
    );
  }

  renderContent() {
    const { errorMessage, lat } = this.state;

    if (errorMessage && !lat) {
      return <div> Error: {errorMessage}</div>;
    } else if (lat && !errorMessage) {
      return <SeasonDisplay lat={lat} />;
    }

    return <LoadingSpinner text="Waiting for location permission..." />;
  }

  render() {
    // try to avoid conditionals in render methods
    // if this border was needed in all cases, it would have to be added individually to each
    // this way you can split out the conditional and just add it once
    return (
      <div style={{ border: 'solid black 10px' }}>{this.renderContent()}</div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
