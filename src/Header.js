import React from "react";
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <a href="/" className="item">
        SearchBar
      </a>
      <a href="/acc" className="item">
        Accordion
      </a>
      <a href="/translate" className="item">
        Translate
      </a>
      <a href="/dropdown" className="item">
        Dropdown
      </a>
    </div>
  );
};
export default Header;
