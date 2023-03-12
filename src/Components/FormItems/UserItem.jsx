import React from "react";
import Card from "../UI/Card";
import styles from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <li className={styles.list}>
      <Card className={styles.content}>
        <h3>{props.username}</h3>
        <p>({props.age} years old)</p>
      </Card>
    </li>
  );
};

export default UserItem;
