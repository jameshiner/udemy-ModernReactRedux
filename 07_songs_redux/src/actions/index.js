// action creator
export const selectSong = (song) => {
  // return an action
  return {
    // type is required
    type: 'SONG_SELECTED',
    // payload is optional
    payload: song,
  };
};
