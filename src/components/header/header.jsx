import React from "react";
import bg from "./bg2.webp";
import ts50 from "./ts50.PNG";
import styles from "./header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Header = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <img alt="ts50-menu-app" src={ts50} className={styles.center} />
    </div>
  );
};

export default Header;
