import React from "react";
// Song list/detail app that on selection will show details of song using redux
// React components using redux will be more simpler than usual
import SongList from "./components/SongList";
const ReactRedux = () => {
  return (
    //   sets up more presentating view
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
    </div>
  );
};
export default ReactRedux;
