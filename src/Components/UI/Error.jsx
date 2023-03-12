import React from "react";

import styles from "./Error.module.css";

const Error = (props) => {
  return (
    <div className={styles.error}>
      <div className={styles.message}>
        <h1>Error</h1>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default Error;
