import React from "react";
import styles from "./Headers.module.scss";
import { ReactComponent as OpenAqLogo } from "../../assets/opanaq_icon.svg";
import { openAqPageUrl } from "../../config/Urls";

const Footer = () => (
  <footer className={styles.Footer__wrapper}>
    <a
      className={styles.Footer__hyperlink}
      href={openAqPageUrl}
      target="_blank"
    >
      <OpenAqLogo className={styles.Footer__icon} />
    </a>
    <div>Air quality data by</div>
  </footer>
);
export default Footer;
