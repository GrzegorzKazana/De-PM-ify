import React from "react";
import styles from "./Headers.module.scss";
import { ReactComponent as OpenAqLogo } from "../../assets/opanaq_icon.svg";
import { openAqPageUrl } from "../../config/Urls";
import { openLink } from "../../utils/OpenLink";

const Footer = () => (
  <footer className={styles.Footer__wrapper}>
    <button
      className={styles.Footer__button}
      onClick={() => openLink(openAqPageUrl)}
    >
      <OpenAqLogo className={styles.Footer__icon} />
    </button>
    <div>Air quality data by</div>
  </footer>
);
export default Footer;
