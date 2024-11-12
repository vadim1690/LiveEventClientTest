// components/NavBar/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <h1>Live Event</h1>
      <div className={styles.navLinks}>
        <Link to="/">אורחים</Link>
        <Link to="/add-user">הוסף אורח</Link>
        <Link to="/photo-upload">העלאת תמונה</Link>
      </div>
    </nav>
  );
};

export default NavBar;
