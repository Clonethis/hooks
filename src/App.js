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
const App = (props) => {
  const [selected, setSelected] = useState(options[0]);
  const [show, setShow] = useState(true);
  return (
    <div className="ui text container">
      {/* <Accordion items={items} /> */}
      {/* <CounterExample /> */}
      {/* <SearchBar /> */}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show or not show
      </button>
      {show ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : (
        ""
      )}
      <Translate />
    </div>
  );
};
export default App;
