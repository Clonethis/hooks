import React, { useState, useEffect } from "react";
import axios from "axios";
const Convert = ({ language, text }) => {
  const [translated, setTraslated] = useState("");
  //   setting up limited search results
  const [debouncedText, setDebouncedText] = useState({ text });
  useEffect(() => {
    // timeout sets timer
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);
  useEffect(() => {
    // console.log("new language");
    const doTranslation = async () => {
      //   this '{data}' is taking on part data from json response

      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      setTraslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedText]);
  return (
    <div className="ui text">
      {translated}
      <h3>{language.value}</h3>
    </div>
  );
};
export default Convert;
