import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const getResults = async (url) => {
    setLoading(true);
    console.log(url);
    const res = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "90fc69130amshc327401a207dc1fp1dd4e1jsn8cebfffdca30",
      },
    });

    const data = await res.json();

    if (url.includes("/news")) {
      setResults(data.entries);
    } else if (url.includes("/images")) {
      setResults(data.image_results);
    } else {
      setResults(data.results);
    }
    console.log(results);
    setLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchText, setSearchText, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
