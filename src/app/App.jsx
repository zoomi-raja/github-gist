import React, { useReducer } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";
import { Header } from "./components/header/header";
import { Result } from "./components/result/result";
import { debounce } from "./utilities/functions";
import { getByName, getPublicList } from "./utilities/requests";

let initState = {
  results: [],
  loading: true,
};
/** refrence for our local cache remember it will not persist on refresh*/
const cache = new Map();
const resultReducer = (state, action) => {
  switch (action.type) {
    case "SET_RESULTS":
      return {
        ...state,
        results: action.payload ?? [],
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
function App() {
  /**state management we could have used redux but overkill for current scenario useReducer hook can also
   * be good substitute
   */
  const [search, setSearch] = useState("");
  const [apiResult, setApiResultDispatch] = useReducer(
    resultReducer,
    initState
  );

  // this effect will run only once to initiate all results and set first empty string cache results too
  useEffect(() => {
    async function fetchData() {
      setApiResultDispatch({ type: "SET_LOADING", payload: true });
      try {
        const response = await getPublicList();
        cache.set("", response.data);
        setApiResultDispatch({ type: "SET_RESULTS", payload: response.data });
      } catch (e) {
        setApiResultDispatch({ type: "SET_RESULTS", payload: [] });
      }
    }
    fetchData();
  }, []);

  /**Helpre function to set search result */
  const searchResult = async (value, signal) => {
    if (cache.has(value)) {
      setApiResultDispatch({ type: "SET_RESULTS", payload: cache.get(value) });
    } else {
      try {
        if (value.length < 3) return;
        setApiResultDispatch({ type: "SET_LOADING", payload: true });
        const response = await getByName({ username: value, signal });
        cache.set(value, response.data);
        setApiResultDispatch({ type: "SET_RESULTS", payload: response.data });
      } catch (e) {
        alert(e);
        setApiResultDispatch({ type: "SET_RESULTS", payload: [] });
      }
    }
  };
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
