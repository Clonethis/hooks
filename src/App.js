import React, { useState } from "react";
import Accordion from "./Accordion";
import CounterExample from "./CounterExample";
import SearchBar from "./Api";
import Dropdown from "./Dropdown";
import Translate from "./Translate";

// Must be array not
const items = [
  {
    heading: "I like big boobs",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
  {
    heading: "I like small boobs",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
  {
    heading: "I like perfect boobs",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
  {
    heading: "I like best boobs",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
];
const options = [
  { label: "Red Nice", value: "red" },
  { label: "Blu better", value: "blue" },
  {
    label: "Green",
    value: "green",
  },
];
const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};
const showList = () => {
  if (window.location.pathname === "/list") {
  }
};

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
  }
};

const showList = () => {
  if (window.location.pathname === "/list") {
  }
};
const App = (props) => {
  return (
    <div className="ui text container">
      {/* <Translate /> */}
      {showAccordion()}
      {/* <Fetcher /> */}
    </div>
  );
};
export default App;
