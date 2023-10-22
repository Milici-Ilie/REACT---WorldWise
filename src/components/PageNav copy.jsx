import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css"; //🎨🎨[CSS MODULES STYLE]🎨🎨 here we are importing the file "PageNav.module.css"//// go please and also check the files "./PageNav.module.css" and "AppLayout.jsx"/////// we definetly need to import those files ".css" in our ".jsx" files to bound them and the classe/styles will be than available only  on those ".jsx" files where we imported the files🎨🎨[CSS MODULES STYLE]🎨🎨

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav> //the "NavLink" will add to the selected file/page a class named "class=active" that can later be used to style this active class inside of CSS////🎨🎨[CSS MODULES STYLE]🎨🎨 the same in the <nav/> we are implementing the "style" 🎨🎨[CSS MODULES STYLE]🎨🎨
  );
}

export default PageNav;
