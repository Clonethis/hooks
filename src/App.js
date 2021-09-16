import React, { useState } from "react";
import Header from "./Header";
import Accordion from "./Accordion";
import CounterExample from "./CounterExample";
import SearchBar from "./Api";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";

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
// const showAccordion = () => {
//   if (window.location.pathname === "/") {
//     return <Accordion items={items} />;
//   }
// };
// const showList = () => {
//   if (window.location.pathname === "/list") {
//   }
// };

// const showTranslate = () => {
//   if (window.location.pathname === "/translate") {
//     return <Translate />;
//   }
// };

// const showDropdown = () => {
//   if (window.location.pathname === "/dropdown") {
//     return (
//       <Dropdown options={options} label="I like trains" selected={selected} />
//     );
//   }
// };
const App = (props) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="ui text container">
      <Header />
      {/* <Translate /> */}
      <Route path="/">
        <SearchBar />
      </Route>
      <Route path="/acc">
        <Accordion items={items} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      {/* <Fetcher /> */}
    </div>
  );
};
export default App;
