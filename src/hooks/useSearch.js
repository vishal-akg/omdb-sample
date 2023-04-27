import React, { useState } from "react";
import client from "../http-client";

function useSearch({ title, year, plot }) {
  const [result, setResult] = useState();
  const [error, setError] = useState(null);

  client
    .get("/", { params: { title, year, plot } })
    .then((res) => {
      setResult(res.data);
    })
    .catch((error) => {
      setError(error);
    });

  return { result, error };
}

export default useSearch;
