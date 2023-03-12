import React, { useState } from "react";

import styles from "./FormControl.module.css";

import Card from "../UI/Card";

const FormControl = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const onUserChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const onAgeChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const userData = {
      userName: username,
      age: age,
      id: Math.random().toString(),
    };
    props.sendUserData(userData);
    setUsername("");
    setAge("");
  };

  return (
    <Card className={styles["form-control"]}>
      <form action="#" onSubmit={onSubmitHandler}>
        <div className={styles["form-control__username"]}>
          <label htmlFor="username">Username</label>
          <input
            onChange={onUserChangeHandler}
            value={username}
            type="text"
            name="username"
          />
        </div>
        <div className={styles["form-control__age"]}>
          <label htmlFor="age">Age (years)</label>
          <input
            onChange={onAgeChangeHandler}
            value={age}
            type="number"
            name="age"
          />
        </div>
        <button className={styles.button} type="submit">
          Add User
        </button>
      </form>
    </Card>
  );
};

export default FormControl;
