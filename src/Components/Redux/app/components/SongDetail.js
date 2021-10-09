import React from "react";

import { connect } from "react-redux";

const SongDetail = (props) => {
  console.log("this my props in songDetail", props);
  if (props.song) {
    return (
      <div className="ui">
        <p>name</p>
        <h2>{props.song.title}</h2>
        <p>Duration</p>
        <h2>{props.song.duration}</h2>
      </div>
    );
  } else {
    return (
      <div className="ui">
        <h1>Please select song First</h1>
      </div>
    );
  }
};
// from ../reducers/index.js -> combineReducers pushes 'keys' into this
// here for working with state
const mapStateToProps = (state) => {
  // ! song could be named as I would like...
  return { song: state.selectedSong };
};
// this is form of dispatch function -> connectivity to redux
export default connect(mapStateToProps)(SongDetail);
