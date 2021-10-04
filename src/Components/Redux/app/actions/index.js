// due to better locating of resources
// action creator
// named export, in import outside fc needs curly braces
export const selectSong = (song) => {
  return {
    // ! every action creator needs type
    type: "SONG_SELECTED",
    payload: song,
  };
};
