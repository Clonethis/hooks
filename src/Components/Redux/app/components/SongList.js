import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  // 'SongList' have props
  renderList() {
    return this.props.songs.map((song) => {
      console.log("nice song you have", song);
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
    //  ! call renderList Function ....
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}
// takes data and runnig some calculation on them
// passing this as a first calling parameter in export statement
// -> returns our songs that are in list and also 'Selected Song'
const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
  // return state;
};
// js alternative
// function mapStateToProps = ()=>{}
// valid js -> connect is react component
// 'selectSong' is passed as a prop into this due to accesibility with redux
// - cannot work with redux if redux was not a part of code
// --this syntax takes care of updating Redux state properly (call 'dispatch' for us)
export default connect(mapStateToProps, { selectSong })(SongList);
