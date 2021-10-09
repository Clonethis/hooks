import { connect } from "react-redux";
const titles = {
  songs: [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I Want it That Way", duration: "1:45" },
  ],
  favoriteTitle: "All Star",
};
const Titles = ({ songs }) => {
  return (
    <div className="ui">
      {songs.title === songs.favouriteTitle ? (
        <h1>{songs.title.duration}</h1>
      ) : (
        <h2>Nothing</h2>
      )}
    </div>
  );
};
const mapToState = (state) => {
  return {
    songs: state.titles.songs,
    favoriteTitle: state.titles.favoriteTitle,
  };
};

export default connect(mapToState)(Titles);
