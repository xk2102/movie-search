import styles from "./ResultDetailed.module.css";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "./Spinner";

const ResultDetailed = () => {
  const navigate = useNavigate();
  let params = useParams();

  const { data, error, loading } = useFetch(params.Title, "t");

  return (
    <div className={`animate ${styles.resultDetailed}`}>
      {error && <p>error</p>}
      {loading && <Spinner />}
      {`Title: ${params.Title}`}
      {data && <img src={data.Poster} alt="data.Poster" />}
      <button onClick={() => navigate("/")}>back</button>
    </div>
  );
};
export default ResultDetailed;
