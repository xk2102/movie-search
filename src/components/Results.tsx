import Result from "./Result";
import styles from "./Results.module.css";
import Spinner from "./Spinner";

const Results: React.FC<{ data: any[]; loading: boolean; searchTerm: string; error: string | null }> = (props) => {
  // PROPS
  const { data, loading, searchTerm, error } = props;
  return (
    <div className={`animate ${styles.results}`}>
      {error && <p>error</p>}
      {loading && searchTerm !== "" && <Spinner />}
      {data && data.map((result) => <Result key={result.imdbID} result={result} />)}
    </div>
  );
};

export default Results;
