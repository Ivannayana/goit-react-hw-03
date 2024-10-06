import React from "react";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => (
  <ul className={styles.card}>
    {contacts.map(({ id, name, number }) => (
      <li className={styles.list} key={id}>
        <Contact name={name} number={number} onDelete={() => onDelete(id)} />
      </li>
    ))}
  </ul>
);

export default ContactList;
