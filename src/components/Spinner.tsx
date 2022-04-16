import styles from "./Spinner.module.css";
// LIBRARIES ---------------------------------------------
import { useMediaQuery } from "react-responsive";
import { ImSpinner9 } from "react-icons/im";

const Spinner = () => {
  // const largerThan600 = useMediaQuery({ query: "(min-width: 600px)" }); // MOBILE
  const largerThan900 = useMediaQuery({ query: "(min-width: 900px)" }); // TABLET
  const largerThan1200 = useMediaQuery({ query: "(min-width: 1200px)" }); // HD
  const largerThan1900 = useMediaQuery({ query: "(min-width: 1900px)" }); // FHD
  const largerThan2500 = useMediaQuery({ query: "(min-width: 2500px)" }); // UHD
  const largerThan3800 = useMediaQuery({ query: "(min-width: 3800px)" }); // QHD
  // -----------------------------------------------------------
  // RENDERS----------------------------------------------------
  // -----------------------------------------------------------
  function renderLogoAccordingToSize() {
    if (largerThan3800) {
      return <ImSpinner9 size={90} className={styles.spin} />;
    } else if (largerThan2500) {
      return <ImSpinner9 size={80} className={styles.spin} />;
    } else if (largerThan1900) {
      return <ImSpinner9 size={70} className={styles.spin} />;
    } else if (largerThan1200) {
      return <ImSpinner9 size={60} className={styles.spin} />;
    } else if (largerThan900) {
      return <ImSpinner9 size={50} className={styles.spin} />;
    } else {
      return <ImSpinner9 size={40} className={styles.spin} />;
    }
  }
  return (
    <div className={`animate ${styles.spinner}`}>
      {/* <h2>Loading...</h2> */}
      {renderLogoAccordingToSize()}
    </div>
  );
};
export default Spinner;
