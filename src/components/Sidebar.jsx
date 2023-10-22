import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    //🍥🍥[NESTED ROUTES]🍥🍥 down, the <Outlet/> is connecting with the <Route's/> from the "App.jsx" file, is like sending {children} from the "App.jsx" file here in the <Outlet/> 🍥🍥[NESTED ROUTES]🍥🍥
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div> //👣👣[SIDEBAR]👣👣 now e must include this file in the "AppLayout.jsx" 👣👣[SIDEBAR]👣👣
  );
}

export default Sidebar;
