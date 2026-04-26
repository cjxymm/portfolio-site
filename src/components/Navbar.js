import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className="container d-flex justify-content-between">
        <Link className={styles.logo} to="/">Ciara's Portfolio</Link>

        <div>
          <Link className={styles.link} to="/">Home</Link>
          <Link className={styles.link} to="/about">About</Link>
          <Link className={styles.link} to="/projects">Projects</Link>
          <Link className={styles.link} to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;