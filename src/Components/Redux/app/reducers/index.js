import { combineReducers } from "redux";

// static list of songs -> total overkill with redux
// we never intend to change it in shape or form
const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Nothing else matters", duration: "4:55" },
    { title: "Smells like teen Spirit", duration: "3:58" },
    { title: "Execute", duration: "2:58" },
    { title: "I wanted that way", duration: "2:10" },
  ];
};
// selecting specific song
const selectedSongReducer = (selectedSong = null, action) => {
  //  now we don't need this if statement due to staight forward answer
  // but in long run this is usefull practice
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
