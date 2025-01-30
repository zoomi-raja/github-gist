import React from "react";
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
function App() {
  /** refrence for our local cache */
  const cache = useRef(new Map());
  /**state management we could have used redux but overkill for current scenario useReducer hook can also
   * be good substitute
   */
  const [search, setSearch] = useState("");
  const [apiResult, setApiResult] = useState(initState);

  // this effect will run only once to initiate all results and set first empty string cache results too
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPublicList();
        setApiResult((prev) => {
          cache.current.set("", response.data);
          return {
            ...prev,
            loading: false,
            results: response.data ? response.data : [],
          };
        });
      } catch (e) {
        alert(e);
        setApiResult((prev) => {
          return {
            ...prev,
            loading: false,
            results: [],
          };
        });
      }
    }
    fetchData();
  }, []);

  /**Helpre function to set search result */
  const setSearchResults = async (value) => {
    if (cache.current.has(value)) {
      setApiResult((prev) => {
        return {
          ...prev,
          loading: false,
          results: cache.current.get(value),
        };
      });
    } else {
      try {
        if (!value) return;
        const response = await getByName({ username: value });
        setApiResult((prev) => {
          cache.current.set(value, response.data);
          return {
            ...prev,
            loading: false,
            results: response.data ? response.data : [],
          };
        });
      } catch (e) {
        alert(e);
        setApiResult((prev) => {
          return {
            ...prev,
            loading: false,
            results: [],
          };
        });
      }
    }
  };
  /** debounce function is used to limit the rate of api hits and useRef to keep the refrence of method
   * instead of initiating everytime
   */
  const delayedQuery = useRef(
    debounce(async (value) => await setSearchResults(value), 250)
  );

  /** useCallback is used to get benifit of memo in header component becuase other then permitive
   * types memo will always have new method
   */
  const setSearchByName = useCallback(
    (e) => {
      setSearch(e.target.value);
      setApiResult((prv) => {
        return {
          ...prv,
          loading: true,
        };
      });
      delayedQuery.current(e.target.value);
    },
    [setSearch, delayedQuery]
  );

  return (
    <div className="App">
      <div className="container">
        <Header search={search} setSearch={setSearchByName} />
        <Result {...apiResult} />
      </div>
    </div>
  );
}

export default App;
