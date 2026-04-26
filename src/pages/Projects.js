import { motion } from "framer-motion";
import projects from "../data/projects";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-light mb-4">My Projects</h2>

      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4" key={project.id}>
            
            <motion.div
  className={styles.card}
  initial="hidden"
  animate="show"
  variants={{
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
  transition={{ duration: 0.4 }}
  whileHover={{ scale: 1.03 }}
>

              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />

              <div className="card-body">
                <h5>{project.title}</h5>
                <p>{project.description}</p>

                <a
  href={project.link}
  className="btn-purple"
  target="_blank"
  rel="noreferrer"
>
  View Project
</a>
              </div>

            </motion.div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;