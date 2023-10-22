import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    //🎐🎐[PAGE NAV]🎐🎐 Here we are connecting to the page nav, go check also the "PageNav.jsx" file 🎐🎐[PAGE NAV]🎐🎐
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main> //🔗🔗[PAGES LINK CONNECTIONS]🔗🔗 here we connect the <Link/> with the "App.jsx" file by creating a link/button// NOTE that we need to use the "path" definition to connect them, in our case is "/app" 🔗🔗[PAGES LINK CONNECTIONS]🔗🔗
  );
}
