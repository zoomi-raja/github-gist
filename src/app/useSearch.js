import { useEffect, useReducer } from "react";
import { getByName, getPublicList } from "./utilities/requests";

let initState = {
  results: [],
  loading: true,
};
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
function useSearch(cache) {
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
  return [apiResult, searchResult];
}

export default useSearch;
