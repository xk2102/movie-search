import styles from "./Result.module.css";
import { useNavigate } from "react-router-dom";

type result = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

const Result: React.FC<{ result: result }> = (props) => {
  const navigate = useNavigate();
  const { result } = props;
  return (
    <div key={result.imdbID} className={styles.result} onClick={() => navigate(`${result.Title}`)}>
      <span>{`${result.Title}`}</span>
    </div>
  );
};

export default Result;
