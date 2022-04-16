import useDebounce from "../wdshooks/3-useDebounce/useDebounce";
import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar: React.FC<{ setSearchTerm: React.Dispatch<React.SetStateAction<string>> }> = (props) => {
  // PROPS--------------------------------------------
  const { setSearchTerm } = props;
  // STATE--------------------------------------------
  const [input, setInput] = useState("");
  useDebounce(() => setSearchTerm(input), 1000, [input]);
  // RETURN --------------------------------------------
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="enter search term(s)..." value={input} onChange={(event) => setInput(event.target.value)} />
    </div>
  );
};
export default SearchBar;
