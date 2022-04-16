import { useEffect, useState } from "react";

const useFetch = (searchTerm, type) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let url = "";
  if (type === "s") {
    url = `http://www.omdbapi.com/?apikey=f410dbf1&s=${searchTerm}`;
  } else {
    url = `http://www.omdbapi.com/?apikey=f410dbf1&t=${searchTerm}`;
  }

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setData(data.Search);
      })
      .catch((error) => {
        // console.log(error);
        setLoading(false);
        setError(error);
      });
  }, [searchTerm]);

  return { data, loading, error };
};

export default useFetch;

// FUNCTIONS -----------------------------------------------
// function fetchData() {
//   return fetch(`http://www.omdbapi.com/?apikey=f410dbf1&s=${searchTerm}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// }
// async function fetchDataB() {
//   const response = await fetch(`http://www.omdbapi.com/?apikey=f410dbf1&s=${searchTerm}`);
//   const data = await response.json();
//   if (!response.ok) {
//     const message = `An error has occured: ${response.status}`;
//     return message;
//   } else {
//     console.log(data);
//     return data;
//   }
// }
