import React from "react";
import Accordion from "./Accordion";
const items = {
  0: {
    heading: "I like boobs",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
  1: {
    heading: "I like boobs",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
  2: {
    heading: "I like boobs",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
  3: {
    heading: "I like boobs",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
};
const App = (props) => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
export default App;
