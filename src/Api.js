import React, { useState, useEffect } from "react";
import axios from "axios";
const wikiApi =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&utf8=&format=json&srsearch=Nelson%20Mandela";
const SearchBar = () => {
  //CANNOT BE MARKED AS A ASYNC OR AWAIT
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);
  // console.log(results);
  useEffect(() => {
    //   INSIDE CAN BE ASYNC
    const search = async () => {
      // there could be only data... WTF
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          // this links co 'useState()' term
          srsearch: term,
        },
      });
      setResults(data.query.search);
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
  // const SearchSubmit = (term) => {
  // term.preventDefault();
  //   console.log(term);
  // };
  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {/* security risk| could be interrupted by hacker... */}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          {/* {result.snippet} */}
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        {/* <label htmlFor="nice">Search</label> */}

        <div className="field">
          <label>enter Term</label>

          <input
            type="text"
            name="Nicenicecec"
            //   value={term}
            className="prompt"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <div className="ui celled list">{renderedResults}</div>
      </div>
    </div>
  );
};
export default SearchBar;
