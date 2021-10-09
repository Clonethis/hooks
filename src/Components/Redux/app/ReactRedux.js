import React from "react";
// Song list/detail app that on selection will show details of song using redux
// React components using redux will be more simpler than usual
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";
const ReactRedux = () => {
  return (
    //   sets up more presentating view
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};
export default ReactRedux;
