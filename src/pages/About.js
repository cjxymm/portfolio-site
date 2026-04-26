import { motion } from "framer-motion";
import styles from "./About.module.css";

function About() {
  return (
    <div className="container mt-5">

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={styles.title}
      >
        About Me
      </motion.h2>

      <p className={styles.text}>
        I'm currently a student at the University of Central Florida and I'm pursuing Web Design. 
      </p>

      <h4>Skills</h4>
      <ul className={styles.text}>
        <li>React</li>
        <li>JavaScript</li>
        <li>UI/UX Design</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>

    </div>
  );
}

export default About;