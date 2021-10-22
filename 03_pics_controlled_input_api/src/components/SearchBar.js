import React from 'react';

class SearchBar extends React.Component {
  state = { searchValue: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.searchValue);
  };

  onInputChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.searchValue}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
