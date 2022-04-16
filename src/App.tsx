// REACT
import { useState } from "react";
// CSS
import styles from "./App.module.css";
// COMPONENTS
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import ResultDetailed from "./components/ResultDetailed";
// HOOKS
import useFetch from "./hooks/useFetch";
// LIBRARIES
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  // STATE--------------------------------------------
  const [searchTerm, setSearchTerm] = useState("");
  // HOOKS
  const { data, error, loading } = useFetch(searchTerm, "s");

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <h1>movie-search</h1>
        <SearchBar setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<Results data={data} loading={loading} searchTerm={searchTerm} error={error} />} />
          <Route path="/:Title" element={<ResultDetailed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
