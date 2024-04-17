import { Link } from "react-router-dom";
import styles from "./Linkbutton.module.css";
import React from "react";

export default function LinkButton({ to, text }) {
  return (
    <Link to={to} className={styles.btn}>
      {text}
    </Link>
  );
}
