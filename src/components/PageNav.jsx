import { NavLink } from "react-router-dom";
import Logo from "./Logo"; //🔑🔑[LOGO CONNECTION]🔑🔑 here we import the "Logo" file and connect it with the "Homepage" file//// also go an check the "Logo" file 🔑🔑[LOGO CONNECTION]🔑🔑
import styles from "./PageNav.module.css";

//🎐🎐[PAGE NAV]🎐🎐

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
