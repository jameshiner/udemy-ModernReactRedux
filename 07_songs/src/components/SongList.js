import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderSongList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderSongList()}</div>;
  }
}

// conventional standard functional name
// this is passed into the connect function and called with state
// state here is everything in the redux store
// everything returned from this will be added to this.props
const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

// define component that reaches up to the provider and get some amount of state
// passing an imported action in as the second param stores that action creator in props
// the action creator is passed into the connect function because the connect function is what acutally dispatches that action once its called and updates the store
// if the action creator is not passed in, when it is called above, it would just return the js object we defined in the function and be done
export default connect(mapStateToProps, { selectSong })(SongList);
