import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

//🔑🔑[LOGO CONNECTION]🔑🔑

function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
    </Link>
  ); //🔑🔑[LOGO CONNECTION]🔑🔑 we included the code inside of <Link/> to create the connection 🔑🔑[LOGO CONNECTION]🔑🔑
}

export default Logo;
