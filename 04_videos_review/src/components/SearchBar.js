import React from 'react';

class SearchBar extends React.Component {
  state = { searchValue: '' };

  onSearchFormSubmit = (e) => {
    e.preventDefault();

    // todo callback from parent comp
    this.props.onSearchFormSubmit(this.state.searchValue);
  };

  onSearchBarChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onSearchFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              onChange={this.onSearchBarChange}
              value={this.state.searchValue}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
