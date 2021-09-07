import React from "react";
import Accordion from "./Accordion";
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
const App = (props) => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
export default App;
