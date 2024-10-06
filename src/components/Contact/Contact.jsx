import React from "react";
import styles from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => (
  <div>
    <p>{name}</p>
    <p>{number}</p>
    <button className={styles.button} onClick={onDelete}>
      Delete
    </button>
  </div>
);

export default Contact;
