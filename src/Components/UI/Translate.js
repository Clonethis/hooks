import react, { useState } from "react";
import Convert from "../Backend/Convert";
import Dropdown from "./Dropdown";
const values = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

// const nice = await fetch("https://translate.sysctl.io/translate", {
//   method: "POST",
//   body: JSON.stringify({
//     q: "",
//     source: "en",
//     target: "es",
//   }),
//   headers: { "Content-Type": "application/json" },
// });

// console.log(await nice.json());

const Translate = () => {
  const [language, setLanguage] = useState(values[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Your text:</label>
          <div class="ui input">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Dropdown
        label="Language selection"
        selected={language}
        onSelectedChange={setLanguage}
        options={values}
      />
      <h3 className="ui header">Translate:</h3>
      <Convert language={language} text={text} />
    </div>
  );
};
export default Translate;
