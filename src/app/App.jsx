import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";
import { Header } from "./components/header/header";
import { Result } from "./components/result/result";
import { debounce } from "./utilities/functions";
import useSearch from "./useSearch";

/** refrence for our local cache remember it will not persist on refresh*/
const cache = new Map();

function App() {
  /**state management we could have used redux but overkill for current scenario useReducer is good substitute
   */
  const [search, setSearch] = useState("");
  const [apiResult, searchResult] = useSearch(cache);
  /** useCallback is used to keep the refrence of method instead of initiating everytime
   */
  const debouncedSearchResult = useCallback(debounce(searchResult, 250), []);

  /**
   * monitor the search input and debounce it
   * this will help to limit the rate of api hits
   */
  useEffect(() => {
    const abortController = new AbortController();
    // get new results if search string length > 3
    debouncedSearchResult(search, abortController.signal);
    // abort on unmount
    return () => {
      abortController.abort();
    };
  }, [search]);
  return (
    <div className="App">
      <div className="container">
        <Header search={search} setSearch={setSearch} />
        <Result {...apiResult} />
      </div>
    </div>
  );
}

export default App;
