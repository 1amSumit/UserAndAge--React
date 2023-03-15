import React, { useState } from "react";
import Card from "./Card";

import styles from "./Error.module.css";

const Error = (props) => {
  const onClickHandler = () => {
    props.getClickEvent(true);
  };
  return (
    <div>
      <div onClick={onClickHandler} className={styles.backdrop} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <button onClick={onClickHandler} className={styles.button}>
            Okay
          </button>
        </footer>
      </Card>
    </div>
  );
};

export default Error;
