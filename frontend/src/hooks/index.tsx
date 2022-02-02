import { useState, useEffect } from "react";
import { JsonData } from "../types/index";

// Fetching data from the endpoint

export const useFetchData = () => {
  // Data in in JSON format
  const [data, setData] = useState<JsonData | undefined>(undefined);
  const [error, setError] = useState(undefined);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // In case if data is not loaded we set loading to true
    fetch("/1?format=json/") // To ensure that the data is in JSON format
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  return { data, error, loading };
};
