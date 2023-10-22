import styles from "./Spinner.module.css";
//🌌🌌[SPINNER SPINNER]🌌🌌
function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Spinner;
