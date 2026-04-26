import { motion } from "framer-motion";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();
  
  return (
    <div className={styles.container}>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.title}
      >
        Hi, I'm Ciara Valle
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={styles.subtitle}
      >
        Front-End Developer • UI Designer 
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <button
  className="btn-purple me-2"
  onClick={() => navigate("/projects")}
>
  View Work
</button>

<button
  className="btn btn-outline-light"
  onClick={() => navigate("/contact")}
>
  Contact
</button>
      </motion.div>

    </div>
  );
}

export default Home;