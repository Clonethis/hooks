import react, { useState } from "react";
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
const Translate = () => {
  const [language, setLanguage] = useState("af");
  return (
    <div>
      <Dropdown options={values} />
    </div>
  );
};
export default Translate;
