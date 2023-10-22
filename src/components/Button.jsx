// /* eslint-disable */
import styles from "./Button.module.css";
//🧭🧭[PROGRAMMATIC NAVIGATION]🧭🧭 reusable button 🧭🧭[PROGRAMMATIC NAVIGATION]🧭🧭
function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
