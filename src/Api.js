import React, { useState, useEffect } from "react";
import axios from "axios";
const wikiApi =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Nelson%20Mandela&utf8=&format=json";
const SearchBar = () => {
  //CANNOT BE MARKED AS A ASYNC OR AWAIT
  const [term, setTerm] = useState("");
  useEffect(() => {
    //   INSIDE CAN BE ASYNC
    const search = async () => {
      await axios.get(wikiApi);
    };
    search();
    // different syntax last "()" invokes before function
    // (async () => {
    //   await axios.get(wikiApi);
    // })();

    // one more aproach
    // axios.get(wikiApi).then((response) => {
    //   console.log(response.data);
    // });
    console.log("I am runnig how I want (once)");
    //argument after '}' tells when code is executed. Options : []->initial render,...nothing... -> initial r + after every rerender,  [term,...]-> initial r + after every rerender if data has changed
    // axios;
  }, [term]);
  const SearchSubmit = (term) => {
    term.preventDefault();
    console.log(term);
  };
  return (
    <div className="">
      <form className="ui search">
        {/* <label htmlFor="nice">Search</label> */}
        <input
          type="text"
          name="Nicenicecec"
          //   value={term}
          className="prompt"
          onChange={(e) => SearchSubmit(e.target.value)}
        />
      </form>
    </div>
  );
};
export default SearchBar;
