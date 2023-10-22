import Map from "../components/Map";
import Sidebar from "../components/Sidebar"; //👣👣[SIDEBAR]👣👣 connecting with the "sidebar" 👣👣[SIDEBAR]👣👣
import User from "../components/User";
import styles from "./AppLayout.module.css";
//to auttomatically import write "csm"
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
      {/* 👥👥[FAKE LOGIN]👥👥 here we are calling the <User/> */}
    </div>
  );
}

export default AppLayout;
