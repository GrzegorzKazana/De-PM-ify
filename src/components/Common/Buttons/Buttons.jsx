import React from "react";
import styles from "./Buttons.module.scss";
import PropTypes from "prop-types";

export const TextButton = ({ text, onClick }) => (
  <button className={styles.TextButton} onClick={onClick}>
    {text}
  </button>
);

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
