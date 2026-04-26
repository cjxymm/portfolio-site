import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className="container mt-5">

      <h2>Contact Me</h2>

      <input className={styles.input} placeholder="Name" />
      <input className={styles.input} placeholder="Email" />
      <textarea className={styles.input} rows="4" />

      <button className={styles.btn}>Send</button>

    </div>
  );
}

export default Contact;